import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    .responsiveBox {
        width: 50vw;
        height: 25vh;
        padding: 15px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background-color: #fbfbfb;
        border-radius: 13px;
        box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.1);
    }

    p {
        color: #2d6dcc;
        margin: 10px;
    }
`;
