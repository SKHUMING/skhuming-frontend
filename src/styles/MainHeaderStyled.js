import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

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

export const Container = styled.div`
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

export const StyledLink = styled(Link)`
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
