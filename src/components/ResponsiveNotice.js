import React from "react";
import { Container } from "../styles/ResponsiveNoticeStyled.js";

function ResponsiveNotice() {
    return (
        <Container>
            <div className="responsiveBox">
                <p>앗. Skhuming은 데스크탑 및 노트북 접속을 권장합니다.</p>
                <p>만약 이미 PC 접속이라면, 화면의 크기를 키워주세요!</p>
            </div>
        </Container>
    );
}

export default ResponsiveNotice;
