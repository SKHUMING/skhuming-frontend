import React from "react";
import styled from "styled-components";
import MainHeader from "../components/MainHeader.js";
import tier_SS from "../images/tier_SS.png";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .mileageBox {
        width: 50vw;
        margin: 10vh 0;
    }

    .mileageTitle > p {
        font-size: 30px;
        font-weight: bold;
        margin: 0;

        color: #2d6dcc;
    }

    .mileageTitle > hr {
        margin-bottom: 4vh;

        height: 3px;
        border: 0;
        background-color: #2d6dcc;
    }

    .userRankingBox {
        height: 21vh;
        margin-bottom: 4vh;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .userTierImg {
        width: 14vw;
        height: inherit;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .userTierImg > img {
        width: 8vw;
    }

    .userRanking {
        width: 28vw;
        height: inherit;
        padding: 0 4vw;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        border-radius: 0.625rem;
        background: #fbfbfb;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
    }

    .userRanking > p {
        margin: 0;

        color: #2d6dcc;
        font-size: 1.3rem;
        font-weight: bold;
    }

    .ranking {
        width: inherit;

        display: flex;
        justify-content: space-between;
    }

    .ranking > p {
        margin: 0;
        margin-top: 3vh;

        color: #204782;
        font-size: 1.1rem;
    }

    .addMileageBox {
        width: inherit;
        height: 22vh;
        padding: 0 4vw;

        display: flex;
        flex-direction: column;
        justify-content: center;

        border-radius: 0.625rem;
        background: #fbfbfb;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
    }

    .addMileageBox > p {
        margin: 0;
        margin-bottom: 3vh;

        color: #2d6dcc;
        font-size: 1.3rem;
        font-weight: bold;
    }

    .addMileage > form {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .skhumList {
        width: 44vw;
        padding: 1vh 1vw;

        border: none;
        border-radius: 0.85rem;
        background: #fff;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);

        font-size: 1rem;
    }

    .skhumListBtn {
        width: 3vw;
        padding: 1vh;
        margin-left: 2vw;

        border: none;
        border-radius: 0.75rem;
        background: #3a73c9;

        color: #fff;
        font-size: 0.8rem;

        cursor: pointer;
    }
`;

function MileagePage() {
    return (
        <Container>
            <MainHeader />
            <div className="mileageBox">
                <div className="mileageTitle">
                    <p>MY MILEAGE</p>
                    <hr />
                </div>

                <div className="userMileageBox">
                    <div className="userRankingBox">
                        <div className="userTierImg">
                            <img src={tier_SS} alt="tier"></img>
                        </div>
                        <div className="userRanking">
                            <p>MY RANKING</p>
                            <div className="ranking">
                                <p>몽디우 프론트</p>
                                <p>200점</p>
                            </div>
                        </div>
                    </div>

                    <div className="addMileageBox">
                        <p>ADD MILEAGE</p>

                        <div className="addMileage">
                            <form>
                                <select className="skhumList" name="skhumList">
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                    <option value="40">40</option>
                                </select>
                                <button type="submit" className="skhumListBtn">
                                    추가
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default MileagePage;
