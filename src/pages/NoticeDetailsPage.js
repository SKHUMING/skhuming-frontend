import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import MainHeader from "../components/MainHeader.js";
import axios from "axios";

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
        opacity: 0.25;

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
    async function getData() {
        try {
            const response = await axios.get(
                "http://15.164.131.248:8080/api/notice/details",
                { params: { noticeId: noticeId } }
            );
            setData(response.data);
            if (data.length > 0) setLoading(true);
            setLoading(true);
        } catch (error) {
            console.error(error);
        }
    }

    console.log(loading ? data : "loading");

    useEffect(() => {
        getData();
    }, []);

    return (
        <Container>
            <MainHeader />
            <div class="noticeBox">
                <div className="noticeTitleBox">
                    <div className="noticeTitleBox_inner">
                        <p className="noticeTitle">{data.title}</p>
                        <p className="noticeScrap">📌</p>
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
