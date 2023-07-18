import React from "react";
import styled from "styled-components";
import LogoImg from "../images/skhumingLogo.png";

const Container = styled.div`
    width: 100vw;
    height: 40vh;

    .box1 {
        width: 100vw;
        height: 30vh;
        flex-shrink: 0;

        position: fixed;
        z-index: 2;

        background: #2d6dcc;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .box2 {
        width: 100vw;
        height: 35vh;
        flex-shrink: 0;

        position: fixed;
        z-index: 1;

        background: #5a95ec;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
    }

    .box3 {
        width: 100vw;
        height: 40vh;
        flex-shrink: 0;

        position: fixed;
        z-index: 0;

        background: #9dc4ff;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
    }

    img {
        width: 32.375rem;
        height: 10.75rem;
        flex-shrink: 0;
    }
`;

function Header() {
    return (
        <Container>
            <div className="box1">
                <img src={LogoImg} alt="Logo"></img>
            </div>
            <div className="box2"></div>
            <div className="box3"></div>
        </Container>
    );
}

export default Header;
