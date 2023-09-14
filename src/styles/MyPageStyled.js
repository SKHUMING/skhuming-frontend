import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .myPageBox {
        width: 65vw;
        height: 70vh;
        margin: 5vh 0;
    }

    .userProfileBox {
        height: 18vh;
        margin-bottom: 2.5vh;

        border-radius: 0.625rem;
        background: #fbfbfb;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
    }

    .userMyPageBox {
        display: flex;
        justify-content: space-between;
    }

    .userScrapBox {
        /* width: 48vw; */
        /* height: 50vh; */
        padding: 2vh 2vw;
        margin-right: 1vw;

        border-radius: 0.625rem;
        background: #fbfbfb;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
    }

    .userMileageBox {
        /* width: 20vw; */
        /* height: 50vh; */
        padding: 2vh 2vw;

        border-radius: 0.625rem;
        background: #fbfbfb;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
    }

    .userProfileBox {
        padding: 0 4vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .userName {
        margin: 0;
        margin-bottom: 1.5vh;

        font-size: 1.6rem;
        font-weight: bold;
        color: #204782;
    }

    .userName > span {
        margin-left: 0.5vw;

        font-size: 1rem;
        font-weight: lighter;
    }

    .userInfo {
        margin: 0;

        color: #204782;
    }

    .logout {
        font-size: 1.7rem;
        cursor: pointer;
    }

    .scrapTitleBox {
        width: 40vw;
        margin-top: 2vh;
    }

    .scrapContentBox {
        height: 38vh;

        overflow-y: scroll;
    }

    .mileageTitleBox {
        width: 16vw;
        margin-top: 2vh;
    }

    .scrapTitle > .titleIconBox > p,
    .mileageTitle > .titleIconBox > p {
        font-size: 1.5rem;
        font-weight: bold;
        margin: 0;

        color: #2d6dcc;
    }

    .titleIconBox {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .scrapTitle > hr,
    .mileageTitle > hr {
        height: 2.5px;
        border: 0;
        background-color: #2d6dcc;
    }

    .mileageBox {
        width: 16vw;
        height: 38vh;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }

    .tierImg > img {
        width: 8.5vw;
        margin-top: 4vh;
    }

    .userScoreBox {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .nickname {
        margin: 0;

        color: #204782;
        font-size: 1.3rem;
        font-weight: bold;
    }

    .score {
        margin: 0;
        margin-top: 1vh;

        color: #204782;
        font-size: 1rem;
    }

    .moreIcon {
        font-size: 20px;
    }

    .noData {
        color: #204782;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
    }
`;
