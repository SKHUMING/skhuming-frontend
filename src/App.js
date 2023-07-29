import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.js";
import MainPage from "./pages/MainPage.js";
import MileagePage from "./pages/MileagePage.js";
import MyPage from "./pages/MyPage.js";
import NoticePage from "./pages/NoticePage.js";
import NoticeDetailsPage from "./pages/NoticeDetailsPage.js";
import RankingPage from "./pages/RankingPage.js";
import ScrapPage from "./pages/ScrapPage.js";
import SigninPage from "./pages/SigninPage.js";

// import styled from "styled-components";

function App() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/mileage" element={<MileagePage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/notice" element={<NoticePage />} />
            {/* <Route path="/noticeDetail" element={<NoticeDetailsPage />} /> */}
            <Route
                path="/notice/detail/:noticeId"
                element={<NoticeDetailsPage />}
            />
            <Route path="/ranking" element={<RankingPage />} />
            <Route path="/scrap" element={<ScrapPage />} />
        </Routes>
    );
}
export default App;
