import React from 'react'
import Links from "./FooterComponents/Links"
import Dropdown from "./FooterComponents/DropdownComp"

function Footer(props) {
    return (
        <div className="footer">
            <Dropdown changeBackground={props.changeBackground} />
            <Links />
            <span id="copyright"><a href="https://finnevermann.netlify.com/">&copy;&nbsp;Finn Evermann</a></span>
        </div>

    )
}

export default Footer
