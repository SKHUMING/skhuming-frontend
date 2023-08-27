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

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .rankingBox {
        width: 45vw;
        margin: 15vh 0;
    }

    .myRanking {
        width: 41vw;
        height: 14vh;
        padding: 0 2vw;
        margin-bottom: 20vh;

        display: flex;
        justify-content: space-between;
        align-items: center;

        border-radius: 0.625rem;
        background-color: #f6f6f6;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
    }

    .rankingTitle {
        margin-bottom: 3vh;
    }

    .rankingTitle > p {
        font-size: 30px;
        font-weight: bold;
        margin: 0;

        color: #2d6dcc;
    }

    .rankingTitle > hr {
        height: 3px;
        border: 0;
        background-color: #2d6dcc;
    }

    .rank_box {
        margin: 2vh 0;
        padding: 0 1vw;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .rank {
        width: 2.5vw;
        height: 2.5vw;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 0.25rem;
        background: #2d6dcc;

        color: #fff;
        font-size: 1.4rem;
        font-weight: bold;
    }

    .rank_profile {
        width: 33vw;
        padding: 0 2vw;

        display: flex;
        justify-content: space-between;
        align-items: center;

        border-radius: 0.625rem;
        background-color: #f6f6f6;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
    }

    .rank_img {
        width: 5vw;
    }

    .rank_img > img {
        width: 4vw;
        min-width: 40px;

        margin-top: 0.4vw;
    }

    .rank_user {
        width: 25vw;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .rank_department {
        margin-top: 0.1rem;

        color: #3a73c9;
        font-size: 0.75rem;
    }

    .rank_name {
        font-size: 1.3rem;
        color: #204782;
    }

    .rank_score {
        font-size: 1rem;
        color: #3a73c9;
    }
`;

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
    // 동일 점수는 같은 등수로 매기는 함수
    let r = 0;
    let s = null;
    function rankIndex(score) {
        if (score !== s) r++;
        s = score;

        return r;
    }

    const [data, setData] = useState([]);
    const [myData, setMyData] = useState([]);
    const [loading, setLoading] = useState(false);
    async function getData() {
        try {
            const response = await axios.get(
                "https://api.skhuming-api.store/api/ranking/list"
            );

            const modifiedDataList = response.data.map((item) => ({
                ...item,
                rank: rankIndex(item.score),
            }));

            setData(modifiedDataList);

            for (r of modifiedDataList) {
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

    console.log(myData);

    useEffect(() => {
        getData();
    }, []);

    return (
        <Container>
            <MainHeader />
            <div class="rankingBox">
                {myData ? (
                    <>
                        <div className="rankingTitle">
                            <p>MY RANKING</p>
                            <hr />
                        </div>
                        <div className="myRanking">
                            <div className="rank">{myData.rank}</div>
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
                            rank={item.rank}
                            tier={item.tier}
                            name={item.nickname}
                            department={item.department}
                            score={item.score}
                        />
                    ))}
                </div>
            </div>
        </Container>
    );
}

export default RankingPage;
