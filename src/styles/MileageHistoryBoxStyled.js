import styled from "styled-components";

export const Container = styled.div`
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
