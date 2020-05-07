import React from "react";
import Links from "./FooterComponents/Links";
import Dropdown from "./FooterComponents/DropdownComp";
import Searchbar from "./FooterComponents/Searchbar";

function Footer(props) {
  return (
    <div className="footer">
      <Searchbar />
      <Dropdown changeBackground={props.changeBackground} />
      <Links />
      <span id="copyright">
        <a href="https://finnevermann.de/">von&nbsp;Finn Evermann</a>
      </span>
    </div>
  );
}

export default Footer;
