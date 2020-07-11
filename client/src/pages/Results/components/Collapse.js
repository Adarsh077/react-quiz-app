import React from 'react';
import { MDBCollapse, MDBCard, MDBCardBody } from 'mdbreact';

export default function Collapse(props) {
	const { title, isOpen, toggleCollapse, className } = props;
	return (
		<div>
			<MDBCard className='mt-3'>
				<div
					className={`p-3 d-flex justify-content-between align-items-center cursor-pointer ${className}`}
					onClick={toggleCollapse}
				>
					{title}
					<i
						className={
							isOpen ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'
						}
					/>
				</div>
				<MDBCollapse id='collapse1' isOpen={isOpen}>
					<MDBCardBody>{props.children}</MDBCardBody>
				</MDBCollapse>
			</MDBCard>
		</div>
	);
}
