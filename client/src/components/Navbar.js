import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand } from 'mdbreact';

class Navbar extends Component {
	state = {
		isOpen: false,
	};

	toggleCollapse = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		return (
			<MDBNavbar color='indigo' dark expand='md'>
				<MDBNavbarBrand>
					<strong className='white-text'>React Quiz App</strong>
				</MDBNavbarBrand>
			</MDBNavbar>
		);
	}
}

export default Navbar;
