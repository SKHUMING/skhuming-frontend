import styled from "styled-components";

export const Container = styled.div`
    .box {
        width: 100vw;

        margin: 10vh 0;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .loginBox {
        width: 700px;
        height: 980px;

        padding: 60px 0;

        display: flex;
        flex-direction: column;

        /* justify-content: space-evenly; */
        align-items: center;

        border-radius: 15px;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);

        background-color: #fbfbfb;
    }

    .titleBox {
        width: 80%;

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

    .formBox {
        width: 80%;
        margin: 5vh 0;
    }

    .inputBox {
        margin: 2.5vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .inputBox > label {
        width: 135px;

        font-size: 18px;
        font-weight: bold;
        color: #2d6dcc;
    }

    input {
        width: 350px;
        height: 10px;
        padding: 20px;

        border-radius: 0.75rem;
        background: #fff;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);

        border: none;
        outline: none;
    }

    .iconBox {
        width: 50px;
        height: 30px;

        margin-left: 10px;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 23px;

        transition: font-size 0.3s ease-in-out;
    }
    .iconBox:hover {
        cursor: pointer;
        /* font-size: 30px; */
    }

    .inputExplanation {
        width: 400px;
        margin-left: 138px;

        display: flex;
        align-items: center;
    }

    .expDetail {
        margin-left: 8px;
        color: #9dc4ff;
        font-size: 15px;
    }
    .expDetail > span {
        font-weight: bold;
    }

    .linkBox {
        width: 80%;

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
        margin-left: 15px;

        border-radius: 15px;
        border: #3a73c9 solid 2px;

        background-color: #3a73c9;
        color: #fbfbfb;

        transition: all 0.3s ease-in-out;
    }
    .signinBtn:hover {
        border: #9dc4ff solid 2px;
        background-color: #9dc4ff;
    }

    .checkBtn {
        font-size: 12px;
        padding: 5px 10px;
        border-radius: 15px;
        background-color: #2d6dcc;
        color: #fbfbfb;
    }

    // 학부 select box
    .selectDepartment > select {
        width: 348px;
        height: 48px;
        padding: 5px 15px;

        border-radius: 0.75rem;
        border: none;
        background: #fff;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
    }
`;
