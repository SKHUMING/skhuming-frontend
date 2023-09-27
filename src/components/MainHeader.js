import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../images/skhuming_logo_ai.png";

import { Container, StyledLink } from "../styles/MainHeaderStyled";

function MainHeader() {
    return (
        <Container>
            <div className="box1">
                <Link to="/main">
                    <img src={LogoImg} alt="Logo"></img>
                </Link>

                <div className="linkBox">
                    <div className="linkBtn">
                        <StyledLink to="/ranking">Ranking</StyledLink>
                    </div>
                    <div className="linkBtn">
                        <StyledLink to="/notice">Notice</StyledLink>
                    </div>
                    <div className="linkBtn">
                        <StyledLink to="/mypage">MyPage</StyledLink>
                    </div>
                </div>
            </div>
            <div className="box2"></div>
            <div className="box3"></div>
        </Container>
    );
}

export default MainHeader;
