import React from "react";
import styled from "styled-components";
import MainHeader from "../components/MainHeader.js";

const Container = styled.div`
    h1 {
        color: #2d6dcc;
    }
`;

function RankingPage() {
    return (
        <Container>
            <MainHeader />
            <h1>RankingPage</h1>
        </Container>
    );
}

export default RankingPage;
