import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .scrapBox {
        width: 50vw;
        margin: 15vh 0;
    }

    .scrapTitle > p {
        font-size: 30px;
        font-weight: bold;
        margin: 0;

        color: #2d6dcc;
    }

    .scrapTitle > hr {
        margin-bottom: 5vh;

        height: 3px;
        border: 0;
        background-color: #2d6dcc;
    }
`;
