import React from "react";
import "./Header.scss";
import { greeting } from "../../utils/portfolio";

function Header() {

  const logo = (
    <a href="/" className="logo">
      <span className="grey-color"> &lt;</span>
      <span className="logo-name">{greeting.username}</span>
      <span className="grey-color">/&gt;</span>
    </a>
  );

  return (
    <>

      <div className={"header"}>
        {logo}
        {/* <input className="menu-btn" type="checkbox" id="menu-btn" /> */}
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={"navicon"}></span>
        </label>
        <ul className={"menu"}>
          <li>
            <a href="#about">About</a>
          </li>
          <li></li>
          <li>
            <a href="#experience">Work Experiences</a>
          </li>
          <li>
            <a href="#blogs">Blogs</a>
          </li>
          <li>
            <a href={greeting.resumeLink} target="_blank" rel="noreferrer">
              Downlaod My CV
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Header;
