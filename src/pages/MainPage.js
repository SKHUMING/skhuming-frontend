import React from "react";
import styled from "styled-components";

const Container = styled.div`
    h1 {
        color: #2d6dcc;
    }
`;

function MainPage() {
    return (
        <Container>
            <h1>MainPage</h1>
        </Container>
    );
}

export default MainPage;
