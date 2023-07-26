import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import LogoImg from "../images/skhuming_logo_ai.png";

const slideBox1 = keyframes`
to{
    height: 15vh;
}
from{
    height: 17vh;
}
`;

const slideBox2 = keyframes`
to{
    height: 17vh;
}
from{
    height: 19vh;
}
`;

const slideBox3 = keyframes`
to{
    height: 19vh;
}
from{
    height: 21vh;
}
`;

const Container = styled.div`
    width: 100vw;
    height: 20vh;

    .box1 {
        width: 80vw;
        height: 15vh;

        padding: 0 10vw;
        flex-shrink: 0;

        display: flex;
        justify-content: space-between;
        align-items: center;

        position: absolute;
        z-index: 2;

        background: #2d6dcc;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);

        animation: ${slideBox1} 1s cubic-bezier(0.345, 0.77, 0.395, 0.92);
    }

    .box2 {
        width: 100vw;
        height: 17vh;
        flex-shrink: 0;

        position: absolute;
        z-index: 1;

        background: #5a95ec;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);

        animation: ${slideBox2} 1.3s cubic-bezier(0.345, 0.77, 0.395, 0.92);
    }

    .box3 {
        width: 100vw;
        height: 19vh;
        flex-shrink: 0;

        position: absolute;
        z-index: 0;

        background: #9dc4ff;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);

        animation: ${slideBox3} 1.6s cubic-bezier(0.345, 0.77, 0.395, 0.92);
    }

    img {
        width: 200px;
    }

    .linkBox {
        display: flex;
        margin-top: 7vh;
    }

    .linkBtn {
        margin: 0 2vw;
    }
`;

const StyledLink = styled(Link)`
    color: #fbfbfb;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
        color: #fbfbfb;
    }
`;

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
