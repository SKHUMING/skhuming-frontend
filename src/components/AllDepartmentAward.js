import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import LogoImg from "../images/skhuming_logo_ai.png";
import { Link } from "react-router-dom";
import axios from "axios";

import { Container } from "../styles/AllDepartmentAwardStyled";

import AOS from "aos";
import "aos/dist/aos.css";

function AllDepartmentAward() {
    useEffect(() => {
        AOS.init(); // AOS 초기화
    }, []);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    async function getData() {
        try {
            // console.log("department: " + department);
            const response = await axios.get(
                "https://api.skhuming-api.store/api/main/department"
            );
            console.log(response.data);
            setData(response.data);
            if (data.length > 0) setLoading(true);
            setLoading(true);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <Container>
            <div
                className="rankingBox"
                data-aos="fade-up"
                data-aos-duration="1500"
            >
                <p className="ranking rank_1st effect-shine">1st</p>
                <p className="department">
                    {loading ? data[0].department : "loading..."}
                </p>
                <p className="total">
                    {loading ? data[0].score + "점" : "loading..."}
                </p>
            </div>
            <div
                className="rankingBox"
                data-aos="fade-up"
                data-aos-duration="1500"
            >
                <p className="ranking rank_2nd effect-shine">2nd</p>
                <p className="department">
                    {loading ? data[1].department : "loading..."}
                </p>
                <p className="total">
                    {loading ? data[1].score + "점" : "loading..."}
                </p>
            </div>
            <div
                className="rankingBox"
                data-aos="fade-up"
                data-aos-duration="1500"
            >
                <p className="ranking rank_3rd effect-shine">3rd</p>
                <p className="department">
                    {loading ? data[2].department : "loading..."}
                </p>
                <p className="total">
                    {loading ? data[2].score + "점" : "loading..."}
                </p>
            </div>
            <div
                className="rankingBox"
                data-aos="fade-up"
                data-aos-duration="1500"
            >
                <p className="ranking rank_4th effect-shine">4th</p>
                <p className="department">
                    {loading ? data[3].department : "loading..."}
                </p>
                <p className="total">
                    {loading ? data[3].score + "점" : "loading..."}
                </p>
            </div>
        </Container>
    );
}

export default AllDepartmentAward;
