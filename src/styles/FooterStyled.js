import styled from "styled-components";

export const Container = styled.div`
    // footer
    .footer {
        width: 60vw;
        padding: 4vh 20vw;
        position: absolute;
        left: 0;

        background-color: #efefef;
        color: #9e9e9e;

        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
    }

    .footer__name {
        font-size: 17px;
        color: #898989;
        font-weight: bold;
    }

    .footer__content > span {
        color: #898989;
        font-weight: bold;
    }

    .footer > hr {
        width: 60vw;
    }
`;
