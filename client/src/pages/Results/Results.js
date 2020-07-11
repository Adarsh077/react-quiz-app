import React, { Component } from 'react';
import { MDBContainer } from 'mdbreact';
import { v4 as uuid } from 'uuid';

import Collapse from './components/Collapse';
import Question from './components/Question';
import SuccessMessage from './components/SuccessMessage';

class Results extends Component {
	constructor(props) {
		super(props);

		if (!props.location.state) {
			this.props.history.push('/');
		}

		const { email, percentage, wrongAnswers, questions } = props.location.state;
		const wrong = questions.filter(question => {
			const idx = wrongAnswers.findIndex(answer => answer._id === question._id);
			if (idx !== -1) question.actualAnswer = wrongAnswers[idx].answer;
			return idx !== -1;
		});

		const correct = questions.filter(question => {
			const idx = wrongAnswers.findIndex(answer => answer._id === question._id);
			if (idx === -1) question.actualAnswer = question.answer;
			return idx === -1;
		});

		this.state = {
			collapse: 'wrongCollapse',
			email,
			percentage,
			wrong,
			correct,
			questions,
		};
	}

	toggleCollapse = collapse => () => {
		this.setState({ collapse });
	};

	render() {
		const {
			collapse,
			email,
			wrong,
			percentage,
			questions,
			correct,
		} = this.state;
		console.log(wrong);
		return (
			<MDBContainer className='my-5'>
				<SuccessMessage percentage={percentage} email={email} />
				<Collapse
					isOpen={collapse === 'wrongCollapse'}
					toggleCollapse={this.toggleCollapse('wrongCollapse')}
					title={`Wrongly attempted questions: ${wrong.length}/${questions.length}`}
					className='red lighten-5 text-danger '
				>
					{wrong.map(a => (
						<Question {...a} key={uuid()} />
					))}
				</Collapse>
				<Collapse
					isOpen={collapse === 'rightCollapse'}
					toggleCollapse={this.toggleCollapse('rightCollapse')}
					title={`Correctly attempted questions: ${correct.length}/${questions.length}`}
					className='green lighten-5 text-success '
				>
					{correct.map(a => (
						<Question {...a} key={uuid()} />
					))}
				</Collapse>
			</MDBContainer>
		);
	}
}

export default Results;
