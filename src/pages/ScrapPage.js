import React from "react";
import styled from "styled-components";
import MainHeader from "../components/MainHeader.js";

const Container = styled.div`
    h1 {
        color: #2d6dcc;
    }
`;

function ScrapPage() {
    return (
        <Container>
            <MainHeader />
            <h1>ScrapPage</h1>
        </Container>
    );
}

export default ScrapPage;
