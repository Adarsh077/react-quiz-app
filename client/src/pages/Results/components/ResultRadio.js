import React from 'react';
import { MDBInput, MDBIcon } from 'mdbreact';

export default function ResultRadio(props) {
	const { label, checked, isAnswer } = props;
	return (
		<div className='d-flex align-items-center'>
			<MDBInput
				gap
				label={label}
				type='radio'
				disabled
				checked={checked}
				containerClass='justify-content-start'
			/>
			{isAnswer && (
				<MDBIcon className='text-success ml-2' icon='check-circle' />
			)}
		</div>
	);
}
