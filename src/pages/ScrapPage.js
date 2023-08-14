import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();
    const [scrapData, setScrapData] = useState([]);

    async function getScrapData() {
        const memberId = window.localStorage.getItem("memberId");
        try {
            const response = await axios.get(
                "http://15.164.131.248:8080/user/api/scrap/list",
                {
                    params: { memberId: memberId },
                    headers: {
                        Authorization: window.localStorage.getItem("token"),
                    },
                }
            );
            console.log(response);
            setScrapData(response.data.reverse());
        } catch (error) {
            console.error(error);
            window.confirm(error.response.data);
            navigate("/");
        }
    }

    useEffect(() => {
        getScrapData();
    }, []);

    return (
        <Container>
            <MainHeader />
            <div className="scrapBox">
                <div className="scrapTitle">
                    <p>MY SCRAP</p>
                    <hr />
                </div>

                <div className="scrapContentBox">
                    {scrapData
                        ? scrapData.map((item) => (
                              <ScrapBox
                                  noticeId={item.noticeId}
                                  end={item.end}
                                  title={item.title}
                              />
                          ))
                        : ""}
                </div>
            </div>
        </Container>
    );
}

export default ScrapPage;
