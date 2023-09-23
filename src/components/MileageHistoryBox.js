import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import PopUp from "../components/PopUp.js";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { Container } from "../styles/MileageHistoryBoxStyled.js";

function MileageHistoryBox({ title, mileageId, mileageScore, systemDate }) {
    const [popup, setPopup] = useState(false);
    const [msg, setMsg] = useState("");

    async function delMileage() {
        const userConfirmed = window.confirm("정말로 삭제하시겠습니까?");
        if (userConfirmed) {
            try {
                await axios.post(
                    "https://api.skhuming-api.store/api/user/mileage/history/cancel",
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
