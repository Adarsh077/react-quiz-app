/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBFormInline } from 'mdbreact';

const Radio = props => {
	const { value, name, ...rest } = props;
	const id = uuid();
	return (
		<div className='custom-control custom-radio custom-control-inline mb-4'>
			<input
				{...rest}
				type='radio'
				id={id}
				name='customRadioInline1'
				className='custom-control-input'
				data-value={value}
			/>
			<label className='custom-control-label  w-100' htmlFor={id}>
				{value}
			</label>
		</div>
	);
};

export default function Question(props) {
	const { question, idx, questionEndTime } = props;

	const [timesUp, setTimesUp] = useState(questionEndTime < Date.now());
	useEffect(() => {
		if (!timesUp) {
			setInterval(() => {
				setTimesUp(questionEndTime < Date.now());
			}, 1000);
		}
	}, [questionEndTime]);

	const handleChange = e => {
		const value = e.target.getAttribute('data-value');
		props.onChange(value);
	};
	console.log(question);
	return (
		<MDBCard className='p-3'>
			<MDBCardBody>
				<h4 className='mb-5 mt-3'>
					{idx + 1}. {question.question}
				</h4>
				<MDBFormInline onChange={handleChange}>
					<MDBRow className='w-100'>
						{question.options.map(option => {
							return (
								<MDBCol sm='12' md='6' key={uuid()}>
									<Radio
										value={option}
										name={question._id}
										disabled={questionEndTime < Date.now()}
										defaultChecked={question.answer === option}
									/>
								</MDBCol>
							);
						})}
					</MDBRow>
				</MDBFormInline>
			</MDBCardBody>
		</MDBCard>
	);
}
