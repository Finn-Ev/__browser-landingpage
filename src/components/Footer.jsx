import React from 'react'
import Links from "./FooterComponents/Links"
import Dropdown from "./FooterComponents/DropdownComp"

function Footer(props) {
    return (
        <div className="footer">
            <Dropdown changeBackground={props.changeBackground} />
            <Links />
            <p id="copyright">&copy;&nbsp;Finn Evermann</p>
        </div>

    )
}

export default Footer
