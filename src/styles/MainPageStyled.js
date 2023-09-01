import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .awardBox,
    .qnaBox {
        width: 60vw;
        margin: 15vh 0;
    }

    .awardTitle > p,
    .qnaTitle > p {
        font-size: 30px;
        font-weight: bold;
        margin: 0;

        color: #2d6dcc;
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
        min-width: 200px;
        height: 30vh;
        min-height: 300px;
        padding: 4vh 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        border-radius: 0.625rem;
        background: #fbfbfb;
        /* box-shadow: 0px 4px 10px 5px rgba(251, 183, 9, 0.2); */
        box-shadow: 0px 4px 10px 5px #a2a2a23d;
    }

    .profileBox_2nd {
        width: 11vw;
        min-width: 150px;
        height: 20vh;
        min-height: 200px;
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
        min-width: 150px;
        height: 20vh;
        min-height: 200px;
        padding: 4vh 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        border-radius: 0.625rem;
        background: #fbfbfb;
        /* box-shadow: 0px 4px 10px 5px #b2581c51; */
        box-shadow: 0px 4px 10px 5px #a2a2a23d;
    }

    .tierImg_1st > img {
        width: 7.5vw;
        min-width: 110px;
    }

    .tierImg_2nd > img,
    .tierImg_3rd > img {
        width: 5vw;
        min-width: 80px;
    }

    .profile_1st {
        width: 10vw;
        min-width: 140px;

        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .profile_2nd,
    .profile_3rd {
        width: 8vw;
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
`;
