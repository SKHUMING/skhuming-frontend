import React from "react";
import { Container } from "../styles/FooterStyled.js";

function Footer() {
    return (
        <Container>
            <div className="footer">
                <p className="footer__name">SKHUMING, 스쿠밍</p>
                <hr />
                <p className="footer__content">
                    <span>Contact</span> | skhuskhuming@gmail.com
                </p>
                <p className="footer__copyright">
                    Copyright © 2023 SKHUMING. All rights reserved.
                </p>
            </div>
        </Container>
    );
}

export default Footer;
