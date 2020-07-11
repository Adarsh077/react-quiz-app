import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import { MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

import { Question, Timer, ConfirmModal } from './component';
import Axios from '../../services/Axios';

export default class Quiz extends Component {
	constructor() {
		super();
		this.state = {
			questions: [],
			currentQuestionIdx: 0,
			confirmModalOpen: false,
			isSubmitting: false,
		};
	}

	componentDidMount = () => {
		if (!this.props.location.state) this.props.history.push('/join-quiz');
		// window.onbeforeunload = e => {
		// 	return 'Changes that you made may not be saved.';
		// };

		Axios.get('/quiz')
			.then(res => {
				const { questions } = res.questions;
				questions[0].endTime = new Date().setMinutes(
					new Date().getMinutes() + 3
				);
				this.setState({ questions });
			})
			.catch(err => console.log(err));
	};

	goToQuestion = idx => {
		const questions = this.state.questions;
		if (idx > questions.length - 1) return;
		if (!questions[idx].endTime)
			questions[idx].endTime = new Date().setMinutes(
				new Date().getMinutes() + 3
			);
		this.setState({ currentQuestionIdx: idx, questions });
	};

	handleAnswerChange = value => {
		const { questions, currentQuestionIdx } = this.state;

		questions[currentQuestionIdx].answer = value;
		this.setState({ questions });
	};

	toggleConfirmModal = () => {
		const { confirmModalOpen } = this.state;
		this.setState({ confirmModalOpen: !confirmModalOpen });
	};

	handleAnswerSubmit = () => {
		const newQuestions = [...this.state.questions];
		const answered = newQuestions.filter(question => question.answer);
		const body = {
			answers: answered,
			...this.props.location.state,
		};
		this.setState({ isSubmitting: true });
		Axios.post('/quiz', body)
			.then(res => {
				if (res.status === 'success')
					this.props.history.push({
						pathname: '/results',
						state: {
							email: this.props.location.state.email,
							questions: this.state.questions,
							...res.data,
						},
					});
			})
			.catch(err => console.log(err));
	};

	handleTimeOut = () => {
		this.setState({ confirmModalOpen: true }, this.handleAnswerSubmit);
	};

	render() {
		const {
			questions,
			currentQuestionIdx,
			confirmModalOpen,
			isSubmitting,
		} = this.state;
		const question = questions[currentQuestionIdx];

		if (questions.length < 1) {
			return (
				<div className='mt-5 d-flex justify-content-center'>
					<div className='spinner-border text-primary' role='status'>
						<span className='sr-only'>Loading...</span>
					</div>
				</div>
			);
		}

		return (
			<MDBRow className='mt-5 no-gutters px-2'>
				<ConfirmModal
					isOpen={confirmModalOpen}
					toggle={this.toggleConfirmModal}
					onConfirm={this.handleAnswerSubmit}
					isSubmitting={isSubmitting}
				/>
				<MDBCol sm='12' md='11' className='mx-auto'>
					<Timer
						className='px-3 mb-5'
						questionEndTime={question.endTime}
						totalTimeOut={this.handleTimeOut}
					/>
				</MDBCol>

				<MDBCol sm='12' lg='6' className='mx-auto mb-3'>
					<Question
						question={question}
						idx={currentQuestionIdx}
						questionEndTime={question.endTime}
						onChange={this.handleAnswerChange}
					/>

					<div className='d-flex justify-content-between pt-3'>
						<MDBBtn
							className='shadow-none mb-3 '
							color='primary'
							onClick={() => this.goToQuestion(currentQuestionIdx - 1)}
							disabled={currentQuestionIdx === 0}
						>
							<MDBIcon icon='angle-left' className='mr-1' /> Previous
						</MDBBtn>
						<MDBBtn
							className='shadow-none mb-3 '
							color='primary'
							onClick={() => this.goToQuestion(currentQuestionIdx + 1)}
							disabled={currentQuestionIdx === questions.length - 1}
						>
							Next <MDBIcon icon='angle-right' className='ml-1' />
						</MDBBtn>
					</div>
				</MDBCol>
				<MDBCol sm='12' lg='4' className='mx-auto'>
					<MDBRow className='no-gutters'>
						{questions.map((ele, idx) => {
							return (
								<MDBCol
									size='4'
									sm='3'
									md='2'
									lg='4'
									xl='3'
									className='px-2'
									key={uuid()}
								>
									<MDBBtn
										className='shadow-none mb-3 '
										color={Boolean(ele.answer) ? 'primary' : 'danger'}
										block
										outline={idx !== currentQuestionIdx}
										onClick={() => this.goToQuestion(idx)}
									>
										{idx + 1}
									</MDBBtn>
								</MDBCol>
							);
						})}
						<MDBCol size='12' className='px-2'>
							<MDBBtn block color='danger' onClick={this.toggleConfirmModal}>
								Submit Answers
							</MDBBtn>
						</MDBCol>
					</MDBRow>
				</MDBCol>
			</MDBRow>
		);
	}
}
