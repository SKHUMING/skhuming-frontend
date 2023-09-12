import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import MainHeader from "../components/MainHeader.js";
import ScrapBoxWidget from "../components/ScrapBox_widget.js";
import axios from "axios";
import PopUp from "../components/PopUp.js";

import tier_SS from "../images/tier_SS.png";
import tier_S from "../images/tier_S.png";
import tier_A from "../images/tier_A.png";
import tier_B from "../images/tier_B.png";
import tier_Un from "../images/tier_UN.png";

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
            // console.log(response);
            setData(response.data);
            // if (data.length > 0) setLoading(true);
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
                // "https://api.skhuming-api.store/user/api/scrap/list",
                {
                    params: { memberId: memberId },
                    headers: {
                        Authorization: window.localStorage.getItem("token"),
                    },
                }
            );
            console.log(response.data);
            setScrapData(response.data.reverse());
        } catch (error) {
            console.log(error);
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
            {popup ? (
                <PopUp onClose={setPopup} msg={msg} goLogin={goLogin} />
            ) : null}
            <div className="myPageBox">
                <div className="userProfileBox">
                    <div className="user">
                        <p className="userName">
                            {loading ? data.memberName : ""}
                        </p>
                        <p className="userInfo">
                            {loading ? data.department : ""}
                            {loading ? data.studentNumber : ""}
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
                                {scrapData
                                    ? scrapData.map((item) => (
                                          <ScrapBoxWidget
                                              noticeId={item.noticeId}
                                              end={item.end}
                                              title={item.title}
                                          />
                                      ))
                                    : ""}
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
                                            {loading ? mileageData.score : ""}점
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </StyledLink>
                </div>
            </div>
        </Container>
    );
}

export default MyPage;
