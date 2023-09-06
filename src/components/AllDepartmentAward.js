import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import LogoImg from "../images/skhuming_logo_ai.png";
import { Link } from "react-router-dom";

import { Container } from "../styles/AllDepartmentAwardStyled";

import AOS from "aos";
import "aos/dist/aos.css";

function AllDepartmentAward() {
    useEffect(() => {
        AOS.init(); // AOS 초기화
    }, []);

    return (
        <Container>
            <div
                className="rankingBox"
                data-aos="fade-up"
                data-aos-duration="1500"
            >
                <p className="ranking rank_1st effect-shine">1st</p>
                <p className="department">IT융합자율학부</p>
                <p className="total">1000점</p>
            </div>
            <div
                className="rankingBox"
                data-aos="fade-up"
                data-aos-duration="1500"
            >
                <p className="ranking rank_2nd effect-shine">2nd</p>
                <p className="department">미디어융합자율학부</p>
                <p className="total">1000점</p>
            </div>
            <div
                className="rankingBox"
                data-aos="fade-up"
                data-aos-duration="1500"
            >
                <p className="ranking rank_3rd effect-shine">3rd</p>
                <p className="department">사회융합자율학부</p>
                <p className="total">1000점</p>
            </div>
            <div
                className="rankingBox"
                data-aos="fade-up"
                data-aos-duration="1500"
            >
                <p className="ranking rank_4th effect-shine">4th</p>
                <p className="department">인문융합자율학부</p>
                <p className="total">1000점</p>
            </div>
        </Container>
    );
}

export default AllDepartmentAward;
