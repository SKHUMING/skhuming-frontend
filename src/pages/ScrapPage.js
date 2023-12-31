import React, { useState, useEffect } from "react";
import axios from "axios";
import { Desktop } from "../components/ReactResponse.js";
import MainHeader from "../components/MainHeader.js";
import ScrapBox from "../components/ScrapBox.js";
import PopUp from "../components/PopUp.js";
import Footer from "../components/Footer.js";

import { Container } from "../styles/ScrapPageStyled.js";

import { PaginationStyle } from "../styles/NoticePaginationStyled.js";
import Pagination from "react-js-pagination";

function ScrapPage() {
    const [scrapData, setScrapData] = useState([]);

    const [popup, setPopup] = useState(false);
    const [msg, setMsg] = useState("");
    const [goLogin, setGoLogin] = useState(false);

    async function getScrapData() {
        const memberId = window.localStorage.getItem("memberId");
        try {
            const response = await axios.get(
                "https://api.skhuming-api.store/api/user/scrap/list",
                {
                    params: { memberId: memberId, page: page - 1 },
                    headers: {
                        Authorization: window.localStorage.getItem("token"),
                    },
                }
            );
            setScrapData(response.data.content);
            setTotalElements(response.data.totalElements);
        } catch (error) {
            if (error.response.status === 401) {
                setMsg(error.response.data);
                setGoLogin(true);
            } else {
                setMsg(error.response.data.message);
            }

            setPopup(true);
        }
    }

    // 페이지네이션
    const [page, setPage] = useState(1);
    const [totalElements, setTotalElements] = useState(0);

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    useEffect(() => {
        getScrapData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    return (
        <Desktop>
            <Container>
                <MainHeader />
                {popup ? (
                    <PopUp onClose={setPopup} msg={msg} goLogin={goLogin} />
                ) : null}
                <div className="scrapBox">
                    <div className="scrapTitle">
                        <p>MY SCRAP</p>
                        <hr />
                    </div>

                    <div className="scrapContentBox">
                        {scrapData.length > 0 ? (
                            scrapData.map((item) => (
                                <ScrapBox
                                    noticeId={item.noticeId}
                                    end={item.end}
                                    title={item.title}
                                />
                            ))
                        ) : (
                            <p>
                                공지 게시판에서 기억하고 싶은 공지를
                                스크랩해보세요!
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
                </div>
                <Footer />
            </Container>
        </Desktop>
    );
}

export default ScrapPage;
