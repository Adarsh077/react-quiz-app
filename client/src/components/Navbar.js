import React, { Component } from 'react';
import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBNavItem,
	MDBNavLink,
	MDBIcon,
} from 'mdbreact';

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
				<MDBNavbarNav right>
					<MDBNavItem>
						<MDBNavLink className='waves-effect waves-light' to='#!'>
							<MDBIcon size='lg' fab icon='github' />
						</MDBNavLink>
					</MDBNavItem>
				</MDBNavbarNav>
			</MDBNavbar>
		);
	}
}

export default Navbar;
