import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header.js";
import PopUp from "../components/PopUp.js";

import axios from "axios";

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
        height: 900px;

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

        font-size: 27px;

        transition: font-size 0.3s ease-in-out;
    }
    .iconBox:hover {
        cursor: pointer;
        font-size: 30px;
    }

    .inputExplanation {
        width: 400px;
        margin-left: 105px;

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
`;

// 닉네임, 이메일 중복

function SigninPage() {
    const navigate = useNavigate();

    // 팝업창
    const [popup, setPopup] = useState(false);
    const [msg, setMsg] = useState("");

    const [inputData, setInputData] = useState({
        email: "",
        pwd: "",
        nickname: "",
        memberName: "",
        department: "",
        studentNumber: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log(inputData);
    };

    // 재학생 인증 이메일 Input
    const [emailCheck, setEmailCheck] = useState("");

    const handleEmailCheckChange = (event) => {
        setEmailCheck(event.target.value);
    };

    const checkCode = () => {
        if (authenticationCode === emailCheck && authenticationCode !== "")
            setStudentCheck(true);
        else {
            setMsg("인증 코드가 일치하지 않아요. 😢");
            setPopup(true);
        }
    };

    // 재학생 인증 성공
    const [studentCheck, setStudentCheck] = useState(false);

    async function submitSignin() {
        if (studentCheck) {
            try {
                const response = await axios.post(
                    "http://15.164.131.248:8080/api/join",
                    inputData
                );
                console.log(response.data);
                navigate("/");
            } catch (error) {
                console.error(error.response.data.message);
                setMsg(error.response.data.message);
                setPopup(true);
            }
        } else {
            setMsg("모든 입력과 인증을 완료해주세요! 🙏🏻");
            setPopup(true);
        }
    }

    // 재학생 인증 메일 보내기 (인증 문자열로 응답 후 상태 저장)
    const [authenticationCode, setAuthenticationCode] = useState("");
    async function checkEmail() {
        const email = { email: inputData.email };
        try {
            const response = await axios.post(
                "http://15.164.131.248:8080/api/email-check",
                email
            );
            setAuthenticationCode(response.data);
        } catch (error) {
            console.log(error.response.data.message);
            setMsg(error.response.data.message);
            setPopup(true);
        }
    }

    return (
        <Container>
            <Header />
            {popup ? <PopUp onClose={setPopup} msg={msg} /> : null}
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
                                    name="email"
                                    value={inputData.email}
                                    onChange={handleInputChange}
                                ></input>
                                <div className="iconBox" onClick={checkEmail}>
                                    📧
                                </div>
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
                                <label>인증 코드</label>
                                <input
                                    type="text"
                                    placeholder="office 365 메일로 받은 인증 코드를 적어주세요"
                                    name="emailCheck"
                                    value={emailCheck}
                                    onChange={handleEmailCheckChange}
                                ></input>
                                <div className="iconBox" onClick={checkCode}>
                                    {studentCheck ? "✅" : "❓"}
                                </div>
                            </div>

                            <div className="inputBox">
                                <label>비밀번호</label>
                                <input
                                    type="password"
                                    placeholder="PASSWORD"
                                    name="pwd"
                                    value={inputData.pwd}
                                    onChange={handleInputChange}
                                ></input>
                                <div className="iconBox"></div>
                            </div>
                            <div className="inputExplanation">
                                {inputData.pwd.length < 8 ? (
                                    <>
                                        📢
                                        <div className="expDetail">
                                            <span> 8자리 이상</span>으로
                                            입력해주세요!
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        ✅
                                        <div className="expDetail">
                                            비밀번호가 <span>8자리 이상</span>
                                            입니다!
                                        </div>
                                    </>
                                )}
                            </div>

                            <div className="inputBox">
                                <label>닉네임</label>
                                <input
                                    type="text"
                                    placeholder="NICKNAME"
                                    name="nickname"
                                    value={inputData.nickname}
                                    onChange={handleInputChange}
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
                                <input
                                    type="text"
                                    placeholder="NAME"
                                    name="memberName"
                                    value={inputData.memberName}
                                    onChange={handleInputChange}
                                ></input>
                                <div className="iconBox"></div>
                            </div>

                            <div className="inputBox">
                                <label>소속 학부</label>
                                <input
                                    type="text"
                                    placeholder="DEPARTMENT"
                                    name="department"
                                    value={inputData.department}
                                    onChange={handleInputChange}
                                ></input>
                                <div className="iconBox"></div>
                            </div>

                            <div className="inputBox">
                                <label>학번</label>
                                <input
                                    type="text"
                                    placeholder="STUDENT NUMBER"
                                    name="studentNumber"
                                    value={inputData.studentNumber}
                                    onChange={handleInputChange}
                                ></input>
                                <div className="iconBox"></div>
                            </div>
                        </form>
                    </div>

                    <div className="linkBox">
                        <div className="signinBtn" onClick={submitSignin}>
                            {" "}
                            SIGN IN
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default SigninPage;
