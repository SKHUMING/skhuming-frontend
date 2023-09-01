import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Container, StyledLink } from "../styles/AdminNoticeBoxStyled.js";

function AdminNoticeBox({ noticeId, end, title }) {
    return (
        <Container>
            <StyledLink to={`/admin/notice/detail/${noticeId}`}>
                <div className="noticeContentBox">
                    {end ? <div className="noticeContentEnd">종료</div> : ""}
                    <p className="noticeContentTitle">{title}</p>
                </div>
            </StyledLink>
        </Container>
    );
}

export default AdminNoticeBox;
