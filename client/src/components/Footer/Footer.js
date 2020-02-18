import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <div>
      <nav className="appFooter navbar justify-content-center fixed-bottom ">
        <small>Copyright 2020© | <a href='https://github.com/verlitas/WebSpace' alt='repo' className="footerLink">Repo</a></small>
      </nav>
    </div>
  );
}

export default Footer;
