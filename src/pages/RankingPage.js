import React from "react";
import styled from "styled-components";
import MainHeader from "../components/MainHeader.js";
import RankBox from "../components/RankBox.js";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .rankingBox {
        width: 45vw;
        margin: 15vh 0;
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
        font-size: 1.5rem;
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

    .rank_name {
        font-size: 1.3rem;
        color: #204782;
    }

    .rank_score {
        font-size: 1rem;
        color: #3a73c9;
    }
`;

// 동일 점수는 같은 등수로 매기는 함수
let r = 0;
let s = null;
function rankIndex(score) {
    if (score !== s) r++;
    s = score;

    return r;
}

function RankingPage() {
    let database = [
        {
            memberId: 3,
            tear: "A",
            score: 320,
            nickname: "침착맨",
            department: "IT융합자율학부",
        },
        {
            memberId: 3,
            tear: "A",
            score: 320,
            nickname: "침착맨",
            department: "IT융합자율학부",
        },
        {
            memberId: 3,
            tear: "A",
            score: 320,
            nickname: "침착맨",
            department: "IT융합자율학부",
        },
        {
            memberId: 3,
            tear: "A",
            score: 320,
            nickname: "침착맨",
            department: "IT융합자율학부",
        },
        {
            memberId: 3,
            tear: "A",
            score: 320,
            nickname: "침착맨",
            department: "IT융합자율학부",
        },
        {
            memberId: 3,
            tear: "A",
            score: 300,
            nickname: "침착맨",
            department: "IT융합자율학부",
        },
        {
            memberId: 2,
            tear: "Un",
            score: 150,
            nickname: "주호민",
            department: "IT융합자율학부",
        },
        {
            memberId: 1,
            tear: "Un",
            score: 0,
            nickname: "주우재",
            department: "IT융합자율학부",
        },
    ];

    return (
        <Container>
            <MainHeader />
            <div class="rankingBox">
                <div className="rankingTitle">
                    <p>SKHUMING RANKING</p>
                    <hr />
                </div>

                <div className="ranking">
                    {database.map((item) => (
                        <RankBox
                            rank={rankIndex(item.score)}
                            tier={item.tear}
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
