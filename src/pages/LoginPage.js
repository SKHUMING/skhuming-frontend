import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header.js";
import PopUp from "../components/PopUp.js";
import axios from "axios";

import { Container, StyledLink } from "../styles/LoginPageStyled.js";

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
                            <StyledLink to="/signin">SIGN IN</StyledLink>
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
