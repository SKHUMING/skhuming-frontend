import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../styles/PopUpStyled.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

import AOS from "aos";
import "aos/dist/aos.css";

function PopUp(props) {
    const navigate = useNavigate();
    const onClose = props.onClose;

    useEffect(() => {
        AOS.init(); // AOS 초기화
    }, []);

    console.log(props);

    return (
        <Container>
            <div className="msgBox">
                <div className="topBox">
                    <FontAwesomeIcon
                        icon={faBell}
                        style={{ color: "#ffffff" }}
                        className="icon"
                    />
                    <div className="innerBox"></div>
                    <div className="innerBox2"></div>
                </div>
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
                    닫기
                </div>
            </div>
        </Container>
    );
}

export default PopUp;
