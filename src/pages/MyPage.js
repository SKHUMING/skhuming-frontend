import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Desktop } from "../components/ReactResponse.js";
import MainHeader from "../components/MainHeader.js";
import ScrapBoxWidget from "../components/ScrapBox_widget.js";
import axios from "axios";
import PopUp from "../components/PopUp.js";
import rankImg from "../components/RankImg.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faRightFromBracket,
    faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import { Container, StyledLink } from "../styles/MyPageStyled.js";

function MyPage() {
    const navigate = useNavigate();

    const [popup, setPopup] = useState(false);
    const [msg, setMsg] = useState("");
    const [goLogin, setGoLogin] = useState(false);

    async function submitLogout() {
        // 로그아웃 시에 필요한 클리어 작업 수행
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("memberId");

        // 리다이렉트
        navigate("/");
    }

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    async function getData() {
        const memberId = window.localStorage.getItem("memberId");
        try {
            const response = await axios.get(
                "https://api.skhuming-api.store/api/user/my-profile",
                {
                    params: { memberId: memberId },
                    headers: {
                        Authorization: window.localStorage.getItem("token"),
                    },
                }
            );
            setData(response.data);
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

    // 스크랩
    const [scrapData, setScrapData] = useState([]);
    async function getScrapData() {
        const memberId = window.localStorage.getItem("memberId");
        try {
            const response = await axios.get(
                "https://api.skhuming-api.store/api/user/my-page/scrap/list",
                {
                    params: { memberId: memberId },
                    headers: {
                        Authorization: window.localStorage.getItem("token"),
                    },
                }
            );
            setScrapData(response.data.reverse());
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

    // 마일리지
    const [mileageData, setMileageData] = useState([]);

    async function getMileageData() {
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
            setMileageData(response.data);
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

    useEffect(() => {
        getData();
        getScrapData();
        getMileageData();
    }, []);

    return (
        <Desktop>
            <Container>
                <MainHeader />
                {popup ? (
                    <PopUp onClose={setPopup} msg={msg} goLogin={goLogin} />
                ) : null}
                <div className="myPageBox">
                    <div className="userProfileBox">
                        <div className="user">
                            <p className="userName">
                                {loading ? data.memberName : ""}{" "}
                                {loading ? (
                                    <span className="nickName">
                                        ({data.nickname})
                                    </span>
                                ) : (
                                    ""
                                )}
                            </p>
                            <p className="userInfo">
                                {loading ? data.department : ""}{" "}
                                {loading ? data.studentNumber : ""}
                            </p>
                            <p className="userInfo">
                                {loading ? data.email : ""}
                            </p>
                        </div>
                        <div className="logout" onClick={submitLogout}>
                            <FontAwesomeIcon
                                icon={faRightFromBracket}
                                style={{ color: "#2d6dcc" }}
                            />
                        </div>
                    </div>

                    <div className="userMyPageBox">
                        <StyledLink to="/scrap">
                            <div className="userScrapBox">
                                <div className="scrapTitleBox">
                                    <div className="scrapTitle">
                                        <div className="titleIconBox">
                                            <p>MY SCRAP</p>
                                            <div className="moreIcon">
                                                <FontAwesomeIcon
                                                    icon={faSquarePlus}
                                                    style={{ color: "#2d6dcc" }}
                                                />
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                </div>

                                <div className="scrapContentBox">
                                    {scrapData.length > 0 ? (
                                        scrapData.map((item) => (
                                            <ScrapBoxWidget
                                                noticeId={item.noticeId}
                                                end={item.end}
                                                title={item.title}
                                            />
                                        ))
                                    ) : (
                                        <p className="noData">
                                            공지 게시판에서 기억하고 싶은 공지를
                                            스크랩 해보세요!
                                        </p>
                                    )}
                                </div>
                            </div>
                        </StyledLink>

                        <StyledLink to="/mileage">
                            <div className="userMileageBox">
                                <div className="mileageTitleBox">
                                    <div className="mileageTitle">
                                        <div className="titleIconBox">
                                            <p>MY SKHUM</p>
                                            <div className="moreIcon">
                                                <FontAwesomeIcon
                                                    icon={faSquarePlus}
                                                    style={{ color: "#2d6dcc" }}
                                                />
                                            </div>
                                        </div>
                                        <hr />
                                    </div>

                                    <div className="mileageBox">
                                        <div className="tierImg">
                                            {rankImg(mileageData.tier)}
                                        </div>
                                        <div className="userScoreBox">
                                            <p className="nickname">
                                                {loading
                                                    ? mileageData.nickname
                                                    : ""}
                                            </p>
                                            <p className="score">
                                                {loading
                                                    ? mileageData.score
                                                    : ""}
                                                점
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </StyledLink>
                    </div>
                </div>
            </Container>
        </Desktop>
    );
}

export default MyPage;
