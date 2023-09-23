import React from "react";

import { Container, StyledLink } from "../styles/NoticeBoxStyled";

function NoticeBox({ noticeId, end, title, date }) {
    return (
        <Container>
            <StyledLink to={`/notice/detail/${noticeId}`}>
                <div className="noticeContentBox">
                    {end ? <div className="noticeContentEnd">종료</div> : ""}
                    <div className="titleDateBox">
                        <p className="noticeContentTitle">{title}</p>
                        <p className="noticeDate">{date} 작성</p>
                    </div>
                </div>
            </StyledLink>
        </Container>
    );
}

export default NoticeBox;
