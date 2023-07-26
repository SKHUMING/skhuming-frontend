import React from "react";
import styled from "styled-components";
import MainHeader from "../components/MainHeader.js";
import tier_SS from "../images/tier_SS.png";
import tier_S from "../images/tier_S.png";
import tier_A from "../images/tier_A.png";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .awardBox {
        width: 60vw;
        margin: 10vh 0;
    }

    .awardTitle > p {
        font-size: 30px;
        font-weight: bold;
        margin: 0;

        color: #2d6dcc;
        color: #2d6dcc;
    }

    .awardTitle > hr {
        height: 3px;
        border: 0;
        background-color: #2d6dcc;
    }

    .award {
        height: 40vh;
        margin: 10vh 0;

        display: flex;
        justify-content: space-around;
        align-items: center;

        /* background-color: red; */
    }

    .box_1st,
    .box_2nd,
    .box_3rd {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .box_1st > p {
        margin: 1.5vh 0;

        color: #fbb709;
        font-size: 2rem;
        font-weight: bold;
    }

    .box_2nd > p {
        margin: 1.5vh 0;

        color: #a2a2a2;
        font-size: 1.5rem;
        font-weight: bold;
    }

    .box_3rd > p {
        margin: 1.5vh 0;

        color: #b2571c;
        font-size: 1.5rem;
        font-weight: bold;
    }

    .profileBox_1st {
        width: 15vw;
        height: 30vh;
        padding: 4vh 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        border-radius: 0.625rem;
        background: #fbfbfb;
        box-shadow: 0px 4px 10px 5px rgba(251, 183, 9, 0.2);
    }

    .profileBox_2nd {
        width: 11vw;
        height: 20vh;
        padding: 4vh 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        border-radius: 0.625rem;
        background: #fbfbfb;
        box-shadow: 0px 4px 10px 5px #a2a2a23d;
    }

    .profileBox_3rd {
        width: 11vw;
        height: 20vh;
        padding: 4vh 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        border-radius: 0.625rem;
        background: #fbfbfb;
        box-shadow: 0px 4px 10px 5px #b2581c51;
    }

    .tierImg_1st > img {
        width: 7.5vw;
    }

    .tierImg_2nd > img,
    .tierImg_3rd > img {
        width: 5vw;
    }

    .profile_1st {
        width: 10vw;

        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .profile_2nd,
    .profile_3rd {
        width: 8vw;

        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .name_1st {
        font-size: 1.5rem;
        color: #204782;
    }

    .name_2nd,
    .name_3rd {
        font-size: 1.2rem;
        color: #204782;
    }

    .score_1st {
        font-size: 1.2rem;
        color: #3a73c9;
    }

    .score_2nd,
    .score_3rd {
        font-size: 1rem;
        color: #3a73c9;
    }
`;

function MainPage() {
    return (
        <Container>
            <MainHeader />

            <div class="awardBox">
                <div className="awardTitle">
                    <p>SKHUMING AWARD</p>
                    <hr />
                </div>

                <div className="award">
                    <div className="box_2nd">
                        <p>🥈 2nd 🥈</p>
                        <div className="profileBox_2nd">
                            <div className="tierImg_2nd">
                                <img src={tier_S} alt="tier"></img>
                            </div>
                            <div className="profile_2nd">
                                <p className="name_2nd">홍길동</p>
                                <p className="score_2nd">100점</p>
                            </div>
                        </div>
                    </div>
                    <div className="box_1st">
                        <p>🥇 1st 🥇</p>
                        <div className="profileBox_1st">
                            <div className="tierImg_1st">
                                <img src={tier_SS} alt="tier"></img>
                            </div>
                            <div className="profile_1st">
                                <p className="name_1st">홍길동</p>
                                <p className="score_1st">100점</p>
                            </div>
                        </div>
                    </div>
                    <div className="box_3rd">
                        <p>🥉 3rd 🥉</p>
                        <div className="profileBox_3rd">
                            <div className="tierImg_3rd">
                                <img src={tier_A} alt="tier"></img>
                            </div>
                            <div className="profile_3rd">
                                <p className="name_3rd">홍길동</p>
                                <p className="score_3rd">100점</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default MainPage;
