import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { Container, StyledLink } from "../styles/ScrapBox_widgetStyled.js";

function ScrapBox({ noticeId, end, title }) {
    return (
        <Container>
            <StyledLink to={`/notice/detail/${noticeId}`}>
                <div className="scrapBox">
                    {end ? <div className="scrapContentEnd">종료</div> : ""}
                    <p className="scrapContentTitle">{title}</p>
                    <div className="scrapIcon">
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
