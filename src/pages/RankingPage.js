import React, { useState, useEffect } from "react";
import { Desktop } from "../components/ReactResponse.js";
import MainHeader from "../components/MainHeader.js";
import RankBox from "../components/RankBox.js";
import axios from "axios";
import Footer from "../components/Footer.js";
import PopUp from "../components/PopUp.js";
import rankImg from "../components/RankImg.js";
import { Container } from "../styles/RankingPageStyled.js";
import { PaginationStyle } from "../styles/NoticePaginationStyled.js";
import Pagination from "react-js-pagination";
import DisplayBoard from "../components/DisplayBoard.js";

function RankingPage() {
    // 랭킹 선택
    const [award, setAward] = useState([
        { departmentId: 0, department: "재학생 전체" },
        { departmentId: 1, department: "인문융합자율학부" },
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

    const [popup, setPopup] = useState(false);
    const [msg, setMsg] = useState("");
    const [goLogin, setGoLogin] = useState(false);

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

            setData(response.data.content);
            setTotalElements(response.data.totalElements);

            if (data.length > 0) setLoading(true);
            setLoading(true);
        } catch (error) {
            console.error(error);
        }
    }

    // 마이 데이터 받아오기
    async function getMyData() {
        const memberId = window.localStorage.getItem("memberId");
        try {
            const response = await axios.get(
                "https://api.skhuming-api.store/api/user/ranking/my-ranking",
                {
                    params: {
                        memberId: memberId,
                        departmentNumber: selectAward,
                    },
                    headers: {
                        Authorization: window.localStorage.getItem("token"),
                    },
                }
            );
            setMyData(response.data);
            setLoading(true);
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
        getData();
        getMyData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectAward, page]);

    return (
        <Desktop>
            <Container>
                <MainHeader />

                {popup ? (
                    <PopUp onClose={setPopup} msg={msg} goLogin={goLogin} />
                ) : null}

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
