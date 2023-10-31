import React from "react";
import { Desktop, Mobile } from "../components/ReactResponse.js";
import { Link } from "react-router-dom";
import LogoImg from "../images/skhuming_logo_ai.png";

import { Container, StyledLink, MStyledLink } from "../styles/MainHeaderStyled";

function MainHeader() {
    return (
        <>
            <Desktop>
                <Container>
                    <div className="mainHeaderContainer">
                        <div className="box1">
                            <Link to="/main">
                                <img src={LogoImg} alt="Logo"></img>
                            </Link>

                            <div className="linkBox">
                                <div className="linkBtn">
                                    <StyledLink to="/ranking">
                                        Ranking
                                    </StyledLink>
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
                    </div>
                </Container>
            </Desktop>
            <Mobile>
                <Container>
                    <div className="m_mainHeaderContainer">
                        <div className="m_box1">
                            <Link to="/main">
                                <img src={LogoImg} alt="Logo"></img>
                            </Link>

                            <div className="m_linkBox">
                                <div className="m_inkBtn">
                                    <MStyledLink to="/ranking">
                                        Ranking
                                    </MStyledLink>
                                </div>
                                <div className="m_linkBtn">
                                    <MStyledLink to="/notice">
                                        Notice
                                    </MStyledLink>
                                </div>
                                <div className="m_linkBtn">
                                    <MStyledLink to="/mypage">
                                        MyPage
                                    </MStyledLink>
                                </div>
                            </div>
                        </div>
                        <div className="m_box2"></div>
                        <div className="m_box3"></div>
                    </div>
                </Container>
            </Mobile>
        </>
    );
}

export default MainHeader;
