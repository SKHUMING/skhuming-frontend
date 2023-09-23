import styled from "styled-components";

export const Container = styled.div`
    // footer
    .footer {
        width: 60vw;
        margin-top: 10vh;
        padding: 4vh 20vw;
        position: absolute;
        left: 0;

        background-color: #efefef;
        color: #9e9e9e;

        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
    }

    p {
        margin: 0;
    }

    .footer__name {
        /* margin: 0; */
        font-size: 17px;
        color: #898989;
        font-weight: bold;
    }

    .footer__content > span {
        margin: 0;
        color: #898989;
        font-weight: bold;
    }

    .footer > hr {
        /* margin: 0; */
        width: 60vw;
    }

    .faq {
        color: #898989;
        text-decoration: none;
    }
`;
