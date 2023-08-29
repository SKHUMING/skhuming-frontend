import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import MainHeader from "../components/MainHeader.js";
import axios from "axios";
import PopUp from "../components/PopUp.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as notFaStar } from "@fortawesome/free-regular-svg-icons";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .noticeBox {
        width: 55vw;
        margin: 13vh 0;
        padding: 10vh 3vw;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        border-radius: 0.625rem;
        background: #fbfbfb;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
    }

    .noticeTitleBox {
        width: 50vw;
    }

    .noticeTitleBox_inner {
        display: flex;
        justify-content: space-between;
    }

    .noticeTitle {
        font-size: 23px;
        font-weight: bold;
        margin: 0;

        color: #2d6dcc;
    }

    .noticeScrap {
        margin: 0;
        font-size: 23px;
        /* opacity: 0.25; */

        cursor: pointer;
    }

    .noticeTitleBox > hr {
        height: 3px;
        border: 0;
        background-color: #2d6dcc;
    }

    .noticeContentBox {
        width: 50vw;
        margin-top: 3vh;
    }

    .noticeContent {
        margin-top: 5vh;
    }

    .noticeMiniTitle {
        margin: 0;

        color: #204782;
        font-size: 1.15rem;
        font-weight: bold;
    }

    .noticeContentDetail {
        margin-top: 1vh;
        margin-bottom: 0;

        color: #204782;
        font-size: 1rem;
    }
`;

function NoticeDetailsPage() {
    const { noticeId } = useParams();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [scrap, setScrap] = useState(false);

    async function getData() {
        try {
            const response = await axios.get(
                "https://api.skhuming-api.store/api/notice/details",
                { params: { noticeId: noticeId } }
            );
            setData(response.data);
            console.log(response.data);
            setLoading(true);

            // 스크랩 상태를 확인하고 변경
            if (
                response.data &&
                response.data.memberId.includes(
                    Number(window.localStorage.getItem("memberId"))
                )
            ) {
                setScrap(true);
            } else {
                setScrap(false);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const [popup, setPopup] = useState(false);
    const [msg, setMsg] = useState("");
    const [goLogin, setGoLogin] = useState(false);

    // 스크랩
    async function getScrap() {
        try {
            await axios.post(
                "https://api.skhuming-api.store/user/api/notice/scrap",
                null,
                {
                    params: {
                        memberId: window.localStorage.getItem("memberId"),
                        noticeId: noticeId,
                    },
                    headers: {
                        Authorization: window.localStorage.getItem("token"),
                    },
                }
            );
            setScrap(true);
            setMsg("⭐️ 스크랩 되었습니다.");
            setPopup(true);
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

    async function delScrap() {
        try {
            await axios.post(
                "https://api.skhuming-api.store/user/api/notice/scrap/cancel",
                null,
                {
                    params: {
                        memberId: window.localStorage.getItem("memberId"),
                        noticeId: noticeId,
                    },
                    headers: {
                        Authorization: window.localStorage.getItem("token"),
                    },
                }
            );
            setScrap(false);
            setMsg("👋🏻 스크랩을 취소하였습니다.");
            setPopup(true);
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

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scrap]);

    return (
        <Container>
            <MainHeader />
            {popup ? (
                <PopUp
                    onClose={setPopup}
                    msg={msg}
                    notReRoad={true}
                    goLogin={goLogin}
                />
            ) : null}

            <div class="noticeBox">
                <div className="noticeTitleBox">
                    <div className="noticeTitleBox_inner">
                        <p className="noticeTitle">{data.title}</p>
                        <p className="noticeScrap">
                            {scrap ? (
                                <span onClick={delScrap}>
                                    <FontAwesomeIcon
                                        icon={faStar}
                                        style={{ color: "#2d6dcc" }}
                                    />
                                </span>
                            ) : (
                                <span onClick={getScrap}>
                                    <FontAwesomeIcon
                                        icon={notFaStar}
                                        style={{ color: "#2d6dcc" }}
                                    />
                                </span>
                            )}
                        </p>
                    </div>
                    <hr />
                </div>

                <div className="noticeContentBox">
                    <div className="noticeContent">
                        <p className="noticeMiniTitle">일정</p>
                        <p className="noticeContentDetail">{data.schedule}</p>
                    </div>

                    <div className="noticeContent">
                        <p className="noticeMiniTitle">적립 마일리지 </p>
                        <p className="noticeContentDetail">
                            {data.mileageScore}점
                        </p>
                    </div>

                    <div className="noticeContent">
                        <p className="noticeMiniTitle">활동 내용</p>
                        <p className="noticeContentDetail">{data.contents}</p>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default NoticeDetailsPage;
