import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MainHeader from "../components/MainHeader.js";
import ScrapBox from "../components/ScrapBox.js";
import PopUp from "../components/PopUp.js";

import { Container } from "../styles/ScrapPageStyled.js";

function ScrapPage() {
    const [scrapData, setScrapData] = useState([]);

    const [popup, setPopup] = useState(false);
    const [msg, setMsg] = useState("");
    const [goLogin, setGoLogin] = useState(false);

    async function getScrapData() {
        const memberId = window.localStorage.getItem("memberId");
        try {
            const response = await axios.get(
                "https://api.skhuming-api.store/user/api/scrap/list",
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
            if (error.response.status === 401) {
                setMsg(error.response.data);
                setGoLogin(true);
            } else {
                setMsg(error.response.data.message);
            }

            setPopup(true);
        }
    }

    useEffect(() => {
        getScrapData();
    }, []);

    return (
        <Container>
            <MainHeader />
            {popup ? (
                <PopUp onClose={setPopup} msg={msg} goLogin={goLogin} />
            ) : null}
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
