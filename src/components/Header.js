import React from "react";
import styled, { keyframes } from "styled-components";
import LogoImg from "../images/skhuming_logo_ai.png";
import { Link } from "react-router-dom";

import { Container } from "../styles/HeaderStyled";

function Header() {
    return (
        <Container>
            <div className="box1">
                <Link to="/">
                    <img src={LogoImg} alt="Logo"></img>
                </Link>
            </div>

            <div className="box2"></div>
            <div className="box3"></div>
        </Container>
    );
}

export default Header;
