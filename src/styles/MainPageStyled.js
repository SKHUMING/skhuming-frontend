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

    p {
        margin: 0;
    }

    .awardBox,
    .qnaBox {
        width: 60vw;
        margin: 3vh 0;
    }

    .awardTitle > .awardTitleBox > p,
    .qnaTitle > p {
        font-size: 30px;
        font-weight: bold;
        margin-top: 5vh;

        color: #2d6dcc;
    }

    .awardTitle > .awardTitleBox {
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

    .awardTitle > hr,
    .qnaTitle > hr {
        height: 3px;
        border: 0;
        background-color: #2d6dcc;
    }

    .award {
        height: 40vh;
        margin: 10vh 0 40vh 0;

        display: flex;
        justify-content: space-around;
        align-items: center;

        /* background-color: red; */
    }

    .box_1st,
    .box_2nd,
    .box_3rd {
        margin-top: 5vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .box_1st > p {
        margin: 1.5vh 0;

        color: #fbb709;
        /* background: linear-gradient(
            -75deg,
            #fbb709 30%,
            #fff3d3 50%,
            #ffe299 70%
        ); */
        font-size: 2rem;
        font-weight: bold;
    }

    .box_2nd > p {
        margin: 1.5vh 0;

        color: #a2a2a2;
        /* background: linear-gradient(
            -75deg,
            #a2a2a2 30%,
            #eaeaea 50%,
            #c4c4c4 70%
        ); */
        font-size: 1.5rem;
        font-weight: bold;
    }

    .box_3rd > p {
        margin: 1.5vh 0;

        color: #b2571c;
        /* background: linear-gradient(
            -75deg,
            #b2571c 30%,
            #e4cab8 50%,
            #d0936a 70%
        ); */
        font-size: 1.5rem;
        font-weight: bold;
    }

    .profileBox_1st {
        width: 19vw;
        min-width: 200px;
        height: 30vh;
        min-height: 300px;
        padding: 1vh 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        border-radius: 0.625rem;
        background: #fbfbfb;
        /* box-shadow: 0px 4px 10px 5px #a2a2a23d; */
        /* box-shadow: rgba(127, 127, 127, 0.1) 0px 30px 60px -12px inset,
            rgba(205, 205, 205, 0.2) 0px 18px 36px -18px inset; */
        box-shadow: rgba(44, 109, 203, 0.4) 0px 5px,
            rgba(44, 109, 203, 0.3) 0px 10px, rgba(44, 109, 203, 0.2) 0px 15px,
            rgba(44, 109, 203, 0.1) 0px 20px, rgba(44, 109, 203, 0.05) 0px 25px;
    }

    .profileBox_2nd {
        width: 15vw;
        min-width: 150px;
        height: 20vh;
        min-height: 200px;
        padding: 1vh 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        border-radius: 0.625rem;
        background: #fbfbfb;
        /* box-shadow: 0px 4px 10px 5px #a2a2a23d; */
        /* box-shadow: rgba(127, 127, 127, 0.1) 0px 30px 60px -12px inset,
            rgba(205, 205, 205, 0.2) 0px 18px 36px -18px inset; */
        box-shadow: rgba(44, 109, 203, 0.4) -5px 5px,
            rgba(44, 109, 203, 0.3) -10px 10px,
            rgba(44, 109, 203, 0.2) -15px 15px,
            rgba(44, 109, 203, 0.1) -20px 20px,
            rgba(44, 109, 203, 0.05) -25px 25px;
    }

    .profileBox_3rd {
        width: 15vw;
        min-width: 150px;
        height: 20vh;
        min-height: 200px;
        padding: 1vh 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        border-radius: 0.625rem;
        background: #fbfbfb;
        /* box-shadow: 0px 4px 10px 5px #a2a2a23d; */
        /* box-shadow: rgba(127, 127, 127, 0.1) 0px 30px 60px -12px inset,
            rgba(205, 205, 205, 0.2) 0px 18px 36px -18px inset; */
        box-shadow: rgba(44, 109, 203, 0.4) 5px 5px,
            rgba(44, 109, 203, 0.3) 10px 10px, rgba(44, 109, 203, 0.2) 15px 15px,
            rgba(44, 109, 203, 0.1) 20px 20px,
            rgba(44, 109, 203, 0.05) 25px 25px;
    }

    .tierImg_1st > img {
        width: 9vw;
        min-width: 110px;
        margin-bottom: 30px;
    }

    .tierImg_2nd > img,
    .tierImg_3rd > img {
        width: 6vw;
        min-width: 80px;
        margin-bottom: 10px;
    }

    .profile_1st {
        width: 14vw;
        min-width: 140px;

        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .profile_2nd,
    .profile_3rd {
        width: 13vw;
        min-width: 110px;

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

    .qnaContent {
        width: 40vw;
        /* padding: 5vh 10vw; */

        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    // main deco
    .cardNews {
        width: 38vw;
        height: 34vh;
        margin: 15vh 0;
        padding: 4vw;

        display: flex;
        justify-content: space-around;
        align-items: center;

        border-radius: 0.625rem;
        background: #fff;
        box-shadow: 0px 4px 10px 5px #a2a2a23d;
    }

    .cardNews:nth-child(odd) {
        margin-right: 20vw;
    }

    .cardNews:nth-child(even) {
        margin-left: 14vw;
    }

    .cardNews_img {
        width: 13vw;
        height: 13vw;
        margin-right: 2vw;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .cardNews_img > img {
        width: 13vw;
        height: 13vw;
    }

    .cardNews_content {
        width: 24vw;
        height: 13vw;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    .cardNews_title {
        margin: 0;
        margin-bottom: 1vw;
        font-size: 1.35rem;
        font-weight: bold;
        color: #2d6dcc;
    }

    .cardNews_subContent {
        margin: 0;
        font-size: 1rem;
        color: #204782;
    }
    .cardNews_subContent > p {
        margin: 0.7vh 0;
    }

    // 윤기나는 효과
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
`;
