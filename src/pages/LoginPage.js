import React from "react";
import styled from "styled-components";
import Header from "../components/Header.js";

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
        color: #3a73c9;
    }

    .loginBtn {
        width: 80px;
        height: 30px;

        padding: 5px;
        margin-left: 25px;

        border-radius: 15px;

        background-color: #3a73c9;
        color: #fbfbfb;
    }
`;

function LoginPage() {
    return (
        <Container>
            <Header />
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
                            ></input>
                            <input
                                type="password"
                                placeholder="PASSWORD"
                            ></input>
                        </form>
                    </div>

                    <div className="linkBox">
                        <div className="signinBtn">SIGN IN</div>
                        <div className="loginBtn">LOGIN</div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default LoginPage;
