import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MainHeader from "../components/MainHeader.js";
import axios from "axios";

import tier_SS from "../images/tier_SS.png";
import tier_S from "../images/tier_S.png";
import tier_A from "../images/tier_A.png";
import tier_B from "../images/tier_B.png";
import tier_Un from "../images/tier_UN.png";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .mileageBox {
        width: 50vw;
        margin: 10vh 0;
    }

    .mileageTitle > p {
        font-size: 30px;
        font-weight: bold;
        margin: 0;

        color: #2d6dcc;
    }

    .mileageTitle > hr {
        margin-bottom: 4vh;

        height: 3px;
        border: 0;
        background-color: #2d6dcc;
    }

    .userRankingBox {
        height: 21vh;
        margin-bottom: 4vh;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .userTierImg {
        width: 14vw;
        height: inherit;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .userTierImg > img {
        width: 8vw;
    }

    .userRanking {
        width: 28vw;
        height: inherit;
        padding: 0 4vw;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        border-radius: 0.625rem;
        background: #fbfbfb;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
    }

    .userRanking > p {
        margin: 0;

        color: #2d6dcc;
        font-size: 1.3rem;
        font-weight: bold;
    }

    .ranking {
        width: inherit;

        display: flex;
        justify-content: space-between;
    }

    .ranking > p {
        margin: 0;
        margin-top: 3vh;

        color: #204782;
        font-size: 1.1rem;
    }

    .addMileageBox {
        width: inherit;
        height: 22vh;
        padding: 0 4vw;

        display: flex;
        flex-direction: column;
        justify-content: center;

        border-radius: 0.625rem;
        background: #fbfbfb;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
    }

    .addMileageBox > p {
        margin: 0;
        margin-bottom: 3vh;

        color: #2d6dcc;
        font-size: 1.3rem;
        font-weight: bold;
    }

    .addMileage > form {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .skhumList {
        width: 44vw;
        padding: 1vh 1vw;

        border: none;
        border-radius: 0.85rem;
        background: #fff;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);

        font-size: 1rem;
    }

    .skhumListBtn {
        width: 3vw;
        padding: 1vh;
        margin-left: 2vw;

        border: none;
        border-radius: 0.75rem;
        background: #3a73c9;

        color: #fff;
        font-size: 0.8rem;

        cursor: pointer;
    }
`;

function MileagePage() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState([]);

    async function getUserData() {
        const memberId = window.localStorage.getItem("memberId");
        try {
            const response = await axios.get(
                "https://api.skhuming-api.store/user/api/mileage/get",
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
            console.error(error);
            window.confirm(error.response.data);
            navigate("/");
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
                "http://15.164.131.248:8080/user/api/mileage/post",
                {
                    memberId: window.localStorage.getItem("memberId"),
                    score: Number(addMileage),
                },
                {
                    headers: {
                        Authorization: window.localStorage.getItem("token"),
                    },
                }
            );
            console.log(response);
            window.confirm("🎉 스쿰 마일리지를 추가하였습니다!");
            window.location.reload();
        } catch (error) {
            console.error(error.response.data);
        }
    }

    useEffect(() => {
        getUserData();
        getMileageList();
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
        <Container>
            <MainHeader />
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
                                            value={item.mileageScore}
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
            </div>
        </Container>
    );
}

export default MileagePage;
