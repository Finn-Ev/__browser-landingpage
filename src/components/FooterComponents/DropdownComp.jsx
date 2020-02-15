import React from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function DropdownComponent(props) {
    return (
        <> 
        <DropdownButton  alignRight drop="up" variant="link" id="dropdown-basic-button" title="Hintergrund ">
                <Dropdown.Item onClick={()=>props.changeBackground("background1")} >Gebirge</Dropdown.Item>
                <Dropdown.Item onClick={()=>props.changeBackground("background2")} >Wasser</Dropdown.Item>
                <Dropdown.Item onClick={()=>props.changeBackground("background3")} >Polarlicht</Dropdown.Item>
                <Dropdown.Item onClick={()=>props.changeBackground("background4")} >See am Abend</Dropdown.Item>
                <Dropdown.Item onClick={()=>props.changeBackground("background5")} >Blau-Lila</Dropdown.Item>
            </DropdownButton>
        </>
    )
}

export default DropdownComponent
