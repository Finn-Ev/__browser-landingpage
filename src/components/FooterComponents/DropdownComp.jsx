import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function DropdownComponent({changeBackground}) {
	return (
		<DropdownButton alignRight drop="up" variant="link" id="dropdown-basic-button" title="Hintergrund ">
			<Dropdown.Item onClick={() => changeBackground('mountains')}>Gebirge</Dropdown.Item>
			<Dropdown.Item onClick={() => changeBackground('aurora')}>Polarlicht</Dropdown.Item>
			<Dropdown.Item onClick={() => changeBackground('firewatch-forest-day-green')}>Wald am Tag</Dropdown.Item>
			<Dropdown.Item onClick={() => changeBackground('firewatch-forest-evening-red')}>Wald am Abend</Dropdown.Item>
			<Dropdown.Item onClick={() => changeBackground('firewatch-forest-night-green')}>Wald bei Nacht</Dropdown.Item>
			<Dropdown.Item onClick={() => changeBackground('firewatch-forest-evening-lilac')}>Wald am Abend 2</Dropdown.Item>
			<Dropdown.Item onClick={() => changeBackground('firewatch-forest-night-black')}>Wald bei Nacht 2</Dropdown.Item>
		</DropdownButton>
	);
}

export default DropdownComponent;
