import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { FaInstagramSquare } from "react-icons/fa";
import "./Footer.css";

const GraceFooter = () => {
    return (
        <>
            <section className="gracefooter_section">
                <div className="container">
                    <div className="row" style={{ marginBottom: '60px' }}>
                        <div className="col-md-4">
                            <div className="grace_footer_product">
                                <h4>Product</h4>
                                <ul className="grace_footer_ul">
                                    <li><a href="/graceassociates">Grace Associate</a></li>
                                    <li><a href="/gracepaperbags">Grace Paper Bags</a></li>
                                    <li><a href="/eurocleantech">Euro Clean Tech</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="grace_footer_product">
                                <h4>Address</h4>
                                <p>D.No.9A, Ward No.9,
                                    Samiyar Medai,
                                    Irugur Via,
                                    Coimbatore –641 103.
                                    Tamil Nadu, India.</p>
                                <p><FiPhoneCall /> +91 96552 14330</p>
                                <p><FaEnvelopeOpenText /> graceassociates2009@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="grace_footer_social">
                                <a target="_blank" href="https://www.facebook.com/share/1DH3bsJokt/?mibextid=qi2Omg"><FaFacebookF className="facebook" /></a>
                                <a target="_blank" href="https://www.instagram.com/gracepaperbags?igsh=MXFjeXA2eXdiMW82aQ=="><FaInstagramSquare /></a>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ marginBottom: '45px', borderTop: '1px solid #6666', paddingTop: '10px' }}>
                        <div className="col-md-6">
                            <img src={"assets/logo-new.webp"} onClick={() => (window.location.href = "/")} alt="logo" style={{ width: '40%', cursor: 'pointer' }} />
                        </div>
                        <div className="col-md-6">
                            <div className="footer_copyright">
                                <p>
                                    © 2024 Grace Paper Bags
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default GraceFooter;