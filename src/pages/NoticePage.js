import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import MainHeader from "../components/MainHeader.js";
import NoticeBox from "../components/NoticeBox.js";

import axios from "axios";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .noticeBox {
        width: 60vw;
        margin: 15vh 0;
    }

    .boxTitle > p {
        font-size: 30px;
        font-weight: bold;
        margin: 0;

        color: #2d6dcc;
    }

    .boxTitle > hr {
        height: 3px;
        border: 0;
        background-color: #2d6dcc;
    }

    .searchBox {
        width: 60vw;
        height: 7vh;
        margin: 8vh 0;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .searchInput {
        width: 30vw;
        padding: 0.8vw 2vw;

        border: none;
        border-radius: 1.375rem;
        background: #fbfbfb;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);

        font-size: 1rem;
    }

    .searchBtn {
        padding: 0.8vw 1.2vw;
        margin-left: 1.5vw;

        border: none;
        border-radius: 1.375rem;
        background: #2d6dcc;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);

        color: #fbfbfb;
        font-size: 1rem;

        cursor: pointer;
    }

    .noticeListBox {
        width: 60vw;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .warning {
        font-size: 1rem;
        color: #2d6dcc;
    }
`;

function NoticePage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    async function getData() {
        try {
            const response = await axios.get(
                "http://15.164.131.248:8080/api/search-notice/list",
                { params: { searchKeyword: searchKeyword } }
            );
            setData(response.data);
            if (data.length > 0) setLoading(true);
            setLoading(true);
        } catch (error) {
            console.error(error);
        }
    }

    console.log(data);

    // 검색
    const [inputKeyword, setInputKeyword] = useState("");
    const [searchKeyword, setSearchKeyword] = useState("");

    const handleInputKeyword = (event) => {
        setInputKeyword(event.target.value);
    };

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchKeyword]);

    const search = (event) => {
        event.preventDefault();
        setSearchKeyword(inputKeyword);
    };

    return (
        <Container>
            <MainHeader />
            <div class="noticeBox">
                <div className="boxTitle">
                    <p>비교과 프로그램 공지</p>
                    <hr />
                </div>

                <div className="searchBox">
                    <form>
                        <input
                            className="searchInput"
                            type="text"
                            placeholder="검색어를 입력하세요"
                            value={inputKeyword}
                            onChange={handleInputKeyword}
                        />
                        <button
                            className="searchBtn"
                            type="submit"
                            onClick={search}
                        >
                            검색
                        </button>
                    </form>
                </div>

                <div className="noticeListBox">
                    {data.length > 0 ? (
                        data.map((item) => (
                            <NoticeBox
                                noticeId={item.noticeId}
                                end={item.end}
                                title={item.title}
                            />
                        ))
                    ) : (
                        <p className="warning">
                            검색된 공지가 없습니다. 다시 검색해주세요! 😓
                        </p>
                    )}
                </div>
            </div>
        </Container>
    );
}

export default NoticePage;
