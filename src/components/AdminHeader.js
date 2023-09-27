import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../images/skhuming_logo_ai.png";

import { Container, StyledLink } from "../styles/AdminHeaderStyled";

function MainHeader() {
    return (
        <Container>
            <div className="box1">
                <Link to="/admin/notice">
                    <img src={LogoImg} alt="Logo"></img>
                </Link>

                <div className="linkBox">
                    <StyledLink to="/">Login</StyledLink>
                </div>
            </div>
            <div className="box2"></div>
            <div className="box3"></div>
        </Container>
    );
}

export default MainHeader;
