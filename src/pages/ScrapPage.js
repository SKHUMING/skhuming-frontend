import React from "react";
import styled from "styled-components";
import MainHeader from "../components/MainHeader.js";
import ScrapBox from "../components/ScrapBox.js";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .scrapBox {
        width: 50vw;
        margin: 15vh 0;
    }

    .scrapTitle > p {
        font-size: 30px;
        font-weight: bold;
        margin: 0;

        color: #2d6dcc;
    }

    .scrapTitle > hr {
        margin-bottom: 5vh;

        height: 3px;
        border: 0;
        background-color: #2d6dcc;
    }
`;

function ScrapPage() {
    return (
        <Container>
            <MainHeader />
            <div className="scrapBox">
                <div className="scrapTitle">
                    <p>MY SCRAP</p>
                    <hr />
                </div>

                <div className="scrapContentBox">
                    <ScrapBox
                        noticeId="1"
                        end={false}
                        title="23년도 111학기 튜터링"
                    />
                    <ScrapBox
                        noticeId="2"
                        end={false}
                        title="23년도 2학기 튜터링"
                    />
                    <ScrapBox
                        noticeId="3"
                        end={false}
                        title="23년도 2학기 튜터링"
                    />
                    <ScrapBox
                        noticeId="4"
                        end={true}
                        title="23년도 2학기 튜터링"
                    />
                </div>
            </div>
        </Container>
    );
}

export default ScrapPage;
