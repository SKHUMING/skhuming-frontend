import React from "react";
import { Desktop, Mobile } from "../components/ReactResponse.js";
import { Container } from "../styles/FooterStyled.js";

function Footer() {
    return (
        <>
            <Desktop>
                <Container>
                    <div className="footer">
                        <p className="footer__name">SKHUMING, 스쿠밍</p>
                        <hr />
                        <p className="footer__content">
                            <span>Contact</span> | skhuskhuming@gmail.com
                        </p>
                        <p className="footer__content">
                            <span>FAQ</span> |{" "}
                            <a
                                href="https://spice-eocursor-478.notion.site/FAQ-cd239246f7124a28a16ddcc8c6e647f6?pvs=4"
                                className="faq"
                            >
                                클릭하여 Notion에서 확인하기
                            </a>
                        </p>
                        <p className="footer__copyright">
                            Copyright © 2023 SKHUMING. All rights reserved.
                        </p>
                    </div>
                </Container>
            </Desktop>
            <Mobile>
                <Container>
                    <div className="m_footer">
                        <p className="m_footer__name">SKHUMING, 스쿠밍</p>
                        <hr />
                        <p className="m_footer__content">
                            <span>Contact</span> | skhuskhuming@gmail.com
                        </p>
                        <p className="m_footer__content">
                            <span>FAQ</span> |{" "}
                            <a
                                href="https://spice-eocursor-478.notion.site/FAQ-cd239246f7124a28a16ddcc8c6e647f6?pvs=4"
                                className="faq"
                            >
                                클릭하여 Notion에서 확인하기
                            </a>
                        </p>
                        <p className="m_footer__copyright">
                            Copyright © 2023 SKHUMING. All rights reserved.
                        </p>
                    </div>
                </Container>
            </Mobile>
        </>
    );
}

export default Footer;
