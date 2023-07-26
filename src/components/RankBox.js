import React from "react";
import styled from "styled-components";
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

    .rankingTitle {
        margin-bottom: 5vh;
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
        width: 43.5vw;
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
        height: 12vh;
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

function rankImg(tier) {
    // if (tier === "SS") return <img src={tier_SS} alt="tier"></img>;
    // eslint-disable-next-line default-case
    switch (tier) {
        case "SS":
            return <img src={tier_SS} alt="tier"></img>;
        case "S":
            return <img src={tier_S} alt="tier"></img>;
        case "A":
            return <img src={tier_A} alt="tier"></img>;
        case "B":
            return <img src={tier_B} alt="tier"></img>;
        case "Un":
            return <img src={tier_Un} alt="tier"></img>;
    }
}

function RankBox({ rank, tier, name, score }) {
    return (
        <Container>
            <div className="ranking">
                <div className="rank_box">
                    <div className="rank">{rank}</div>
                    <div className="rank_profile">
                        <div className="rank_img">{rankImg(tier)}</div>
                        <div className="rank_user">
                            <div className="rank_name">{name}</div>
                            <div className="rank_score">{score}점</div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default RankBox;
