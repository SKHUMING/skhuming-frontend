import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Desktop } from "../components/ReactResponse.js";
import MainHeader from "../components/MainHeader.js";
import AllDepartmentAward from "../components/AllDepartmentAward.js";
import Award from "../components/Award.js";
import Footer from "../components/Footer.js";

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

    // 랭킹 선택
    const [award, setAward] = useState([
        { departmentId: 0, department: "재학생 전체" },
        { departmentId: 1, department: "인문융합자율학부" },
        { departmentId: 2, department: "사회융합자율학부" },
        { departmentId: 3, department: "미디어콘텐츠융합자율학부" },
        { departmentId: 4, department: "IT융합자율학부" },
        { departmentId: 5, department: "학부" },
    ]);
    // 선택한 학부 (select box)
    const [selectAward, setSelectAward] = useState(0);

    const handleAward = (event) => {
        setSelectAward(event.currentTarget.value);
    };

    return (
        <Desktop>
            <Container>
                <MainHeader />

                <DisplayBoard />

                <div class="awardBox">
                    <div className="awardTitle">
                        <div className="awardTitleBox">
                            <p>SKHUMING AWARD</p>
                            <form className="selectAward">
                                <select
                                    onChange={handleAward}
                                    value={selectAward}
                                >
                                    {award.map((item) => (
                                        <option
                                            key={item.departmentId}
                                            value={item.departmentId}
                                        >
                                            {item.department}
                                        </option>
                                    ))}
                                </select>
                            </form>
                        </div>
                        <hr />
                    </div>

                    {selectAward < 5 ? (
                        <Award department={selectAward} />
                    ) : (
                        <AllDepartmentAward />
                    )}

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
                                    <img
                                        alt="cardNews img"
                                        src={informationIcon}
                                    />
                                </div>
                                <div className="cardNews_content">
                                    <p className="cardNews_title">
                                        스쿰(SKHUM)이 무엇인가요?
                                    </p>
                                    <p className="cardNews_subContent">
                                        <p>
                                            스쿰은, 성공회대학교 비교과
                                            마일리지인 SungKongHoe University
                                            Mileage의 약자로, SKHUM(스쿰)이라
                                            부릅니다.
                                        </p>
                                        <p>
                                            학부 재학생이 학기 중 교내에서
                                            다양하게 진행되는 비교과 프로그램에
                                            참가하여 마일리지를 적립하면, SKHUM
                                            적립 기준을 바탕으로 장학혜택을 받을
                                            수 있는 제도입니다.
                                        </p>
                                        <p
                                            style={{
                                                textDecoration: "underline",
                                            }}
                                        >
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
                                            네, 성공회대 재학생이면 누구나
                                            참여할 수 있어요!
                                        </p>
                                        <p>
                                            (휴학생, 수료생, 등록휴학생,
                                            졸업유예자 제외)
                                        </p>
                                        <p
                                            style={{
                                                textDecoration: "underline",
                                            }}
                                        >
                                            스쿠밍도 스쿰 마일리지 랭킹을
                                            제공하는 서비스인만큼, 재학생 모두가
                                            참여할 수 있습니다!
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
                                            프로그램을 참여하고, 이수 완료 시
                                            적립 됩니다.정확한 점수는 학기 말에
                                            종합정보시스템에서 확인 가능합니다.
                                        </p>
                                        <p
                                            style={{
                                                textDecoration: "underline",
                                            }}
                                        >
                                            스쿠밍에서는 학기 중 자신이
                                            얼마만큼의 마일리지를 모았는지 직접
                                            체크하며 재학생 랭킹에 참여합니다.
                                        </p>
                                        <p
                                            style={{
                                                textDecoration: "underline",
                                            }}
                                        >
                                            마이페이지의 마일리지 페이지에서
                                            활동을 완료한 프로그램을 체크하고,
                                            마일리지를 적립받아보세요!
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
                                    <img
                                        alt="cardNews img"
                                        src={graduationIcon}
                                    />
                                </div>
                                <div className="cardNews_content">
                                    <p className="cardNews_title">
                                        장학금을 준다던데...
                                    </p>
                                    <p className="cardNews_subContent">
                                        <p>
                                            SKHUM 적립기준을 충족한 학생들 중
                                            다득점자 일부를 선발하여 지급합니다.
                                            학기 말에 지급됩니다.
                                        </p>
                                        <p>(1학기: 8월 중 / 2학기: 2월 중)</p>
                                        <p>
                                            장학금 예산안에서 다득점자 순으로
                                            선발하기에, 학기당 수혜 인원은
                                            변동될 수 있습니다.
                                        </p>
                                        <p
                                            style={{
                                                textDecoration: "underline",
                                            }}
                                        >
                                            따라서 스쿠밍의 랭킹 순위는 재미로만
                                            즐겨주세요!
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
                                            각 프로그램별 마일리지 점수는
                                            상이하며, 학기 별로 변동될 수 있으니
                                            공지를 확인해주세요!
                                        </p>
                                        <p>
                                            장학금 혜택은 재학 중 2회로
                                            제한되며, 연속학기 지급은
                                            불가하답니다!
                                        </p>
                                        <p
                                            style={{
                                                textDecoration: "underline",
                                            }}
                                        >
                                            스쿰 마일리지에 대한 자세한 공지는
                                            공지페이지에서, 스쿠밍에 대한
                                            사용법은 하단의 FQA를 참고해주세요!
                                        </p>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>
            </Container>
        </Desktop>
    );
}

export default MainPage;
