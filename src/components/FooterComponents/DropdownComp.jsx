import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { OverlayTrigger, Tooltip, Dropdown} from 'react-bootstrap';

function DropdownComponent({ changeBackground }) {
	const resetBackground = () => {
		localStorage.removeItem("maintainBackground")
		localStorage.removeItem("background")
		window.location.reload()
	}
	const renderTooltip = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Hintergrund wird an Tageszeit angepasst
		</Tooltip>
	)

return (
	<DropdownButton alignRight drop="up" variant="link" id="dropdown-basic-button" title="Hintergrund ">

		<OverlayTrigger
			placement="top"
			delay={{ show: 200, hide: 400 }}
			overlay={renderTooltip}
		>
			<Dropdown.Item onClick={resetBackground}>Automatisch</Dropdown.Item>
		</OverlayTrigger>

		<Dropdown.Divider />
		<Dropdown.Item onClick={() => changeBackground('mountains', true)}>Gebirge</Dropdown.Item>
		<Dropdown.Item onClick={() => changeBackground('aurora', true)}>Polarlicht</Dropdown.Item>
		<Dropdown.Item onClick={() => changeBackground('firewatch-forest-day-green', true)}>Wald am Tag</Dropdown.Item>
		<Dropdown.Item onClick={() => changeBackground('firewatch-forest-evening-red', true)}>Wald am Abend</Dropdown.Item>
		<Dropdown.Item onClick={() => changeBackground('firewatch-forest-night-green', true)}>Wald bei Nacht</Dropdown.Item>
	</DropdownButton>
);
}

export default DropdownComponent;
