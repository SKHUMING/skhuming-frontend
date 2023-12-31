import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    .scrapBox {
        width: 36vw;
        height: 10vh;
        margin: 1.5vh 0;
        padding: 0 2vw;

        display: flex;
        justify-content: space-between;
        align-items: center;

        border-radius: 0.625rem;
        background: #fff;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
    }

    .scrapContentEnd {
        width: 3vw;
        height: 3.5vh;
        margin-right: 1.5vw;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 0.25rem;
        background: #cdced3;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);

        font-size: 0.8rem;
        color: #fff;
    }

    .scrapContentTitle {
        width: 30vw;

        color: #204782;
    }

    .scrapIcon {
        width: 2vw;
        height: 2vw;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 1.2rem;

        cursor: pointer;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 1rem;
    color: #204782;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
        font-size: 1rem;
        color: #204782;
    }
`;
