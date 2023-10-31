import styled, { keyframes } from "styled-components";

const gradient = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
`;

export const Container = styled.div`
    margin-top: 7vh;

    .boardContainer {
        width: 60vw;
        height: 10vh;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 15px;

        /* background-color: #20478224; */
        /* background-color: #2d6dcc; */

        box-shadow: rgba(50, 50, 93, 0.1) 0px 30px 60px -12px inset,
            rgba(0, 0, 0, 0.2) 0px 18px 36px -18px inset;
    }

    .board {
        width: 58vw;
        height: 6vh;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 27px;
        font-weight: bold;
        /* color: #204782; */
        color: #fff;
        text-shadow: -1px 0px #204782, 0px 2px #204782, 1px 0px #204782,
            0px -1px #204782;
        border-radius: 10px;

        background: linear-gradient(-45deg, #2d6dcc, #9bc2fc, #5690e2, #2d6dcc);
        animation: ${gradient} 15s ease infinite;
    }

    .board > div {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    // mobile
    .m_boardContainer {
        width: 86vw;
        height: 9vh;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 15px;

        /* background-color: #20478224; */
        /* background-color: #2d6dcc; */

        box-shadow: rgba(50, 50, 93, 0.1) 0px 30px 60px -12px inset,
            rgba(0, 0, 0, 0.2) 0px 18px 36px -18px inset;
    }

    .m_board {
        width: 80vw;
        height: 6vh;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 18px;
        font-weight: bold;
        /* color: #204782; */
        color: #fff;
        text-shadow: -1px 0px #204782, 0px 2px #204782, 1px 0px #204782,
            0px -1px #204782;
        border-radius: 10px;

        background: linear-gradient(-45deg, #2d6dcc, #9bc2fc, #5690e2, #2d6dcc);
        animation: ${gradient} 15s ease infinite;
    }

    .m_board > div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
