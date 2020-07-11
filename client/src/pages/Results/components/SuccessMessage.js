/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

export default function Submitted(props) {
	const { email, percentage } = props;

	return (
		<div>
			<div className='h3'>
				Congratulations, You scored{' '}
				<span className='text-success'>{percentage}%</span>
			</div>
			<div className='text-muted'>Your certificate is sent on {email}</div>
		</div>
	);
}
