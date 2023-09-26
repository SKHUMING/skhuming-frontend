import React from "react";
import tier_SS from "../images/tier_SS.png";
import tier_S from "../images/tier_S.png";
import tier_A from "../images/tier_A.png";
import tier_B from "../images/tier_B.png";
import tier_Un from "../images/tier_UN.png";

import { Container } from "../styles/RankBoxStyled";

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

function RankBox({ rank, tier, name, department, score }) {
    return (
        <Container>
            <div className="ranking">
                <div className="rank_box">
                    <div className="rank">{rank}</div>
                    <div className="rank_profile">
                        <div className="rank_img">{rankImg(tier)}</div>
                        <div className="rank_user">
                            <div className="rank_user_profile">
                                <div className="rank_name">{name}</div>
                                <div className="rank_department">
                                    {department}
                                </div>
                            </div>
                            <div className="rank_score">{score}점</div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default RankBox;
