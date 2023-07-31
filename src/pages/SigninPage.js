import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../components/Header.js";

const Container = styled.div`
    .box {
        width: 100vw;

        margin: 10vh 0;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .loginBox {
        width: 700px;
        height: 830px;

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
        width: 70px;

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
        width: 30px;
        height: 30px;

        margin-left: 10px;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 35px;

        transition: font-size 0.3s ease-in-out;
    }
    .iconBox:hover {
        cursor: pointer;
        font-size: 40px;
    }

    .inputExplanation {
        width: 400px;
        margin-left: 105px;

        display: flex;
        align-items: center;
    }

    .expDetail {
        margin-left: 10px;
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
`;

const StyledLink = styled(Link)`
    color: #fbfbfb;
    text-decoration: none;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
        color: #fbfbfb;
    }
`;

function SigninPage() {
    return (
        <Container>
            <Header />
            <div className="box">
                <div className="loginBox">
                    <div className="titleBox">
                        <p className="title">SIGN IN</p>
                    </div>

                    <div className="formBox">
                        <form>
                            <div className="inputBox">
                                <label>이메일</label>
                                <input
                                    type="email"
                                    placeholder="EMAIL   (@skhu.office.ac.kr)"
                                ></input>
                                <div className="iconBox">📧</div>
                            </div>
                            <div className="inputExplanation">
                                📢
                                <div className="expDetail">
                                    <span> @office.skhu.ac.kr</span> 이메일을
                                    적고,
                                    <br />
                                    우측의 인증 메일 버튼을 통해
                                    <span> 재학생 인증</span>을 받아주세요!
                                </div>
                            </div>

                            <div className="inputBox">
                                <label>비밀번호</label>
                                <input
                                    type="password"
                                    placeholder="PASSWORD"
                                ></input>
                                <div className="iconBox"></div>
                            </div>
                            <div className="inputExplanation">
                                📢{" "}
                                <div className="expDetail">
                                    <span> 8자리 이상</span>으로 입력해주세요!
                                </div>
                            </div>

                            <div className="inputBox">
                                <label>닉네임</label>
                                <input
                                    type="text"
                                    placeholder="NICKNAME"
                                ></input>
                                <div className="iconBox"></div>
                            </div>
                            <div className="inputExplanation">
                                📢{" "}
                                <div className="expDetail">
                                    랭킹에 보여질 이름입니다. <br />
                                    변경이 불가하오니 신중히 입력해주세요!
                                </div>
                            </div>

                            <div className="inputBox">
                                <label>이름</label>
                                <input type="text" placeholder="NAME"></input>
                                <div className="iconBox"></div>
                            </div>

                            <div className="inputBox">
                                <label>소속 학부</label>
                                <input
                                    type="text"
                                    placeholder="DEPARTMENT"
                                ></input>
                                <div className="iconBox"></div>
                            </div>

                            <div className="inputBox">
                                <label>학번</label>
                                <input
                                    type="text"
                                    placeholder="STUDENT NUMBER"
                                ></input>
                                <div className="iconBox"></div>
                            </div>
                        </form>
                    </div>

                    <div className="linkBox">
                        <div className="signinBtn">
                            <StyledLink to="/main">SIGN IN</StyledLink>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default SigninPage;
