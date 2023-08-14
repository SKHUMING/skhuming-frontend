import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MainHeader from "../components/MainHeader.js";
import axios from "axios";

import tier_SS from "../images/tier_SS.png";
import tier_S from "../images/tier_S.png";
import tier_A from "../images/tier_A.png";
import tier_B from "../images/tier_B.png";
import tier_Un from "../images/tier_UN.png";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .mileageBox {
        width: 50vw;
        margin: 10vh 0;
    }

    .mileageTitle > p {
        font-size: 30px;
        font-weight: bold;
        margin: 0;

        color: #2d6dcc;
    }

    .mileageTitle > hr {
        margin-bottom: 4vh;

        height: 3px;
        border: 0;
        background-color: #2d6dcc;
    }

    .userRankingBox {
        height: 21vh;
        margin-bottom: 4vh;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .userTierImg {
        width: 14vw;
        height: inherit;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .userTierImg > img {
        width: 8vw;
    }

    .userRanking {
        width: 28vw;
        height: inherit;
        padding: 0 4vw;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        border-radius: 0.625rem;
        background: #fbfbfb;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
    }

    .userRanking > p {
        margin: 0;

        color: #2d6dcc;
        font-size: 1.3rem;
        font-weight: bold;
    }

    .ranking {
        width: inherit;

        display: flex;
        justify-content: space-between;
    }

    .ranking > p {
        margin: 0;
        margin-top: 3vh;

        color: #204782;
        font-size: 1.1rem;
    }

    .addMileageBox {
        width: inherit;
        height: 22vh;
        padding: 0 4vw;

        display: flex;
        flex-direction: column;
        justify-content: center;

        border-radius: 0.625rem;
        background: #fbfbfb;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
    }

    .addMileageBox > p {
        margin: 0;
        margin-bottom: 3vh;

        color: #2d6dcc;
        font-size: 1.3rem;
        font-weight: bold;
    }

    .addMileage > form {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .skhumList {
        width: 44vw;
        padding: 1vh 1vw;

        border: none;
        border-radius: 0.85rem;
        background: #fff;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);

        font-size: 1rem;
    }

    .skhumListBtn {
        width: 3vw;
        padding: 1vh;
        margin-left: 2vw;

        border: none;
        border-radius: 0.75rem;
        background: #3a73c9;

        color: #fff;
        font-size: 0.8rem;

        cursor: pointer;
    }
`;

function MileagePage() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState([]);

    async function getUserData() {
        const memberId = window.localStorage.getItem("memberId");
        try {
            const response = await axios.get(
                "http://15.164.131.248:8080/user/api/mileage/get",
                {
                    params: { memberId: memberId },
                    headers: {
                        Authorization: window.localStorage.getItem("token"),
                    },
                }
            );
            setUserData(response.data);
            setLoading(true);
        } catch (error) {
            console.error(error);
            window.confirm(error.response.data);
            navigate("/");
        }
    }

    const [addMileage, setAddMileage] = useState("");
    // 후에 마일리지 점수 리스트 받아서 출력하기
    const mileageList = [
        { title: "활동을 완료한 비교과 프로그램을 선택해주세요.", score: 0 },
        { title: "재학생 핵심역량 진단연구(S-ECA)", score: 50 },
        { title: "전국단위 학생조사(K-NSSE)", score: 50 },
        { title: "대학생 핵심역량 진단평가(K-CESA)", score: 70 },
        { title: "뿌리튼튼", score: 50 },
        { title: "학습법 워크숍", score: 10 },
        { title: "학습경험 에세이 콘테스트", score: 20 },
        { title: "창업역량강화특강", score: 10 },
        { title: "스타트업 페스티벌", score: 10 },
        { title: "창업 동아리", score: 80 },
        { title: "교과목연계 창업강좌(창업과 지식재산)", score: 20 },
        { title: "교과목연계 창업강좌(스타트업 전략수립)", score: 20 },
        { title: "2학기 취업역량강화특강", score: 10 },
        { title: "진로취업페스티벌", score: 10 },
        { title: "포트폴리오(입사서류) 컨테스트", score: 20 },
        { title: "2학기 온라인 직무컨퍼런스", score: 20 },
        { title: "2학기 온라인 직무캠프", score: 60 },
        { title: "토닥토닥 취업멘토링", score: 20 },
        { title: "교과목연계 취업강좌(진로탐색과 자기계발)", score: 20 },
        { title: "교과목연계 취업강좌(취업전략과 사회진출)", score: 20 },
        { title: "모의토익(600점 이상 취득 시)", score: 20 },
        { title: "심리검사 워크숍(MBTI)", score: 10 },
        { title: "심리건강 페스티벌", score: 10 },
        { title: "2022 북적북적 시즌2(제12회 저자와의 대화)", score: 20 },
        { title: "제24회 성공회대학교 글쓰기 대회", score: 20 },
        { title: "집단상담", score: 30 },
        { title: "워크숍프로그램", score: 20 },
        { title: "IT&미디어콘텐츠 경진대회", score: 20 },
        { title: "제28회 영어스피치페스티벌", score: 20 },
        { title: "제25회 일본어스피치콘테스트", score: 20 },
        { title: "제10회 중국어스피치대회", score: 20 },
    ];

    const handleMileage = (event) => {
        setAddMileage(event.currentTarget.value);
    };

    const submitMileage = (event) => {
        event.preventDefault();
        postMileage();
    };

    // 마일리지 추가 요청
    async function postMileage() {
        try {
            const response = await axios.post(
                "http://15.164.131.248:8080/user/api/mileage/post",
                {
                    memberId: window.localStorage.getItem("memberId"),
                    score: addMileage,
                },
                {
                    headers: {
                        Authorization: window.localStorage.getItem("token"),
                    },
                }
            );
            console.log(response);
            window.confirm("🎉 스쿰 마일리지를 추가하였습니다!");
            window.location.reload();
        } catch (error) {
            console.error(error.response.data);
        }
    }

    useEffect(() => {
        getUserData();
    }, []);

    // 티어 사진
    function rankImg(tier) {
        switch (tier) {
            case "SS":
                return <img src={tier_SS} alt="tier"></img>;
            case "S":
                return <img src={tier_S} alt="tier"></img>;
            case "A":
                return <img src={tier_A} alt="tier"></img>;
            case "B":
                return <img src={tier_B} alt="tier"></img>;
            default:
                return <img src={tier_Un} alt="tier"></img>;
        }
    }

    return (
        <Container>
            <MainHeader />
            <div className="mileageBox">
                <div className="mileageTitle">
                    <p>MY MILEAGE</p>
                    <hr />
                </div>

                <div className="userMileageBox">
                    <div className="userRankingBox">
                        <div className="userTierImg">
                            {loading ? rankImg(userData.tier) : ""}
                        </div>
                        <div className="userRanking">
                            <p>MY RANKING</p>
                            <div className="ranking">
                                <p>{loading ? userData.nickname : ""}</p>
                                <p>{loading ? userData.score : ""}점</p>
                            </div>
                        </div>
                    </div>

                    <div className="addMileageBox">
                        <p>ADD MILEAGE</p>

                        <div className="addMileage">
                            <form>
                                <select
                                    className="skhumList"
                                    name="skhumList"
                                    onChange={handleMileage}
                                    value={addMileage}
                                >
                                    {mileageList.map((item) => (
                                        <option
                                            key={item.memberId}
                                            value={item.score}
                                        >
                                            {item.score === 0
                                                ? ""
                                                : `[${item.score}점]`}
                                            {item.title}
                                        </option>
                                    ))}
                                </select>
                                <button
                                    type="submit"
                                    className="skhumListBtn"
                                    onClick={submitMileage}
                                >
                                    추가
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default MileagePage;
