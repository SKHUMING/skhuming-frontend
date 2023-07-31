import React from "react";
import styled from "styled-components";

const Container = styled.div`
    .scrapBox {
        width: 36vw;
        height: 10vh;
        margin: 1.5vh 0;
        padding: 0 2vw;

        display: flex;
        justify-content: space-between;
        align-items: center;

        border-radius: 0.625rem;
        background: #fff;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
    }

    .scrapContentTitle {
        width: 30vw;

        color: #204782;
    }

    .scrapIcon {
        width: 2vw;
        height: 2vw;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 1.2rem;

        cursor: pointer;
    }
`;

function ScrapBox() {
    return (
        <Container>
            <div className="scrapBox">
                <p className="scrapContentTitle">
                    2023학년도 1학기 전공학습공동체 한솥밥 참여자 모집 안내
                </p>
                <div className="scrapIcon">📌</div>
            </div>
        </Container>
    );
}

export default ScrapBox;
