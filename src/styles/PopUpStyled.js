import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    position: fixed;
    z-index: 10;

    top: 0;
    left: 0;
    right: 0;

    background-color: #0000009c;

    .msgBox {
        width: 400px;
        height: 400px;

        position: fixed;
        margin: 0 auto;
        top: 30vh;
        left: 0;
        right: 0;

        background-color: #fff;
        border-radius: 13px;
        box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.1);

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .topBox {
        width: 100%;
        height: 200px;

        position: absolute;
        top: 0;
        z-index: 2;

        /* background-color: #2d6dcc; */
        background: linear-gradient(to bottom, #2d6dcc, #5a95ec);
        border-radius: 10px 10px 25% 25%;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
    }

    .icon {
        height: 70px;
        margin-left: 43%;
        margin-top: 20%;

        position: absolute;
    }

    .innerBox {
        width: 100px;
        height: 100px;

        margin-left: 37.8%;
        margin-top: 16.5%;
        position: absolute;

        border-radius: 50%;
        background-color: #ffffff20;
    }

    .innerBox2 {
        width: 115px;
        height: 115px;

        margin-left: 35.9%;
        margin-top: 14.6%;
        position: absolute;

        border-radius: 50%;
        background-color: #ffffff21;
    }

    .topBox2 {
        width: 100%;
        height: 50px;

        position: absolute;
        top: 0;
        z-index: 1;

        background: #5a95ec;
        border-radius: 10px 10px 0 0;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
    }

    .topBox3 {
        width: 100%;
        height: 60px;

        position: absolute;
        top: 0;
        z-index: 0;

        background: #9dc4ff;
        border-radius: 10px 10px 0 0;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
    }

    .message {
        font-size: 1rem;
        color: #2d6dcc;
        margin-top: 150px;
    }

    .closeBtn {
        width: 40px;
        height: 18px;
        padding: 4px 8px;

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        bottom: 15px;
        right: 160px;
        z-index: 5;

        margin-top: 10px;
        margin-right: 10px;

        border-radius: 5px;
        /* color: #2d6dcc;
        background-color: #fff; */
        color: #fff;
        background-color: #5a95ec;

        /* background: linear-gradient(to top, #2d6dcc, #5a95ec, #9dc4ff); */
        font-size: 13px;
        font-weight: bold;

        cursor: pointer;
    }
    .closeBtn:hover {
        background-color: #2d6dcc;
    }
`;
