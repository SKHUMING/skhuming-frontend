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

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .myPageBox {
        width: 65vw;
        height: 70vh;
        margin: 5vh 0;
    }

    .userProfileBox {
        height: 18vh;
        margin-bottom: 2.5vh;

        border-radius: 0.625rem;
        background: #fbfbfb;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
    }

    .userMyPageBox {
        display: flex;
        justify-content: space-between;
    }

    .userScrapBox {
        /* width: 48vw; */
        /* height: 50vh; */
        padding: 2vh 2vw;
        margin-right: 1vw;

        border-radius: 0.625rem;
        background: #fbfbfb;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
    }

    .userMileageBox {
        /* width: 20vw; */
        /* height: 50vh; */
        padding: 2vh 2vw;

        border-radius: 0.625rem;
        background: #fbfbfb;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
    }

    .userProfileBox {
        padding: 0 4vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .userName {
        margin: 0;
        margin-bottom: 1.5vh;

        font-size: 1.6rem;
        font-weight: bold;
        color: #204782;
    }

    .userName > span {
        margin-left: 0.5vw;

        font-size: 1rem;
        font-weight: lighter;
    }

    .userInfo {
        margin: 0;

        color: #204782;
    }

    .logout {
        font-size: 1.7rem;
        cursor: pointer;
    }

    .scrapTitleBox {
        width: 40vw;
        margin-top: 2vh;
    }

    .scrapContentBox {
        height: 38vh;

        overflow-y: scroll;
    }

    .mileageTitleBox {
        width: 16vw;
        margin-top: 2vh;
    }

    .scrapTitle > p,
    .mileageTitle > p {
        font-size: 1.5rem;
        font-weight: bold;
        margin: 0;

        color: #2d6dcc;
    }

    .scrapTitle > hr,
    .mileageTitle > hr {
        height: 2.5px;
        border: 0;
        background-color: #2d6dcc;
    }

    .mileageBox {
        width: 16vw;
        height: 38vh;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }

    .tierImg > img {
        width: 8.5vw;
        margin-top: 4vh;
    }

    .userScoreBox {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .nickname {
        margin: 0;

        color: #204782;
        font-size: 1.3rem;
        font-weight: bold;
    }

    .score {
        margin: 0;
        margin-top: 1vh;

        color: #204782;
        font-size: 1rem;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
    }
`;

function MyPage() {
    const navigate = useNavigate();

    const [popup, setPopup] = useState(false);
    const [msg, setMsg] = useState("");

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
                "https://api.skhuming-api.store/user/api/my-profile",
                {
                    params: { memberId: memberId },
                    headers: {
                        Authorization: window.localStorage.getItem("token"),
                    },
                }
            );
            console.log(response);
            setData(response.data);
            // if (data.length > 0) setLoading(true);
            setLoading(true);
        } catch (error) {
            console.error(error);
            setMsg(error.response.data.message);
            setPopup(true);
            navigate("/");
        }
    }

    // 스크랩
    const [scrapData, setScrapData] = useState([]);
    async function getScrapData() {
        const memberId = window.localStorage.getItem("memberId");
        try {
            const response = await axios.get(
                "https://api.skhuming-api.store/user/api/scrap/list",
                {
                    params: { memberId: memberId },
                    headers: {
                        Authorization: window.localStorage.getItem("token"),
                    },
                }
            );
            console.log(response);
            setScrapData(response.data.reverse());
        } catch (error) {
            console.error(error);
            setMsg(error.response.data.message);
            setPopup(true);
            navigate("/");
        }
    }

    // 마일리지
    const [mileageData, setMileageData] = useState([]);

    async function getMileageData() {
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
            setMileageData(response.data);
        } catch (error) {
            console.error(error);
            setMsg(error.response.data.message);
            setPopup(true);
            navigate("/");
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
            {popup ? <PopUp onClose={setPopup} msg={msg} /> : null}
            <div className="myPageBox">
                <div className="userProfileBox">
                    <div className="user">
                        <p className="userName">
                            {loading ? data.memberName : ""}
                        </p>
                        <p className="userInfo">
                            {loading ? data.department : ""}{" "}
                            {loading ? data.studentNumber : ""}
                        </p>
                    </div>
                    <div className="logout" onClick={submitLogout}>
                        💔
                    </div>
                </div>

                <div className="userMyPageBox">
                    <StyledLink to="/scrap">
                        <div className="userScrapBox">
                            <div className="scrapTitleBox">
                                <div className="scrapTitle">
                                    <p>MY SCRAP</p>
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
                                    <p>MY SKHUM</p>
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
