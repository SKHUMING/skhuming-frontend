import React from "react";
import styled, { keyframes } from "styled-components";
import LogoImg from "../images/skhuming_logo_ai.png";

// const slideIn = keyframes`
// to{
//     top: 0vh;
// }
// from{
//     top: 5vh;
// }
// `;

const slideBox1 = keyframes`
to{
    height: 30vh;
}
from{
    height: 37vh;
}
`;

const slideBox2 = keyframes`
to{
    height: 35vh;
}
from{
    height: 42vh;
}
`;

const slideBox3 = keyframes`
to{
    height: 40vh;
}
from{
    height: 47vh;
}
`;

const Container = styled.div`
    width: 100vw;
    height: 40vh;

    .box1 {
        width: 100vw;
        height: 30vh;
        flex-shrink: 0;

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        z-index: 2;

        background: #2d6dcc;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);

        animation: ${slideBox1} 1.5s cubic-bezier(0.345, 0.77, 0.395, 0.92);
    }

    .box2 {
        width: 100vw;
        height: 35vh;
        flex-shrink: 0;

        position: absolute;
        z-index: 1;

        background: #5a95ec;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);

        animation: ${slideBox2} 2s cubic-bezier(0.345, 0.77, 0.395, 0.92);
    }

    .box3 {
        width: 100vw;
        height: 40vh;
        flex-shrink: 0;

        position: absolute;
        z-index: 0;

        background: #9dc4ff;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);

        animation: ${slideBox3} 2.5s cubic-bezier(0.345, 0.77, 0.395, 0.92);
    }

    img {
        width: 330px;
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
