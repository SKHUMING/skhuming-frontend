import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .rankingBox {
        width: 45vw;
        margin: 15vh 0;
    }

    .myRanking {
        width: 40.8vw;
        height: 14vh;
        padding: 0 2vw;
        margin-bottom: 20vh;

        display: flex;
        justify-content: space-between;
        align-items: center;

        border-radius: 0.625rem;
        background-color: #f6f6f6;
        /* background-color: #204782; */
        border: 3px solid #2d6dcc;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
    }

    /* .myRanking > .rank {
    background-color: #f6f6f6;
    color: #2d6dcc;
} */

    .rankingTitle {
        margin-bottom: 1vh;
    }

    .rankingTitle > .rankingTitleBox > p,
    .rankingTitle > p {
        font-size: 30px;
        font-weight: bold;
        margin: 0;

        color: #2d6dcc;
    }

    .rankingTitle > .rankingTitleBox {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    .selectAward > select {
        width: 15vw;
        padding: 5px 15px;

        background-color: #f1f1f1;
        color: #204782;
        /* color: #fff; */
        font-size: 12.5px;

        /* border: 3px solid #2d6dcc; */
        border: none;
        border-radius: 15px;
        /* box-shadow: rgba(173, 173, 173, 0.1) 0px 30px 60px -12px inset,
            rgba(160, 160, 160, 0.2) 0px 18px 36px -18px inset; */

        /* background-color: red; */
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

        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
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
        margin-top: 0.3rem;

        color: #3a73c9;
        font-size: 0.75rem;
    }

    /* .myRanking > .rank_user > .rank_user_profile > .rank_department {
    color: #f6f6f678;
} */

    .rank_name {
        font-weight: bold;
        font-size: 1.3rem;
        color: #204782;
    }

    /* .myRanking > .rank_user > .rank_user_profile > .rank_name {
    color: #f6f6f6;
} */

    .rank_score {
        font-size: 1rem;
        color: #3a73c9;
    }

    /* .myRanking > .rank_user > .rank_score {
    color: #f6f6f6;
} */
`;
