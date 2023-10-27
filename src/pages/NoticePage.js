import React, { useState, useEffect } from "react";
import { Desktop } from "../components/ReactResponse.js";
import MainHeader from "../components/MainHeader.js";
import NoticeBox from "../components/NoticeBox.js";
import axios from "axios";
import Footer from "../components/Footer.js";

import { Container } from "../styles/NoticePageStyled.js";

import { PaginationStyle } from "../styles/NoticePaginationStyled.js";
import Pagination from "react-js-pagination";

function NoticePage() {
    const [data, setData] = useState([]);
    async function getData() {
        try {
            const response = await axios.get(
                "https://api.skhuming-api.store/api/search-notice/list",
                { params: { searchKeyword: searchKeyword, page: page - 1 } }
            );
            setData(response.data.content);
            setTotalElements(response.data.totalElements);
            console.log(response.data.content);
        } catch (error) {
            console.error(error);
        }
    }

    // 검색
    const [inputKeyword, setInputKeyword] = useState("");
    const [searchKeyword, setSearchKeyword] = useState("");

    const handleInputKeyword = (event) => {
        setInputKeyword(event.target.value);
    };

    const search = (event) => {
        event.preventDefault();
        setSearchKeyword(inputKeyword);
        setPage(1); // 검색 시 페이지를 1로 리셋
    };

    // 페이지네이션
    const [page, setPage] = useState(1);
    const [totalElements, setTotalElements] = useState(0);

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchKeyword, page]);

    return (
        <Desktop>
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
                                    status={item.status}
                                    title={item.title}
                                    date={item.createDate}
                                />
                            ))
                        ) : (
                            <p className="warning">
                                검색된 공지가 없습니다. 다시 검색해주세요! 😓
                            </p>
                        )}
                    </div>

                    {/* pagination */}
                    <PaginationStyle>
                        <Pagination
                            activePage={page}
                            itemsCountPerPage={10}
                            totalItemsCount={totalElements}
                            pageRangeDisplayed={5}
                            prevPageText={"<"}
                            nextPageText={">"}
                            onChange={handlePageChange}
                        />
                    </PaginationStyle>

                    <Footer />
                </div>
            </Container>
        </Desktop>
    );
}

export default NoticePage;
