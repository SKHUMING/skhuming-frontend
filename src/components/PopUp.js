import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Container } from "../styles/PopUpStyled.js";

function PopUp(props) {
    const navigate = useNavigate();
    const onClose = props.onClose;

    console.log(props);

    return (
        <Container>
            <div className="msgBox">
                <p className="message">{props.msg}</p>
                <div
                    className="closeBtn"
                    onClick={() => {
                        onClose(false);
                        if (props.goLogin) {
                            navigate("/");
                        } else if (!props.notReRoad) {
                            window.location.reload();
                            console.log("re");
                        }
                    }}
                >
                    X
                </div>
            </div>
        </Container>
    );
}

export default PopUp;
