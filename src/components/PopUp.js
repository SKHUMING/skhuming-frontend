import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;

    position: fixed;
    z-index: 10;

    top: 0;
    left: 0;
    right: 0;

    background-color: #0000009c;

    .msgBox {
        width: 27vw;
        height: 25vh;

        position: fixed;
        margin: 0 auto;
        top: 35vh;
        left: 0;
        right: 0;

        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .message {
        font-size: 1rem;
        color: #2d6dcc;
    }

    .closeBtn {
        width: 18px;
        height: 18px;

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        top: 0;
        right: 0;

        margin-top: 10px;
        margin-right: 10px;

        background-color: #2d6dcc;
        border-radius: 50%;
        color: #fff;
        font-size: 0.6rem;

        cursor: pointer;
    }
`;

function PopUp(props) {
    const onClose = props.onClose;

    return (
        <Container>
            <div className="msgBox">
                <p className="message">{props.msg}</p>
                <div
                    className="closeBtn"
                    onClick={() => {
                        onClose(false);
                    }}
                >
                    X
                </div>
            </div>
        </Container>
    );
}

export default PopUp;
