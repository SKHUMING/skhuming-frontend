import React from "react";
import rankImg from "./RankImg";
import { Container } from "../styles/RankBoxStyled";
import { Desktop, Mobile } from "./ReactResponse";

function RankBox({ rank, tier, name, department, score }) {
    return (
        <>
            <Desktop>
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
            </Desktop>
            <Mobile>
                <Container>
                    <div className="m_ranking">
                        <div className="m_rank_box">
                            <div className="m_rank">{rank}</div>
                            <div className="m_rank_profile">
                                <div className="m_rank_img">
                                    {rankImg(tier)}
                                </div>
                                <div className="m_rank_user">
                                    <div className="m_rank_user_profile">
                                        <div className="m_rank_name">
                                            {name}
                                        </div>
                                        <div className="m_rank_department">
                                            {department}
                                        </div>
                                    </div>
                                    <div className="m_rank_score">
                                        {score}점
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Mobile>
        </>
    );
}

export default RankBox;
