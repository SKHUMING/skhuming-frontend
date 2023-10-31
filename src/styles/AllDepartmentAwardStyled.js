import styled, { keyframes } from "styled-components";

const shine = keyframes`
0% {
        background-position: 100% 0;
    }
    100% {
        background-position: -100% 0;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 2vh;
    margin-bottom: 20vh;

    .rankingBox {
        width: 35vw;
        height: 5vh;
        padding: 3vh 3vw;
        margin: 3vh 0;

        display: flex;
        justify-content: space-between;
        align-items: center;

        border-radius: 0.625rem;
        background: #fbfbfb;
        box-shadow: rgba(44, 109, 203, 0.4) 5px 5px,
            rgba(44, 109, 203, 0.3) 10px 10px, rgba(44, 109, 203, 0.2) 15px 15px;
    }

    .ranking {
        font-size: 23px;
        font-weight: bold;
    }

    .rank_1st {
        color: #fbb709;
        background: linear-gradient(
            -75deg,
            #fbb709 30%,
            #fff3d3 50%,
            #ffe299 70%
        );
    }

    .rank_2nd {
        color: #a2a2a2;
        background: linear-gradient(
            -75deg,
            #a2a2a2 30%,
            #eaeaea 50%,
            #c4c4c4 70%
        );
    }

    .rank_3rd {
        color: #b2571c;
        background: linear-gradient(
            -75deg,
            #b2571c 30%,
            #e4cab8 50%,
            #d0936a 70%
        );
    }

    .rank_4th {
        color: #6f986b;
        background: linear-gradient(
            -75deg,
            #6f986b 30%,
            #cce3ca 50%,
            #a7cea4 70%
        );
    }

    .department,
    .total {
        font-size: 18px;
        color: #204782;
    }

    .effect-shine {
        /* background: linear-gradient(
            -75deg,
            #fbb709 30%,
            #fff3d3 50%,
            #ffe299 70%
        ); */
        background-size: 200%;
        display: inline; /* 텍스트를 인라인으로 표시 */
        color: transparent; /* 텍스트의 색상을 투명으로 설정 */
        -webkit-background-clip: text; /* 텍스트를 마스킹하여 배경 그라데이션을 표시 */
        background-clip: text; /* 텍스트를 마스킹하여 배경 그라데이션을 표시 */
        animation: ${shine} 2s infinite;
    }

    // mobile
    .m_rankingBox {
        width: 67vw;
        height: 4vh;
        padding: 2vh 3vw;
        margin: 3vh 0;

        display: flex;
        justify-content: space-between;
        align-items: center;

        border-radius: 0.625rem;
        background: #fbfbfb;
        box-shadow: rgba(44, 109, 203, 0.4) 5px 5px,
            rgba(44, 109, 203, 0.3) 10px 10px, rgba(44, 109, 203, 0.2) 15px 15px;
    }

    .m_ranking {
        font-size: 23px;
        font-weight: bold;
    }

    .m_rank_1st {
        color: #fbb709;
        background: linear-gradient(
            -75deg,
            #fbb709 30%,
            #fff3d3 50%,
            #ffe299 70%
        );
    }

    .m_rank_2nd {
        color: #a2a2a2;
        background: linear-gradient(
            -75deg,
            #a2a2a2 30%,
            #eaeaea 50%,
            #c4c4c4 70%
        );
    }

    .m_rank_3rd {
        color: #b2571c;
        background: linear-gradient(
            -75deg,
            #b2571c 30%,
            #e4cab8 50%,
            #d0936a 70%
        );
    }

    .m_rank_4th {
        color: #6f986b;
        background: linear-gradient(
            -75deg,
            #6f986b 30%,
            #cce3ca 50%,
            #a7cea4 70%
        );
    }

    .m_department,
    .m_total {
        font-size: 13px;
        color: #204782;
    }
`;
