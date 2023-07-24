import React from "react";
import styled from "styled-components";

const Container = styled.div`
    h1 {
        color: #2d6dcc;
    }
`;

function MyPage() {
    return (
        <Container>
            <h1>MyPage</h1>
        </Container>
    );
}

export default MyPage;
