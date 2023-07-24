import React from "react";
import styled from "styled-components";
import Header from "../components/Header.js";

const Container = styled.div`
    h1 {
        color: #2d6dcc;
    }
`;

function SigninPage() {
    return (
        <Container>
            <Header />
            <h1>SigninPage</h1>
        </Container>
    );
}

export default SigninPage;
