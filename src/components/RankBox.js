import React from "react";
import rankImg from "./RankImg";
import { Container } from "../styles/RankBoxStyled";

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
