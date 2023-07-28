import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .noticeListBox {
        width: 60vw;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .noticeContentBox {
        width: 50vw;
        height: 10vh;
        margin: 1vh 0;

        display: flex;
        justify-content: flex-start;
        align-items: center;

        border-radius: 0.625rem;
        background: #fbfbfb;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);

        cursor: pointer;
    }

    .noticeContentEnd {
        width: 3vw;
        height: 3.5vh;
        margin-left: 1.5vw;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 0.25rem;
        background: #204782;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);

        font-size: 0.8rem;
        color: #fff;
    }

    .noticeContentTitle {
        margin-left: 2vw;

        font-size: 1rem;
        color: #204782;
    }
`;

function NoticeBox({ end, title }) {
    return (
        <Container>
            <div className="noticeContentBox">
                {end ? <div className="noticeContentEnd">종료</div> : ""}
                <p className="noticeContentTitle">{title}</p>
            </div>
        </Container>
    );
}

export default NoticeBox;
