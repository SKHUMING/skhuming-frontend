import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .noticeBox {
        width: 60vw;
        margin: 15vh 0;
    }

    .titleBar {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        font-size: 30px;
        font-weight: bold;

        color: #2d6dcc;
    }

    .titleBar > p {
        margin: 0;
    }

    .addNoticeBtn {
        padding: 0.5vh 1vw;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: #99bff8;
        font-size: 1.1rem;
        color: #fbfbfb;
        border-radius: 20px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);

        cursor: pointer;
    }

    .addNoticeBtn:hover {
        background-color: #2d6dcc;
    }

    .boxTitle > hr {
        height: 3px;
        border: 0;
        background-color: #2d6dcc;
    }

    .searchBox {
        width: 60vw;
        height: 7vh;
        margin: 8vh 0;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .searchInput {
        width: 30vw;
        padding: 0.8vw 2vw;

        border: none;
        border-radius: 1.375rem;
        background: #fbfbfb;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);

        font-size: 1rem;
    }

    .searchBtn {
        padding: 0.8vw 1.2vw;
        margin-left: 1.5vw;

        border: none;
        border-radius: 1.375rem;
        background: #2d6dcc;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);

        color: #fbfbfb;
        font-size: 1rem;

        cursor: pointer;
    }

    .noticeListBox {
        width: 60vw;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .warning {
        font-size: 1rem;
        color: #2d6dcc;
    }
`;

export const StyledLink = styled(Link)`
    color: #fbfbfb;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
        color: #fbfbfb;
    }
`;
