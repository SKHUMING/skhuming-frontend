import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import MainHeader from "../components/MainHeader.js";

import tier_SS from "../images/tier_SS.png";
import tier_S from "../images/tier_S.png";
import tier_A from "../images/tier_A.png";
import tier_B from "../images/tier_B.png";
import tier_UN from "../images/tier_UN.png";

import userIcon from "../images/check-profile.png";
import graduationIcon from "../images/graduation-hat.png";
import alertIcon from "../images/alert.png";
import informationIcon from "../images/chat-information.png";
import pencilIcon from "../images/pencil.png";

import axios from "axios";

import AOS from "aos";
import "aos/dist/aos.css";

import { Container } from "../styles/MainPageStyled.js";
import DisplayBoard from "../components/DisplayBoard.js";

function MainPage() {
    useEffect(() => {
        AOS.init(); // AOS 초기화
    }, []);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    async function getData() {
        try {
            const response = await axios.get(
                "https://api.skhuming-api.store/api/main"
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
    }, []);

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
            <MainHeader />

            <DisplayBoard />

            <div class="awardBox">
                {/* <div className="awardTitle">
                    <p>SKHUMING AWARD</p>
                    <hr />
                </div> */}

                <div className="award">
                    <div
                        className="box_2nd"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                    >
                        <p>🥈 2nd 🥈</p>
                        <div className="profileBox_2nd">
                            <div className="tierImg_2nd">
                                {loading ? rankImg(1) : "Loading..."}
                            </div>
                            <div className="profile_2nd">
                                {loading ? (
                                    <p className="name_2nd">
                                        {data[1].nickname}
                                    </p>
                                ) : (
                                    ""
                                )}

                                {loading ? (
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
                        <p>🥇 1st 🥇</p>
                        <div className="profileBox_1st">
                            <div className="tierImg_1st">
                                {loading ? rankImg(0) : "Loading..."}
                            </div>
                            <div className="profile_1st">
                                {loading ? (
                                    <p className="name_1st">
                                        {data[0].nickname}
                                    </p>
                                ) : (
                                    ""
                                )}

                                {loading ? (
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
                        <p>🥉 3rd 🥉</p>
                        <div className="profileBox_3rd">
                            <div className="tierImg_3rd">
                                {loading ? rankImg(2) : "Loading..."}
                            </div>
                            <div className="profile_3rd">
                                {loading ? (
                                    <p className="name_3rd">
                                        {data[2].nickname}
                                    </p>
                                ) : (
                                    ""
                                )}

                                {loading ? (
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

                {/* <div className="qnaBox">
                    <div className="qnaTitle">
                        <p>Q & A</p>
                        <hr />
                    </div>
                    <div className="qnaContent">
                        <p className="qna_mainTitle">
                            # 성공회대 비교과 마일리지 (SKHUM)
                        </p>
                        <p>
                            <p className="qna_title">
                                💙 SKHUM? 스쿰? 그게 뭔가요?{" "}
                            </p>
                            <p className="qna_content">
                                💭 스쿰은, 성공회대학교 비교과 마일리지인
                                SungKongHoe University Mileage의 약자로,
                                SKHUM(스쿰)이라 부릅니다.{" "}
                            </p>
                            <p className="qna_content">
                                💭 학부 재학생이 학기 중 교내에서 다양하게
                                진행되는 비교과 프로그램에 참가하여 마일리지를
                                적립하면, SKHUM 적립 기준을 바탕으로 장학혜택을
                                받을 수 있는 제도입니다.
                            </p>
                            <p className="qna_content">
                                💭 SKHUM-KING을 통해 다같이 재미있게 마일리지를
                                모아보아요!
                            </p>
                        </p>
                        <p>
                            <p className="qna_title">
                                💙 누구나 참여할 수 있나요?
                            </p>
                            <p className="qna_content">
                                💭 네, 성공회대 학부 재학생이면 누구나 참여할 수
                                있습니다. (휴학생, 수료생, 등록휴학생,
                                졸업유예자 제외)
                            </p>
                        </p>
                        <p>
                            <p className="qna_title">
                                💙 마일리지는 어떻게 적립하나요?
                            </p>
                            <p className="qna_content">
                                💭 학기 중 운영되는 교내 각 비교과 프로그램을
                                참여하고, 이수 완료 시 적립 됩니다. 각
                                프로그램별로 이수 완료시 적립되며, 학기 말에
                                비교과통합관리센터에서 최종 취합해요.
                            </p>
                            <p className="qna_content">
                                💭 마일리지는 학기별로 정산됩니다. 다음 학기로
                                이월되지 않아요! 학기 중 휴학하면 마일리지는
                                자동 소멸돼요!{" "}
                            </p>
                            <p className="qna_content">
                                💭 마일리지 적립현황은 학기 말에 종합정보시스템
                                SKHUM(비교과 마일리지)에 안내됩니다.
                            </p>
                            <p className="qna_content">
                                💭 방중 프로그램은 마일리지 적립이 불가합니다.
                            </p>
                        </p>
                        <p>
                            <p className="qna_title">💙 장학금을 준다던데...</p>
                            <p className="qna_content">
                                💭 SKHUM 적립기준을 충족한 학생들 중 다득점자
                                일부를 선발하여 지급합니다.
                            </p>
                            <p className="qna_content">
                                💭 학기 말에 지급됩니다. (1학기: 8월 중 / 2학기:
                                2월 중)
                            </p>
                            <p className="qna_content">
                                💭 장학금 예산안에서 다득점자 순으로 선발하기에,
                                학기당 수혜 인원은 변동될 수 있습니다.
                            </p>
                        </p>
                        <p>
                            <p className="qna_content">
                                💙 주의! <br />
                                프로그램 참여 중, 중도 포기하면 마일리지는
                                적립되지 않으니 끝까지 참여해주세요! 각
                                프로그램별 마일리지 점수는 상이하며, 학기 별로
                                변동될 수 있으니 공지를 확인해주세요! 장학금
                                혜택은 재학 중 2회로 제한되며, 연속학기 지급은
                                불가하답니다!
                            </p>
                        </p>
                    </div>
                </div> */}
                <div className="qnaBox">
                    <div className="qnaTitle">
                        <p>ABOUT</p>
                        <hr />
                    </div>
                    <div className="qnaContent">
                        <div
                            className="cardNews"
                            data-aos="fade-right"
                            data-aos-duration="1300"
                        >
                            <div className="cardNews_img">
                                <img alt="cardNews img" src={informationIcon} />
                            </div>
                            <div className="cardNews_content">
                                <p className="cardNews_title">
                                    스쿰(SKHUM)이 무엇인가요?
                                </p>
                                <p className="cardNews_subContent">
                                    <p>
                                        스쿰은, 성공회대학교 비교과 마일리지인
                                        SungKongHoe University Mileage의 약자로,
                                        SKHUM(스쿰)이라 부릅니다.
                                    </p>
                                    <p>
                                        학부 재학생이 학기 중 교내에서 다양하게
                                        진행되는 비교과 프로그램에 참가하여
                                        마일리지를 적립하면, SKHUM 적립 기준을
                                        바탕으로 장학혜택을 받을 수 있는
                                        제도입니다.
                                    </p>
                                    <p>
                                        skhuming을 통해 다같이 재미있게
                                        모아볼까요?
                                    </p>
                                </p>
                            </div>
                        </div>

                        <div
                            className="cardNews"
                            data-aos="fade-left"
                            data-aos-duration="1300"
                        >
                            <div className="cardNews_img">
                                <img alt="cardNews img" src={userIcon} />
                            </div>
                            <div className="cardNews_content">
                                <p className="cardNews_title">
                                    누구나 참여할 수 있나요?
                                </p>
                                <p className="cardNews_subContent">
                                    <p>
                                        네, 성공회대 재학생이면 누구나 참여할 수
                                        있어요!
                                    </p>
                                    <p>
                                        (휴학생, 수료생, 등록휴학생, 졸업유예자
                                        제외)
                                    </p>
                                </p>
                            </div>
                        </div>

                        <div
                            className="cardNews"
                            data-aos="fade-right"
                            data-aos-duration="1300"
                        >
                            <div className="cardNews_img">
                                <img alt="cardNews img" src={pencilIcon} />
                            </div>
                            <div className="cardNews_content">
                                <p className="cardNews_title">
                                    마일리지는 어떻게 적립하나요?
                                </p>
                                <p className="cardNews_subContent">
                                    <p>
                                        학기 중 운영되는 교내 각 비교과
                                        프로그램을 참여하고, 이수 완료 시 적립
                                        됩니다. 각 프로그램별로 이수 완료시
                                        적립되며, 학기 말에
                                        비교과통합관리센터에서 최종 취합해요.
                                    </p>
                                    <p>
                                        마일리지는 학기별로 정산됩니다. 다음
                                        학기로 이월되지 않아요! 학기 중 휴학하면
                                        마일리지는 자동 소멸돼요!
                                    </p>
                                    <p>
                                        마일리지 적립현황은 학기 말에
                                        종합정보시스템 SKHUM(비교과 마일리지)에
                                        안내됩니다.
                                    </p>
                                    <p>
                                        방중 프로그램은 마일리지 적립이
                                        불가합니다.
                                    </p>
                                </p>
                            </div>
                        </div>

                        <div
                            className="cardNews"
                            data-aos="fade-left"
                            data-aos-duration="1300"
                        >
                            <div className="cardNews_img">
                                <img alt="cardNews img" src={graduationIcon} />
                            </div>
                            <div className="cardNews_content">
                                <p className="cardNews_title">
                                    장학금을 준다던데...
                                </p>
                                <p className="cardNews_subContent">
                                    <p>
                                        SKHUM 적립기준을 충족한 학생들 중
                                        다득점자 일부를 선발하여 지급합니다. 💭
                                        학기 말에 지급됩니다.
                                    </p>
                                    <p>(1학기: 8월 중 / 2학기: 2월 중)</p>
                                    <p>
                                        장학금 예산안에서 다득점자 순으로
                                        선발하기에, 학기당 수혜 인원은 변동될 수
                                        있습니다.
                                    </p>
                                </p>
                            </div>
                        </div>

                        <div
                            className="cardNews"
                            data-aos="fade-right"
                            data-aos-duration="1300"
                        >
                            <div className="cardNews_img">
                                <img alt="cardNews img" src={alertIcon} />
                            </div>
                            <div className="cardNews_content">
                                <p className="cardNews_title">주의!</p>
                                <p className="cardNews_subContent">
                                    <p>
                                        프로그램 참여 중, 중도 포기하면
                                        마일리지는 적립되지 않으니 끝까지
                                        참여해주세요!
                                    </p>
                                    <p>
                                        각 프로그램별 마일리지 점수는 상이하며,
                                        학기 별로 변동될 수 있으니 공지를
                                        확인해주세요!
                                    </p>
                                    <p>
                                        장학금 혜택은 재학 중 2회로 제한되며,
                                        연속학기 지급은 불가하답니다!
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default MainPage;
