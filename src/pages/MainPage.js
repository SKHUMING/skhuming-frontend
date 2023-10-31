import React, { useEffect, useState } from "react";
import { Desktop, Mobile } from "../components/ReactResponse.js";
import MainHeader from "../components/MainHeader.js";
import AllDepartmentAward from "../components/AllDepartmentAward.js";
import Award from "../components/Award.js";
import Footer from "../components/Footer.js";
import About from "../components/About.js";

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
        <>
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

                        <About />

                        <Footer />
                    </div>
                </Container>
            </Desktop>
            <Mobile>
                <Container>
                    <MainHeader />

                    <DisplayBoard />

                    <div class="m_awardBox">
                        <div className="m_awardTitle">
                            <div className="m_awardTitleBox">
                                <p>SKHUMING AWARD</p>
                                <form className="m_selectAward">
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

                        <About />

                        <Footer />
                    </div>
                </Container>
            </Mobile>
        </>
    );
}

export default MainPage;
