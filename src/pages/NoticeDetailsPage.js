import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import MainHeader from "../components/MainHeader.js";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .noticeBox {
        width: 55vw;
        margin: 13vh 0;
        padding: 10vh 3vw;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        border-radius: 0.625rem;
        background: #fbfbfb;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
    }

    .noticeTitleBox {
        width: 50vw;
    }

    .noticeTitleBox_inner {
        display: flex;
        justify-content: space-between;
    }

    .noticeTitle {
        font-size: 23px;
        font-weight: bold;
        margin: 0;

        color: #2d6dcc;
    }

    .noticeScrap {
        margin: 0;
        font-size: 23px;
        opacity: 0.25;

        cursor: pointer;
    }

    .noticeTitleBox > hr {
        height: 3px;
        border: 0;
        background-color: #2d6dcc;
    }

    .noticeContentBox {
        width: 50vw;
        margin-top: 3vh;
    }

    .noticeContent {
        margin-top: 5vh;
    }

    .noticeMiniTitle {
        margin: 0;

        color: #204782;
        font-size: 1.15rem;
        font-weight: bold;
    }

    .noticeContentDetail {
        margin-top: 1vh;
        margin-bottom: 0;

        color: #204782;
        font-size: 1rem;
    }
`;

function NoticeDetailsPage() {
    const { noticeId } = useParams();

    return (
        <Container>
            <MainHeader />
            <div class="noticeBox">
                <div className="noticeTitleBox">
                    <div className="noticeTitleBox_inner">
                        <p className="noticeTitle">
                            {`[${noticeId}] 2023학년도 1학기 전공학습공동체 한솥밥
                            참여자 모집 안내`}
                        </p>
                        <p className="noticeScrap">📌</p>
                    </div>
                    <hr />
                </div>

                <div className="noticeContentBox">
                    <div className="noticeContent">
                        <p className="noticeMiniTitle">일정</p>
                        <p className="noticeContentDetail">
                            3/6(월) ~ 3/12(일)
                        </p>
                    </div>

                    <div className="noticeContent">
                        <p className="noticeMiniTitle">적립 마일리지 </p>
                        <p className="noticeContentDetail">100점</p>
                    </div>

                    <div className="noticeContent">
                        <p className="noticeMiniTitle">활동 내용</p>
                        <p className="noticeContentDetail">
                            1. 신청 방법 포털 내 비교과 프로그램 '2023학년도
                            1학기 뿌리튼튼' 신청(첨부의 신청서 양식 작성하여
                            제출)
                            <br />
                            2. 선발 기준 신청 인원이 30명을 초과하였을 경우,
                            교수학습개발센터 내부에서 논의를 거쳐 센터장의 최종
                            승인하에 참여 학생을 선발하며, 그 기준은 아래와 같음
                            가. 직전 학기 학사경고 대상자 우선 선발 나. 동일
                            조건인 경우, 신청 시 제출한 학습계획서의 작성
                            충실도에 따라 선발
                            <br />
                            3. 프로그램 진행 일정(추후 변경 가능) 신청 기간 :
                            3/6(월) ~ 3/12(일) 참여자 선발 공지 : 3/14(화)
                            <br />
                            4. 프로그램 이수 조건 오리엔테이션 및 1, 2차 학습
                            코칭 필수 참여, 불참 시 지원 불가 오리엔테이션
                            전까지 학습유형검사 완료 중간점검보고서,
                            자율상담확인서 제출 활동 종료 후 결과보고서 및
                            만족도 조사지 제출
                            <br />
                            5. 참여 혜택 이수 장학금 : 프로그램의 모든 일정에
                            성실히 참여하고, 학습 활동 내역을 결과보고서로
                            작성하여 제출한 학생에게 10만 원 지급
                            <br />
                            성취 장학금 : 이수 장학금 지급 조건을 충족하고 직전
                            재학 학기 성적 평균보다 이번 학기 성적 평균이 0.5점
                            이상 상승한 경우 5만원, 1.0점 이상 상승한 경우
                            15만원 지급
                            <br />
                            (단, 기존 성적에서 0.5 또는 1.0 이상 상승하여 평점
                            평균 최소 2.0 이상 달성 시)
                            <br />
                            성적 유지 장학금 : 2022학년도 2학기 뿌리튼튼
                            프로그램 성취 장학금 수혜자 중 2023학년도 1학기에
                            연속 등록하여 평점 평균을 B+(3.5점)이상 취득할 경우
                            장학금 20만원을 지급 (2023학년도 1학기 휴학생
                            미지급) 프로그램 이수자에게 스쿰 마일리지 50 포인트
                            지급
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default NoticeDetailsPage;
