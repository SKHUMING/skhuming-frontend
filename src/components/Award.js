import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import LogoImg from "../images/skhuming_logo_ai.png";
import { Link } from "react-router-dom";
import axios from "axios";

import { Container } from "../styles/MainPageStyled.js";

import tier_SS from "../images/tier_SS.png";
import tier_S from "../images/tier_S.png";
import tier_A from "../images/tier_A.png";
import tier_B from "../images/tier_B.png";
import tier_UN from "../images/tier_UN.png";

import AOS from "aos";
import "aos/dist/aos.css";

function Award({ department }) {
    useEffect(() => {
        AOS.init(); // AOS 초기화
    }, []);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    async function getData() {
        try {
            // console.log("department: " + department);
            const response = await axios.get(
                "https://api.skhuming-api.store/api/main",
                {
                    params: {
                        departmentNumber: department,
                    },
                }
            );
            // console.log(response.data);
            setData(response.data);
            if (data.length > 0) setLoading(true);
            setLoading(true);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getData();
    }, [department]);

    const rankImg = (rank) => {
        switch (data[rank].tier) {
            case "SS":
                return <img src={tier_SS} alt="tier"></img>;
            case "S":
                return <img src={tier_S} alt="tier"></img>;
            case "A":
                return <img src={tier_A} alt="tier"></img>;
            case "B":
                return <img src={tier_B} alt="tier"></img>;
            default:
                return <img src={tier_UN} alt="tier"></img>;
        }
    };

    return (
        <Container>
            <div className="awardBox">
                <div className="award">
                    <div
                        className="box_2nd"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                    >
                        <p>2nd</p>
                        <div className="profileBox_2nd">
                            <div className="tierImg_2nd">
                                {data[1] ? (
                                    rankImg(1)
                                ) : (
                                    <p className="noData">
                                        등록된 데이터가 없습니다..🥲
                                    </p>
                                )}
                            </div>
                            <div className="profile_2nd">
                                {data[1] ? (
                                    <p className="name_2nd">
                                        {data[1].nickname}
                                    </p>
                                ) : (
                                    ""
                                )}

                                {data[1] ? (
                                    <p className="score_2nd">
                                        {data[1].score}점
                                    </p>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    </div>
                    <div
                        className="box_1st"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                    >
                        <p>1st</p>
                        <div className="profileBox_1st">
                            <div className="tierImg_1st">
                                {data[0] ? (
                                    rankImg(0)
                                ) : (
                                    <p className="noData">
                                        등록된 데이터가 없습니다..🥲
                                    </p>
                                )}
                            </div>
                            <div className="profile_1st">
                                {data[0] ? (
                                    <p className="name_1st">
                                        {data[0].nickname}
                                    </p>
                                ) : (
                                    ""
                                )}

                                {data[0] ? (
                                    <p className="score_1st">
                                        {data[0].score}점
                                    </p>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    </div>
                    <div
                        className="box_3rd"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                    >
                        <p>3rd</p>
                        <div className="profileBox_3rd">
                            <div className="tierImg_3rd">
                                {data[2] ? (
                                    rankImg(2)
                                ) : (
                                    <p className="noData">
                                        등록된 데이터가 없습니다..🥲
                                    </p>
                                )}
                            </div>
                            <div className="profile_3rd">
                                {data[2] ? (
                                    <p className="name_3rd">
                                        {data[2].nickname}
                                    </p>
                                ) : (
                                    ""
                                )}

                                {data[2] ? (
                                    <p className="score_3rd">
                                        {data[2].score}점
                                    </p>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Award;
