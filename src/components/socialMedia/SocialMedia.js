import React from "react";
import "./SocialMedia.scss";
import { socialMediaLinks } from "../../utils/portfolio";

export default function socialMedia() {

  return (
    <div className="social-media-div">
      {socialMediaLinks.apps.map((app) => {
        return <a
        href={app.link}
        className={"icon-button " + app.id}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className={app.faIcon}></i>
        <span></span>
      </a>
      })}
    </div>
  );
}
