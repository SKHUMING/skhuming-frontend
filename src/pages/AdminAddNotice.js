import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Desktop, Mobile } from "../components/ReactResponse.js";
import AdminHeader from "../components/AdminHeader.js";
import axios from "axios";

import { Container } from "../styles/AdminAddNoticeStyled.js";

function AdminAddNotice() {
    const navigate = useNavigate();

    const [inputData, setInputData] = useState({
        noticeId: "",
        title: "",
        schedule: "",
        createDate: "",
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
        inputData.contents = inputData.contents.replaceAll(/\n/g, "<br />");
        try {
            const response = await axios.post(
                "https://api.skhuming-api.store/api/admin/notice/save",
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
        <>
            <Desktop>
                <Container>
                    <AdminHeader />
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
                                    <p className="noticeMiniTitle">작성 날짜</p>
                                    <p className="noticeContentDetail">
                                        <input
                                            type="text"
                                            placeholder="LMS에 작성된 날짜를 입력하세요."
                                            name="createDate"
                                            value={inputData.createDate}
                                            onChange={handleInputChange}
                                        ></input>
                                    </p>
                                </div>

                                <div className="noticeContent">
                                    <p className="noticeMiniTitle">
                                        적립 마일리지
                                    </p>
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
                                        <textarea
                                            cols={90}
                                            rows={20}
                                            placeholder="활동 내용을 입력하세요."
                                            name="contents"
                                            value={inputData.contents}
                                            onChange={handleInputChange}
                                            wrap="hard"
                                        ></textarea>
                                    </p>
                                </div>

                                <div className="noticeContent">
                                    <p className="noticeMiniTitle">LMS 링크</p>
                                    <p className="noticeContentDetail">
                                        <input
                                            type="text"
                                            placeholder="LMS 링크를 작성해주세요."
                                            name="links"
                                            value={inputData.links}
                                            onChange={handleInputChange}
                                        ></input>
                                    </p>
                                </div>
                            </div>
                            <div className="btnBox">
                                <div
                                    className="saveNoticeBtn"
                                    onClick={saveData}
                                >
                                    저장
                                </div>
                            </div>
                        </form>
                    </div>
                </Container>
            </Desktop>
            <Mobile>
                <h1>모바일</h1>
            </Mobile>
        </>
    );
}

export default AdminAddNotice;
