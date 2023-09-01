import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import MainHeader from "../components/MainHeader.js";
import NoticeBox from "../components/NoticeBox.js";
import axios from "axios";

import { Container } from "../styles/NoticePageStyled.js";

function NoticePage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    async function getData() {
        try {
            const response = await axios.get(
                "https://api.skhuming-api.store/api/search-notice/list",
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
