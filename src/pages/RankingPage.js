import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Desktop } from "../components/ReactResponse.js";
import MainHeader from "../components/MainHeader.js";
import RankBox from "../components/RankBox.js";
import axios from "axios";
import Footer from "../components/Footer.js";

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
    // 랭킹 선택
    const [award, setAward] = useState([
        { departmentId: 0, department: "재학생 전체" },
        { departmentId: 1, department: "인문자율융합학부" },
        { departmentId: 2, department: "사회융합자율학부" },
        { departmentId: 3, department: "미디어콘텐츠융합자율학부" },
        { departmentId: 4, department: "IT융합자율학부" },
    ]);
    // 선택한 학부 (select box)
    const [selectAward, setSelectAward] = useState(0);

    const handleAward = (event) => {
        setSelectAward(event.currentTarget.value);
    };

    const [data, setData] = useState([]);
    const [myData, setMyData] = useState([]);
    const [loading, setLoading] = useState(false);
    async function getData() {
        try {
            const response = await axios.get(
                "https://api.skhuming-api.store/api/ranking/list",
                {
                    params: {
                        departmentNumber: selectAward,
                        page: page - 1,
                    },
                }
            );

            console.log(response.data.content);

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
    }, [selectAward, page]);

    return (
        <Desktop>
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
                        <div className="rankingTitleBox">
                            <p>SKHUM RANKING</p>
                            <form className="selectAward">
                                <select
                                    onChange={handleAward}
                                    value={selectAward}
                                >
                                    {award.map((item) => (
                                        <option
                                            key={item.departmentId}
                                            value={item.departmentId}
                                        >
                                            {item.department}
                                        </option>
                                    ))}
                                </select>
                            </form>
                        </div>
                        <hr />
                    </div>

                    <div className="ranking">
                        {console.log(data.length)}
                        {data.length > 0 ? (
                            data.map((item) => (
                                <RankBox
                                    rank={item.myRanking}
                                    tier={item.tier}
                                    name={item.nickname}
                                    department={item.department}
                                    score={item.score}
                                />
                            ))
                        ) : (
                            <p className="noData">
                                등록된 데이터가 없습니다...🥲
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

export default RankingPage;
