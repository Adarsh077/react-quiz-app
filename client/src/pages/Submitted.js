/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

const styles = {
	i: {
		color: '#9ABC66',
		fontSize: '100px',
		lineHeight: '200px',
		marginLeft: '-15px',
	},
	h1: {
		color: ' #88B04B',
		fontFamily: '"Nunito Sans", "Helvetica Neue", sans-serif',
		fontWeight: 900,
		fontSize: '40px',
		marginBottom: '10px',
	},
};

export default function Submitted(props) {
	useEffect(() => {
		if (!props.location.state) {
			props.history.push('/');
		}
	}, []);

	return (
		<MDBContainer>
			<MDBRow>
				<MDBCol size='12' md='6' lg='4' className='mx-auto'>
					<div className='text-center'>
						<div
							style={{
								height: 200,
								width: '100%',
								margin: '0 auto',
								textAlign: 'center',
							}}
						>
							<i className='checkmark' style={styles.i}>
								✓
							</i>
							<h1 style={styles.h1}>Submitted</h1>
							<p className='mt-5'>
								Your result is send to {props.location.state.email || ''}
							</p>
						</div>
					</div>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
}
