import React, { useState, useEffect } from "react";
import { Desktop } from "../components/ReactResponse.js";
import { useParams } from "react-router-dom";
import MainHeader from "../components/MainHeader.js";
import axios from "axios";
import PopUp from "../components/PopUp.js";
import Footer from "../components/Footer.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as notFaStar } from "@fortawesome/free-regular-svg-icons";

import { Container } from "../styles/NoticeDetailsPageStyled.js";

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
            let prevData = { ...response.data };
            prevData.contents = response.data.contents.replaceAll(
                "<br />",
                "\n"
            );
            setData(prevData);
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
                "https://api.skhuming-api.store/api/user/notice/scrap",
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
            setMsg(`스크랩 되었습니다!\n마이페이지에서 확인해보세요.`);
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
                "https://api.skhuming-api.store/api/user/notice/scrap/cancel",
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
            setMsg("스크랩을 취소하였습니다.");
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
        <Desktop>
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
                        <div className="dateMileageBox">
                            <div className="noticeContent">
                                <p className="noticeMiniTitle">활동 일정</p>
                                <p className="noticeContentDetail">
                                    {data.schedule}
                                </p>
                            </div>

                            <div className="noticeContent mileageBox">
                                <p className="noticeMiniTitle">적립 마일리지</p>
                                <p className="noticeContentDetail">
                                    {data.mileageScore}점
                                </p>
                            </div>

                            <div className="noticeContent mileageBox">
                                <p className="noticeMiniTitle">LMS 링크</p>
                                <a href={data.links}>
                                    <p className="noticeContentDetail">
                                        클릭하여 자세한 내용을 확인하세요.
                                    </p>
                                </a>
                            </div>
                        </div>

                        <div className="noticeContent">
                            <p className="noticeMiniTitle">활동 내용</p>
                            <p className="noticeContentDetail">
                                {data.contents}
                            </p>
                            {console.log(data.contents)}
                        </div>

                        <div className="noticeContent">
                            <p className="noticeContentDetail createDateBox">
                                - {data.createDate} 작성 -
                            </p>
                        </div>
                    </div>
                </div>

                <Footer />
            </Container>
        </Desktop>
    );
}

export default NoticeDetailsPage;
