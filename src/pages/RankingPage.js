import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import MainHeader from "../components/MainHeader.js";
import RankBox from "../components/RankBox.js";
import axios from "axios";

import tier_SS from "../images/tier_SS.png";
import tier_S from "../images/tier_S.png";
import tier_A from "../images/tier_A.png";
import tier_B from "../images/tier_B.png";
import tier_Un from "../images/tier_UN.png";

import { Container } from "../styles/RankingPageStyled.js";

import { PaginationStyle } from "../styles/NoticePaginationStyled.js";
import Pagination from "react-js-pagination";

import DisplayBoard from "../components/DisplayBoard.js";

function rankImg(tier) {
    switch (tier) {
        case "SS":
            return <img src={tier_SS} alt="tier"></img>;
        case "S":
            return <img src={tier_S} alt="tier"></img>;
        case "A":
            return <img src={tier_A} alt="tier"></img>;
        case "B":
            return <img src={tier_B} alt="tier"></img>;
        default:
            return <img src={tier_Un} alt="tier"></img>;
    }
}

function RankingPage() {
    const [data, setData] = useState([]);
    const [myData, setMyData] = useState([]);
    const [loading, setLoading] = useState(false);
    async function getData() {
        try {
            const response = await axios.get(
                "https://api.skhuming-api.store/api/ranking/list",
                { params: { page: page - 1 } }
            );

            setData(response.data.content);
            setTotalElements(response.data.totalElements);

            for (let r of response.data.content) {
                // number라서 ==
                if (r.memberId == window.localStorage.getItem("memberId")) {
                    setMyData(r);
                }
            }

            if (data.length > 0) setLoading(true);
            setLoading(true);
        } catch (error) {
            console.error(error);
        }
    }

    // 페이지네이션
    const [page, setPage] = useState(1);
    const [totalElements, setTotalElements] = useState(0);

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    useEffect(() => {
        getData();
    }, [page]);

    return (
        <Container>
            <MainHeader />

            <DisplayBoard />

            <div class="rankingBox">
                {myData ? (
                    <>
                        <div className="rankingTitle">
                            <p>MY RANKING</p>
                        </div>
                        <div className="myRanking">
                            <div className="rank">{myData.myRanking}</div>
                            <div className="rank_img">
                                {rankImg(myData.tier)}
                            </div>
                            <div className="rank_user">
                                <div className="rank_user_profile">
                                    <div className="rank_name">
                                        {myData.nickname}
                                    </div>
                                    <div className="rank_department">
                                        {myData.department}
                                    </div>
                                </div>
                                <div className="rank_score">
                                    {myData.score}점
                                </div>
                            </div>
                        </div>
                    </>
                ) : null}

                <div className="rankingTitle">
                    <p>SKHUMING RANKING</p>
                    <hr />
                </div>

                <div className="ranking">
                    {data.map((item) => (
                        <RankBox
                            rank={item.myRanking}
                            tier={item.tier}
                            name={item.nickname}
                            department={item.department}
                            score={item.score}
                        />
                    ))}
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
        </Container>
    );
}

export default RankingPage;
