import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header.js";
import PopUp from "../components/PopUp.js";

import axios from "axios";

const Container = styled.div`
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
        border: #9dc4ff solid 2px;
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
`;

const StyledLink1 = styled(Link)`
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

function LoginPage() {
    const navigate = useNavigate();

    const [inputData, setInputData] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // 팝업창
    const [popup, setPopup] = useState(false);
    const [msg, setMsg] = useState("");

    async function submitLogin() {
        console.log(inputData);
        const loginData = {
            email: inputData.email,
            pwd: inputData.password,
        };
        try {
            const response = await axios.post(
                "https://api.skhuming-api.store/api/login",
                loginData
            );
            window.localStorage.setItem(
                "token",
                "Bearer " + response.data.token
            );
            console.log(response.data);
            window.localStorage.setItem("memberId", response.data.memberId);
            if (response.data.authorityName === "ROLE_ADMIN")
                navigate("/admin/notice");
            else navigate("/main");
        } catch (error) {
            // console.error(error.response.data.message);
            setMsg(error.response.data.message);
            setPopup(true);
        }
    }

    return (
        <Container>
            <Header />
            {popup ? (
                <PopUp onClose={setPopup} msg={msg} notReRoad={true} />
            ) : null}
            <div className="box">
                <div className="loginBox">
                    <div className="titleBox">
                        <p className="title">LOGIN</p>
                    </div>

                    <div className="formBox">
                        <form>
                            <input
                                type="email"
                                placeholder="EMAIL   (@skhu.office.ac.kr)"
                                name="email"
                                value={inputData.email}
                                onChange={handleInputChange}
                            ></input>
                            <input
                                type="password"
                                placeholder="PASSWORD"
                                name="password"
                                value={inputData.password}
                                onChange={handleInputChange}
                            ></input>
                        </form>
                    </div>

                    <div className="linkBox">
                        <div className="signinBtn">
                            <StyledLink1 to="/signin">SIGN IN</StyledLink1>
                        </div>
                        <div className="loginBtn" onClick={submitLogin}>
                            Login
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default LoginPage;
