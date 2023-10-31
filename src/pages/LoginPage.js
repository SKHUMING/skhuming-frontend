import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Desktop, Mobile } from "../components/ReactResponse.js";
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
            window.localStorage.setItem("memberId", response.data.memberId);
            if (response.data.authorityName === "ROLE_ADMIN")
                navigate("/admin/notice");
            else navigate("/main");
        } catch (error) {
            setMsg(error.response.data.message);
            setPopup(true);
        }
    }

    return (
        <>
            <Desktop>
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
                                        placeholder="EMAIL   (@office.skhu.ac.kr)"
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
                                    <StyledLink to="/signin">
                                        SIGN IN
                                    </StyledLink>
                                </div>
                                <div className="loginBtn" onClick={submitLogin}>
                                    Login
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Desktop>
            <Mobile>
                <Container>
                    <Header />
                    {popup ? (
                        <PopUp onClose={setPopup} msg={msg} notReRoad={true} />
                    ) : null}
                    <div className="m_box">
                        <div className="m_loginBox">
                            <div className="m_titleBox">
                                <p className="m_title">LOGIN</p>
                            </div>

                            <div className="m_formBox">
                                <form>
                                    <input
                                        className="m_input"
                                        type="email"
                                        placeholder="EMAIL   (@office.skhu.ac.kr)"
                                        name="email"
                                        value={inputData.email}
                                        onChange={handleInputChange}
                                    ></input>
                                    <input
                                        className="m_input"
                                        type="password"
                                        placeholder="PASSWORD"
                                        name="password"
                                        value={inputData.password}
                                        onChange={handleInputChange}
                                    ></input>
                                </form>
                            </div>

                            <div className="m_linkBox">
                                <div className="m_signinBtn">
                                    <StyledLink to="/signin">
                                        SIGN IN
                                    </StyledLink>
                                </div>
                                <div
                                    className="m_loginBtn"
                                    onClick={submitLogin}
                                >
                                    Login
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Mobile>
        </>
    );
}

export default LoginPage;
