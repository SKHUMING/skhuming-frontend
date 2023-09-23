import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header.js";
import PopUp from "../components/PopUp.js";
import { Desktop } from "../components/ReactResponse.js";

import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import { Container } from "../styles/SigninPageStyled.js";

function SigninPage() {
    const navigate = useNavigate();

    // 팝업창
    const [popup, setPopup] = useState(false);
    const [msg, setMsg] = useState("");
    const [goLogin, setGoLogin] = useState(false);

    const [inputData, setInputData] = useState({
        email: "",
        pwd: "",
        nickname: "",
        memberName: "",
        department: 0,
        studentNumber: "",
    });
    const [pwdCheck, setpwdCheck] = useState("");

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log(inputData);
    };

    // 비밀번호 확인 onChange
    const handleInputChangeCheck = (event) => {
        setpwdCheck(event.target.value);
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
            setStudentCheck(false);
            setMsg("인증 코드가 일치하지 않아요.");
            setPopup(true);
        }
    };

    // 재학생 인증 성공
    const [studentCheck, setStudentCheck] = useState(false);

    async function submitSignin() {
        if (studentCheck) {
            try {
                const response = await axios.post(
                    "https://api.skhuming-api.store/api/join",
                    inputData
                );
                console.log(response.data);
                setMsg("회원가입에 성공했습니다! 다시 로그인 해주세요.");
                setGoLogin(true);
                setPopup(true);
                // navigate("/");
            } catch (error) {
                console.error(error.response.data.message);
                setMsg(error.response.data.message);
                setPopup(true);
            }
        } else {
            setMsg("모든 입력과 인증을 완료해주세요!");
            setPopup(true);
        }
    }

    // 재학생 인증 메일 보내기 (인증 문자열로 응답 후 상태 저장)
    const [authenticationCode, setAuthenticationCode] = useState("");
    async function checkEmail() {
        const email = { email: inputData.email };
        try {
            const response = await axios.post(
                "https://api.skhuming-api.store/api/email-check",
                email
            );
            setAuthenticationCode(response.data);
            setMsg(`인증 메일이 전송되었습니다.`);
            setPopup(true);
        } catch (error) {
            console.log(error.response.data.message);
            setMsg(error.response.data.message);
            setPopup(true);
        }
    }

    // 학부 선택
    const [department, setDepartment] = useState([
        { departmentId: 1, department: "인문자율융합학부" },
        { departmentId: 2, department: "사회융합자율학부" },
        { departmentId: 3, department: "미디어콘텐츠융합자율학부" },
        { departmentId: 4, department: "IT융합자율학부" },
    ]);
    // 선택한 학부 (select box)
    const handleAward = (event) => {
        let addDepartmentData = { ...inputData };
        addDepartmentData.department = event.currentTarget.value;
        setInputData(addDepartmentData);
    };

    return (
        <Desktop>
            <Container>
                <Header />
                {popup ? (
                    <PopUp
                        onClose={setPopup}
                        msg={msg}
                        notReRoad={true}
                        goLogin={goLogin}
                    />
                ) : null}
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
                                        placeholder="EMAIL   (@office.skhu.ac.kr)"
                                        name="email"
                                        value={inputData.email}
                                        onChange={handleInputChange}
                                    ></input>
                                    <div
                                        className="iconBox"
                                        onClick={checkEmail}
                                    >
                                        <FontAwesomeIcon
                                            icon={faPaperPlane}
                                            style={{ color: "#2d6dcc" }}
                                        />
                                    </div>
                                </div>
                                <div className="inputExplanation">
                                    📢
                                    <div className="expDetail">
                                        <span> @office.skhu.ac.kr</span>{" "}
                                        이메일을 적고,
                                        <br />
                                        우측의 메일 전송 버튼으로
                                        <span> 인증 코드</span>를 받아주세요!
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
                                    <div
                                        className="iconBox"
                                        onClick={checkCode}
                                    >
                                        {studentCheck ? (
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                style={{ color: "#2d6dcc" }}
                                            />
                                        ) : (
                                            <div className="checkBtn">인증</div>
                                        )}
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
                                <div className="inputBox">
                                    <label>비밀번호 확인</label>
                                    <input
                                        type="password"
                                        placeholder="PASSWORD"
                                        name="pwdCheck"
                                        value={pwdCheck}
                                        onChange={handleInputChangeCheck}
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
                                                비밀번호가{" "}
                                                <span>8자리 이상</span>
                                                입니다!
                                            </div>
                                        </>
                                    )}
                                </div>
                                {inputData.pwd.length > 0 ? (
                                    <div className="inputExplanation">
                                        {inputData.pwd === pwdCheck ? (
                                            <>
                                                ✅
                                                <div className="expDetail">
                                                    비밀번호가 일치합니다!
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                ❌
                                                <div className="expDetail">
                                                    비밀번호가 일치하지
                                                    않습니다.
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ) : null}

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
                                    <form className="selectDepartment">
                                        <select onChange={handleAward}>
                                            {department.map((item) => (
                                                <option
                                                    key={item.departmentId}
                                                    value={item.departmentId}
                                                >
                                                    {item.department}
                                                </option>
                                            ))}
                                        </select>
                                    </form>
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
        </Desktop>
    );
}

export default SigninPage;
