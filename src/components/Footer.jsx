import React from "react";
import Links from "./FooterComponents/Links";
import Searchbar from "./FooterComponents/Searchbar";

function Footer(props) {
  return (
    <div className="footer">
      <Searchbar />
      <Links />
    </div>
  );
}

export default Footer;
