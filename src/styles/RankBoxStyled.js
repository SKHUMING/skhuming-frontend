import styled from "styled-components";

export const Container = styled.div`
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

    .rank_user_profile {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    .rank_name {
        font-size: 1.25rem;
        color: #204782;
    }

    .rank_department {
        margin-top: 0.1rem;

        color: #3a73c9;
        font-size: 0.75rem;
    }

    .rank_score {
        font-size: 1rem;
        color: #3a73c9;
    }

    // mobile
    .m_rank_box {
        width: 80vw;
        margin: 2vh 0;
        padding: 0 1vw;

        /* display: flex; */
        /* justify-content: center; */
        /* align-items: center; */
    }

    .m_rank {
        width: 5vw;
        height: 5vw;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 0.25rem;
        background: #2d6dcc;

        color: #fff;
        font-size: 0.8rem;
        font-weight: bold;
        margin-right: 15px;
    }

    .m_rank_profile {
        width: 70vw;
        height: 12vh;
        padding: 0 2vw;

        display: flex;
        justify-content: space-evenly;
        align-items: center;

        border-radius: 0.625rem;
        background-color: #f6f6f6;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
    }

    .m_rank_img {
        width: 9vw;
    }

    .m_rank_img > img {
        width: 9vw;

        margin-top: 0.4vw;
    }

    .m_rank_user {
        width: 45vw;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .m_rank_user_profile {
        width: 30vw;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    .m_rank_name {
        font-size: 1rem;
        color: #204782;
    }

    .m_rank_department {
        margin-top: 0.1rem;

        color: #3a73c9;
        font-size: 0.7rem;
    }

    .m_rank_score {
        width: 10vw;
        font-size: 0.7rem;
        color: #3a73c9;
    }
`;
