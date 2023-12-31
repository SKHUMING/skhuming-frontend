import React from "react";

import { Container, StyledLink } from "../styles/NoticeBoxStyled";

function NoticeBox({ noticeId, status, title, date }) {
    return (
        <Container>
            <StyledLink to={`/notice/detail/${noticeId}`}>
                <div className="noticeContentBox">
                    {status ? (
                        <div className="noticeContentEnd">진행 중</div>
                    ) : (
                        ""
                    )}
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
