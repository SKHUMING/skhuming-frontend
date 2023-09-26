import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { Container, StyledLink } from "../styles/ScrapBoxStyled.js";

function ScrapBox({ noticeId, end, title }) {
    return (
        <Container>
            <StyledLink to={`/notice/detail/${noticeId}`}>
                <div className="noticeContentBox">
                    {end ? <div className="noticeContentEnd">종료</div> : ""}
                    <p className="noticeContentTitle">{title}</p>
                    <div className="noticeScrapIcon">
                        <FontAwesomeIcon
                            icon={faStar}
                            style={{ color: "#2d6dcc" }}
                        />
                    </div>
                </div>
            </StyledLink>
        </Container>
    );
}

export default ScrapBox;
