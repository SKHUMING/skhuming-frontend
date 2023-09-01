import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import AdminHeader from "../components/AdminHeader.js";
import NoticeBox from "../components/NoticeBox.js";
import axios from "axios";

import { Container } from "../styles/AdminAddNoticeStyled.js";

function AdminDetailNotice() {
    const navigate = useNavigate();
    const { noticeId } = useParams();

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

    async function getData() {
        try {
            const response = await axios.get(
                "https://api.skhuming-api.store/api/notice/details",
                { params: { noticeId: noticeId } }
            );
            setInputData(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    async function putData() {
        try {
            const response = await axios.put(
                "https://api.skhuming-api.store/admin/api/notice/update",
                inputData,
                {
                    params: { noticeId: noticeId },
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

    async function delData() {
        try {
            const response = await axios.post(
                "https://api.skhuming-api.store/admin/api/notice/delete",
                null,
                {
                    params: { noticeId: noticeId },
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

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
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
                        <div className="saveNoticeBtn" onClick={putData}>
                            저장
                        </div>
                        <div className="delNoticeBtn" onClick={delData}>
                            삭제
                        </div>
                    </div>
                </form>
            </div>
        </Container>
    );
}

export default AdminDetailNotice;
