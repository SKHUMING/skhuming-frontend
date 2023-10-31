import React, { useState, useEffect } from "react";
import axios from "axios";
import rankImg from "./RankImg";
import { Container } from "../styles/MainPageStyled.js";
import { Desktop, Mobile } from "../components/ReactResponse.js";
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
            const response = await axios.get(
                "https://api.skhuming-api.store/api/main",
                {
                    params: {
                        departmentNumber: department,
                    },
                }
            );
            setData(response.data);
            if (data.length > 0) setLoading(true);
            setLoading(true);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [department]);

    return (
        <>
            <Desktop>
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
                                            rankImg(data[1].tier)
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
                                            rankImg(data[0].tier)
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
                                            rankImg(data[2].tier)
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
            </Desktop>
            <Mobile>
                <Container>
                    <div className="m_awardBox">
                        <div className="m_award">
                            <div
                                className="m_box_1st"
                                data-aos="fade-up"
                                data-aos-duration="1500"
                            >
                                <p>1st</p>
                                <div className="m_profileBox_1st">
                                    <div className="m_tierImg_1st">
                                        {data[0] ? (
                                            rankImg(data[0].tier)
                                        ) : (
                                            <p className="m_noData">
                                                등록된 데이터가 없습니다..🥲
                                            </p>
                                        )}
                                    </div>
                                    <div className="m_profile_1st">
                                        {data[0] ? (
                                            <p className="m_name_1st">
                                                {data[0].nickname}
                                            </p>
                                        ) : (
                                            ""
                                        )}

                                        {data[0] ? (
                                            <p className="m_score_1st">
                                                {data[0].score}점
                                            </p>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div
                                className="m_box_2nd"
                                data-aos="fade-up"
                                data-aos-duration="1500"
                            >
                                <p>2nd</p>
                                <div className="m_profileBox_2nd">
                                    <div className="m_tierImg_2nd">
                                        {data[1] ? (
                                            rankImg(data[1].tier)
                                        ) : (
                                            <p className="m_noData">
                                                등록된 데이터가 없습니다..🥲
                                            </p>
                                        )}
                                    </div>
                                    <div className="m_profile_2nd">
                                        {data[1] ? (
                                            <p className="m_name_2nd">
                                                {data[1].nickname}
                                            </p>
                                        ) : (
                                            ""
                                        )}

                                        {data[1] ? (
                                            <p className="m_score_2nd">
                                                {data[1].score}점
                                            </p>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div
                                className="m_box_3rd"
                                data-aos="fade-up"
                                data-aos-duration="1500"
                            >
                                <p>3rd</p>
                                <div className="m_profileBox_3rd">
                                    <div className="m_tierImg_3rd">
                                        {data[2] ? (
                                            rankImg(data[2].tier)
                                        ) : (
                                            <p className="m_noData">
                                                등록된 데이터가 없습니다..🥲
                                            </p>
                                        )}
                                    </div>
                                    <div className="m_profile_3rd">
                                        {data[2] ? (
                                            <p className="m_name_3rd">
                                                {data[2].nickname}
                                            </p>
                                        ) : (
                                            ""
                                        )}

                                        {data[2] ? (
                                            <p className="m_score_3rd">
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
            </Mobile>
        </>
    );
}

export default Award;
