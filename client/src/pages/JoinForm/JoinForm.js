import React, { useState } from 'react';
import {
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBBtn,
	MDBCard,
	MDBCardBody,
} from 'mdbreact';

import validateEmail from '../../utils/validateEmail';
import { StepsModal } from '../../components';

const Input = props => {
	const { err, className, icon, ...rest } = props;

	return (
		<div className='md-form mt-0'>
			<input
				{...rest}
				className={`form-control ${err && ' is-invalid'} ${props.className}`}
			/>
			{err && <div className='invalid-feedback'>{err}</div>}
		</div>
	);
};

export default function JoinForm(props) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [errors, setErrors] = useState({});
	const [modal, setModal] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();

		const newErrors = {};
		if (!name) newErrors.name = 'Name is required';
		if (!email) newErrors.email = 'Email is required';
		if (email && !validateEmail(email)) newErrors.email = 'Enter valid email';

		if (Object.keys(newErrors).length > 0) return setErrors(newErrors);
		setErrors({});

		setModal(true);
	};

	const handleModalSubmit = () => {
		props.history.push({
			pathname: '/quiz',
			state: { name, email },
		});
	};

	const toggleModal = () => setModal(!modal);

	return (
		<MDBContainer>
			<StepsModal
				isOpen={modal}
				toggle={toggleModal}
				handleSubmit={handleModalSubmit}
			/>
			<MDBRow>
				<MDBCol md='6' className='mx-auto'>
					<MDBCard className='mt-5 p-3 p-md-5'>
						<MDBCardBody>
							<form onSubmit={handleSubmit} noValidate>
								<p className='h4 text-center mb-5'>Join Quiz</p>
								<div className='grey-text'>
									<Input
										type='text'
										value={name}
										err={errors.name}
										placeholder='Enter Your Name'
										id='name'
										onChange={e => setName(e.target.value)}
									/>
									<Input
										type='email'
										value={email}
										err={errors.email}
										placeholder='Type your email'
										className='mb-0'
										onChange={e => setEmail(e.target.value)}
									/>
									<label>Result will be send to your email.</label>
								</div>

								<div className='text-center'>
									<MDBBtn type='submit' color='primary'>
										Login
									</MDBBtn>
								</div>
							</form>
						</MDBCardBody>
					</MDBCard>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
}
