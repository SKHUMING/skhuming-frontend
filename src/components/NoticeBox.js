import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Container, StyledLink } from "../styles/NoticeBoxStyled";

function NoticeBox({ noticeId, end, title }) {
    return (
        <Container>
            <StyledLink to={`/notice/detail/${noticeId}`}>
                <div className="noticeContentBox">
                    {end ? <div className="noticeContentEnd">종료</div> : ""}
                    <p className="noticeContentTitle">{title}</p>
                </div>
            </StyledLink>
        </Container>
    );
}

export default NoticeBox;
