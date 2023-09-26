import React, { useState, useEffect } from "react";
import { Desktop } from "../components/ReactResponse.js";
import MainHeader from "../components/MainHeader.js";
import axios from "axios";
import PopUp from "../components/PopUp.js";
import Footer from "../components/Footer.js";

import tier_SS from "../images/tier_SS.png";
import tier_S from "../images/tier_S.png";
import tier_A from "../images/tier_A.png";
import tier_B from "../images/tier_B.png";
import tier_Un from "../images/tier_UN.png";
import MileageHistoryBox from "../components/MileageHistoryBox.js";

import { Container } from "../styles/MileagePageStyled.js";

function MileagePage() {
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState([]);

    const [popup, setPopup] = useState(false);
    const [msg, setMsg] = useState("");
    const [goLogin, setGoLogin] = useState(false);

    async function getUserData() {
        const memberId = window.localStorage.getItem("memberId");
        try {
            const response = await axios.get(
                "https://api.skhuming-api.store/api/user/mileage/get",
                {
                    params: { memberId: memberId },
                    headers: {
                        Authorization: window.localStorage.getItem("token"),
                    },
                }
            );
            setUserData(response.data);
            setLoading(true);
        } catch (error) {
            if (error.response.status === 401) {
                setMsg(error.response.data);
                setGoLogin(true);
            } else {
                setMsg(error.response.data.message);
            }

            setPopup(true);
        }
    }

    // 마일리지 점수 리스트 get
    const [mileageList, setMileageList] = useState([]);
    async function getMileageList() {
        try {
            const response = await axios.get(
                "https://api.skhuming-api.store/api/mileage/select-box"
            );
            setMileageList(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    // selectbox
    const [addMileage, setAddMileage] = useState("");

    const handleMileage = (event) => {
        setAddMileage(event.currentTarget.value);
    };

    const submitMileage = (event) => {
        event.preventDefault();
        postMileage();
    };

    // 마일리지 추가 요청
    async function postMileage() {
        console.log(addMileage);
        try {
            const response = await axios.post(
                "https://api.skhuming-api.store/api/user/mileage/post",
                {
                    memberId: window.localStorage.getItem("memberId"),
                    mileageId: addMileage,
                },
                {
                    headers: {
                        Authorization: window.localStorage.getItem("token"),
                    },
                }
            );
            setMsg(
                "스쿰 마일리지를 추가하였습니다!\n하단의 my mileage history에서 확인해보세요!"
            );
            setPopup(true);
        } catch (error) {
            if (error.response.status === 401) {
                setMsg(error.response.data);
                setGoLogin(true);
            } else {
                setMsg(error.response.data.message);
            }

            setPopup(true);
        }
    }

    // 마일리지 내역
    const [mileageHistory, setMileageHistory] = useState([]);
    async function getMileageHistory() {
        try {
            const response = await axios.get(
                "https://api.skhuming-api.store/api/user/mileage/history/list",
                {
                    params: {
                        memberId: window.localStorage.getItem("memberId"),
                    },
                    headers: {
                        Authorization: window.localStorage.getItem("token"),
                    },
                }
            );
            setMileageHistory(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getUserData();
        getMileageList();
        getMileageHistory();
    }, []);

    // 티어 사진
    function rankImg(tier) {
        switch (tier) {
            case "SS":
                return <img src={tier_SS} alt="tier"></img>;
            case "S":
                return <img src={tier_S} alt="tier"></img>;
            case "A":
                return <img src={tier_A} alt="tier"></img>;
            case "B":
                return <img src={tier_B} alt="tier"></img>;
            default:
                return <img src={tier_Un} alt="tier"></img>;
        }
    }

    return (
        <Desktop>
            <Container>
                <MainHeader />
                {popup ? (
                    <PopUp onClose={setPopup} msg={msg} goLogin={goLogin} />
                ) : null}
                <div className="mileageBox">
                    <div className="mileageTitle">
                        <p>MY MILEAGE</p>
                        <hr />
                    </div>

                    <div className="userMileageBox">
                        <div className="userRankingBox">
                            <div className="userTierImg">
                                {loading ? rankImg(userData.tier) : ""}
                            </div>
                            <div className="userRanking">
                                <p>MY RANKING</p>
                                <div className="ranking">
                                    <p>{loading ? userData.nickname : ""}</p>
                                    <p>{loading ? userData.score : ""}점</p>
                                </div>
                            </div>
                        </div>

                        <div className="addMileageBox">
                            <p>ADD MILEAGE</p>

                            <div className="addMileage">
                                <form>
                                    <select
                                        className="skhumList"
                                        name="skhumList"
                                        onChange={handleMileage}
                                        value={addMileage}
                                    >
                                        {mileageList.map((item) => (
                                            <option
                                                key={item.mileageId}
                                                value={item.mileageId}
                                            >
                                                {item.mileageScore !== 0
                                                    ? `[${item.mileageScore}점] ${item.title}`
                                                    : item.title}
                                            </option>
                                        ))}
                                    </select>
                                    <button
                                        type="submit"
                                        className="skhumListBtn"
                                        onClick={submitMileage}
                                    >
                                        추가
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {mileageHistory.length !== 0 ? (
                        <div className="mileageHistoryTitle">
                            <p>MY MILEAGE HISTORY</p>
                            <hr />
                        </div>
                    ) : null}

                    <div className="mileageHistoryBox">
                        {mileageHistory ? (
                            mileageHistory.map((item) => (
                                <MileageHistoryBox
                                    title={item.title}
                                    mileageId={item.mileageId}
                                    mileageScore={item.mileageScore}
                                    systemDate={item.systemDate}
                                />
                            ))
                        ) : (
                            <p className="nullMileage">내역이 없습니다.</p>
                        )}
                    </div>
                </div>
                <Footer />
            </Container>
        </Desktop>
    );
}

export default MileagePage;
