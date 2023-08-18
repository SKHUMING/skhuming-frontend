import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MainHeader from "../components/MainHeader.js";
import NoticeBox from "../components/NoticeBox.js";

import axios from "axios";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .noticeBox {
        width: 55vw;
        margin: 13vh 0;
        padding: 8vh 3vw;

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
        width: 50vw;
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

    input {
        width: 48vw;
        padding: 1vh 1vw;
        font-size: 0.9rem;
        border: none;
    }

    input[type="number"] {
        width: 15vw;
    }

    .btnBox {
        margin-top: 8vh;

        display: flex;
    }

    .saveNoticeBtn {
        width: 50px;
        padding: 1vh 1vw;
        margin-right: 1vw;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 1rem;
        font-weight: bold;
        background-color: #2d6dcc;
        color: #fbfbfb;
        border-radius: 2vw;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);

        cursor: pointer;
    }
    .saveNoticeBtn:hover {
        background-color: #99bff8;
    }

    .delNoticeBtn {
        width: 50px;
        padding: 1vh 1vw;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 1rem;
        font-weight: bold;
        background-color: #2d6dcc;
        color: #fbfbfb;
        border-radius: 2vw;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);

        cursor: pointer;
    }
    .delNoticeBtn:hover {
        background-color: #99bff8;
    }
`;

function AdminAddNotice() {
    const navigate = useNavigate();

    const [inputData, setInputData] = useState({
        noticeId: "",
        title: "",
        schedule: "",
        mileageScore: 0,
        contents: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    async function saveData() {
        try {
            const response = await axios.post(
                "https://api.skhuming-api.store/admin/api/notice/save",
                inputData,
                {
                    headers: {
                        Authorization: window.localStorage.getItem("token"),
                    },
                }
            );
            console.log(response.data);
            navigate("/admin/notice");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Container>
            <MainHeader />
            <div class="noticeBox">
                <form>
                    <div className="noticeTitleBox">
                        <div className="noticeTitleBox_inner">
                            <div className="noticeTitle">
                                <input
                                    type="text"
                                    placeholder="제목을 입력하세요."
                                    name="title"
                                    value={inputData.title}
                                    onChange={handleInputChange}
                                ></input>
                            </div>
                        </div>
                        <hr />
                    </div>

                    <div className="noticeContentBox">
                        <div className="noticeContent">
                            <p className="noticeMiniTitle">일정</p>
                            <p className="noticeContentDetail">
                                <input
                                    type="text"
                                    placeholder="날짜를 입력하세요."
                                    name="schedule"
                                    value={inputData.schedule}
                                    onChange={handleInputChange}
                                ></input>
                            </p>
                        </div>

                        <div className="noticeContent">
                            <p className="noticeMiniTitle">적립 마일리지 </p>
                            <p className="noticeContentDetail">
                                <input
                                    type="number"
                                    placeholder="마일리지 점수를 입력하세요."
                                    name="mileageScore"
                                    value={inputData.mileageScore}
                                    onChange={handleInputChange}
                                    min={0}
                                ></input>
                            </p>
                        </div>

                        <div className="noticeContent">
                            <p className="noticeMiniTitle">활동 내용</p>
                            <p className="noticeContentDetail">
                                <input
                                    type="text"
                                    placeholder="활동 내용을 입력하세요."
                                    name="contents"
                                    value={inputData.contents}
                                    onChange={handleInputChange}
                                ></input>
                            </p>
                        </div>
                    </div>
                    <div className="btnBox">
                        <div className="saveNoticeBtn" onClick={saveData}>
                            저장
                        </div>
                    </div>
                </form>
            </div>
        </Container>
    );
}

export default AdminAddNotice;
