import React from "react";
import styled from "styled-components";
import MainHeader from "../components/MainHeader.js";
import NoticeBox from "../components/NoticeBox.js";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .noticeBox {
        width: 60vw;
        margin: 15vh 0;
    }

    .boxTitle > p {
        font-size: 30px;
        font-weight: bold;
        margin: 0;

        color: #2d6dcc;
        color: #2d6dcc;
    }

    .boxTitle > hr {
        height: 3px;
        border: 0;
        background-color: #2d6dcc;
    }

    .searchBox {
        width: 60vw;
        height: 7vh;
        margin: 8vh 0;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .searchInput {
        width: 30vw;
        padding: 0.8vw 2vw;

        border: none;
        border-radius: 1.375rem;
        background: #fbfbfb;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);

        font-size: 1rem;
    }

    .searchBtn {
        padding: 0.8vw 1.2vw;
        margin-left: 1.5vw;

        border: none;
        border-radius: 1.375rem;
        background: #2d6dcc;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);

        color: #fbfbfb;
        font-size: 1rem;

        cursor: pointer;
    }

    .noticeListBox {
        width: 60vw;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

function NoticePage() {
    return (
        <Container>
            <MainHeader />
            <div class="noticeBox">
                <div className="boxTitle">
                    <p>비교과 프로그램 공지</p>
                    <hr />
                </div>

                <div className="searchBox">
                    <form>
                        <input
                            className="searchInput"
                            type="text"
                            placeholder="검색어를 입력하세요"
                        />
                        <button className="searchBtn" type="submit">
                            검색
                        </button>
                    </form>
                </div>

                <div className="noticeListBox">
                    <NoticeBox end={false} title="23년도 2학기 튜터링" />
                    <NoticeBox end={true} title="23년도 1학기 한솥밥" />
                </div>
            </div>
        </Container>
    );
}

export default NoticePage;
