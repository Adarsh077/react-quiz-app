import React from 'react';
import { v4 as uuid } from 'uuid';
import { MDBFormInline, MDBRow, MDBCol } from 'mdbreact';
import ResultRadio from './ResultRadio';

export default function Question(props) {
	const { question, answer, actualAnswer, options } = props;
	return (
		<div>
			<div className='h6 my-2'>{question}</div>
			<MDBFormInline className='justify-content-start'>
				<MDBRow>
					{options.map(option => {
						return (
							<MDBCol key={uuid()} size='12'>
								<ResultRadio
									label={option}
									checked={option === answer}
									isAnswer={actualAnswer === option}
								/>
							</MDBCol>
						);
					})}
				</MDBRow>
			</MDBFormInline>
		</div>
	);
}
