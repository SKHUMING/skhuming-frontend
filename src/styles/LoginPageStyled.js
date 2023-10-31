import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    .box {
        width: 100vw;
        height: 60vh;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .loginBox {
        width: 530px;
        height: 300px;

        padding: 50px 0;

        display: flex;
        flex-direction: column;

        justify-content: space-evenly;
        align-items: center;

        border-radius: 15px;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);

        background-color: #fbfbfb;
    }

    .titleBox {
        width: 340px;

        display: flex;
        align-items: flex-start;
    }

    .title {
        margin: 0;

        color: #2d6dcc;

        font-size: 35px;
        font-style: normal;
        font-weight: bold;
        line-height: normal;
    }

    form {
        height: 150px;

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    input {
        width: 300px;
        height: 10px;
        padding: 20px;

        border-radius: 0.75rem;
        background: #fff;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);

        border: none;
        outline: none;
    }

    .linkBox {
        width: 340px;

        display: flex;
        justify-content: flex-end;
    }

    .linkBox > div {
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 18px;
        font-weight: bold;

        cursor: pointer;
    }

    .signinBtn {
        width: 80px;
        height: 30px;

        padding: 5px;

        border-radius: 15px;
        border: #fbfbfb solid 2px;

        color: #3a73c9;

        transition: border 0.3s ease-in-out;
    }
    .signinBtn:hover {
        border: #3a73c9 solid 2px;
    }

    .loginBtn {
        width: 80px;
        height: 30px;

        padding: 5px;
        margin-left: 15px;

        border-radius: 15px;
        border: #3a73c9 solid 2px;

        background-color: #3a73c9;
        color: #fbfbfb;

        transition: all 0.3s ease-in-out;
    }
    .loginBtn:hover {
        border: #9dc4ff solid 2px;
        background-color: #9dc4ff;
    }

    // mobile
    .m_box {
        width: 100vw;
        height: 60vh;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .m_loginBox {
        width: 80vw;
        height: 30vh;

        padding: 50px 0;

        display: flex;
        flex-direction: column;

        justify-content: space-evenly;
        align-items: center;

        border-radius: 15px;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);

        background-color: #fbfbfb;
    }

    .m_titleBox {
        width: 70vw;

        display: flex;
        align-items: flex-start;
    }

    .m_title {
        margin: 0;

        color: #2d6dcc;

        font-size: 35px;
        font-style: normal;
        font-weight: bold;
        line-height: normal;
    }

    form {
        height: 150px;

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    .m_input {
        width: 60vw;
        height: 10px;
        padding: 20px;

        border-radius: 0.75rem;
        background: #fff;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);

        border: none;
        outline: none;
    }

    .m_linkBox {
        width: 70vw;

        display: flex;
        justify-content: flex-end;
    }

    .m_linkBox > div {
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 15px;
        font-weight: bold;

        cursor: pointer;
    }

    .m_signinBtn {
        width: 60px;
        height: 20px;

        padding: 5px;

        border-radius: 15px;
        border: #fbfbfb solid 2px;

        color: #3a73c9;

        transition: border 0.3s ease-in-out;
    }
    .m_signinBtn:hover {
        border: #3a73c9 solid 2px;
    }

    .m_loginBtn {
        width: 60px;
        height: 20px;

        padding: 5px;
        margin-left: 15px;

        border-radius: 15px;
        border: #3a73c9 solid 2px;

        background-color: #3a73c9;
        color: #fbfbfb;

        transition: all 0.3s ease-in-out;
    }
    .m_loginBtn:hover {
        border: #9dc4ff solid 2px;
        background-color: #9dc4ff;
    }
`;

export const StyledLink = styled(Link)`
    color: #3a73c9;
    text-decoration: none;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
        color: #3a73c9;
    }
`;
