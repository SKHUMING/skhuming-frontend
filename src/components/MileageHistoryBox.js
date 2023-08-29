import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import PopUp from "../components/PopUp.js";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
    .historyBox {
        padding: 2vh 2vw;
        margin-bottom: 3vh;

        display: flex;
        justify-content: space-between;
        align-items: center;

        border-radius: 0.625rem;
        background: #fbfbfb;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
    }

    .history {
        width: 90%;

        display: flex;
        justify-content: space-between;
        align-items: center;

        font-size: 1rem;
        color: #204782;
    }

    .history > p {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .historyTitle {
        width: 60%;
        height: 1rem;
    }

    .historyDate {
        width: 13%;
    }

    .historyScore {
        width: 18%;
    }

    .delMileage {
        width: 25px;
        height: 25px;
        margin-left: 2vw;

        display: flex;
        justify-content: center;
        align-items: center;

        color: #fff;
        font-size: 0.9rem;
        /* background-color: #2d6dcc; */
        border-radius: 50%;

        cursor: pointer;
    }
`;

function MileageHistoryBox({ title, mileageId, mileageScore, systemDate }) {
    const [popup, setPopup] = useState(false);
    const [msg, setMsg] = useState("");

    async function delMileage() {
        try {
            await axios.post(
                "https://api.skhuming-api.store/user/api/mileage/history/cancel",
                null,
                {
                    params: {
                        memberId: window.localStorage.getItem("memberId"),
                        mileageId: mileageId,
                    },
                    headers: {
                        Authorization: window.localStorage.getItem("token"),
                    },
                }
            );
            setMsg("👋🏻 마일리지 내역을 삭제하였습니다.");
            setPopup(true);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Container>
            {popup ? <PopUp onClose={setPopup} msg={msg} /> : null}

            <div className="historyBox">
                <div className="history">
                    <p className="historyTitle">{title}</p>
                    <p className="historyDate">{mileageScore}점</p>
                    <p className="historyScore">{systemDate}</p>
                </div>
                <div className="delMileage" onClick={delMileage}>
                    <FontAwesomeIcon
                        icon={faTrash}
                        style={{ color: "#204782" }}
                    />
                </div>
            </div>
        </Container>
    );
}

export default MileageHistoryBox;
