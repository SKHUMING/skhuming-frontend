import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import MainHeader from "../components/MainHeader.js";

const Container = styled.div`
    h1 {
        color: #2d6dcc;
    }
`;

function NoticeDetailsPage() {
    const { noticeId } = useParams();

    return (
        <Container>
            <MainHeader />
            <h1>NoticeDetailsPage {noticeId}</h1>
        </Container>
    );
}

export default NoticeDetailsPage;
