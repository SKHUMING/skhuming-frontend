import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "../styles/DisplayBoardStyled.js";
import { Desktop, Mobile } from "../components/ReactResponse.js";
import Marquee from "react-marquee-slider";

import AOS from "aos";
import "aos/dist/aos.css";

function DisplayBoard() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    async function getData() {
        try {
            const response = await axios.get(
                "https://api.skhuming-api.store/api/display-board"
            );
            console.log(response.data);
            setNews(response.data);
            if (news.length > 0) setLoading(true);
            setLoading(true);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getData();
        AOS.init(); // AOS 초기화
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Desktop>
                <Container>
                    <div
                        className="boardContainer"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <div className="board">
                            <Marquee velocity={35}>
                                {news.map((text, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        {text}
                                    </div>
                                ))}
                            </Marquee>
                        </div>
                    </div>
                </Container>
            </Desktop>
            <Mobile>
                <Container>
                    <div
                        className="m_boardContainer"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <div className="m_board">
                            <Marquee velocity={35}>
                                {news.map((text, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        {text}
                                    </div>
                                ))}
                            </Marquee>
                        </div>
                    </div>
                </Container>
            </Mobile>
        </>
    );
}

export default DisplayBoard;
