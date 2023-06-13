import React from "react";
import { footerSection } from "../../utils/portfolio";
import './Footer.scss';

const Footer  = () => {
    return (
      <div id="footer " className="footer-section ">
        <div className="desc">{footerSection.greeting}</div>
      </div>
    );
}

export default Footer;