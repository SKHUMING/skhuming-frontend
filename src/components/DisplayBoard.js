import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import LogoImg from "../images/skhuming_logo_ai.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container } from "../styles/DisplayBoardStyled.js";

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
    }, []);

    return (
        <Container data-aos="fade-up" data-aos-duration="1000">
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
        </Container>
    );
}

export default DisplayBoard;
