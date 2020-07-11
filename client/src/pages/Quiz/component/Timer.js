import React, { Component } from 'react';
import secondsToString from '../../../utils/secondsToString';

export default class Timer extends Component {
	constructor(props) {
		super(props);

		const seconds = (props.questionEndTime - new Date()) / 1000;
		this.state = {
			totalTimeLeft: 180 * 15,
			endTime: Math.round(seconds),
			endTimeId: null,
			totalTimeId: null,
		};
	}

	componentDidMount() {
		// Total Time countdown
		const id = setInterval(() => {
			const { totalTimeLeft } = this.state;
			if (totalTimeLeft < 1) {
				clearInterval(id);
				return this.props.totalTimeOut();
			}
			this.setState({ totalTimeLeft: totalTimeLeft - 1, totalTimeId: id });
		}, 1000);
		this.restartQuestionCountdown();
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		const seconds = (nextProps.questionEndTime - new Date()) / 1000;
		return {
			...prevState,
			endTime: Math.round(seconds),
		};
	}

	componentDidUpdate(prevProps) {
		if (prevProps.questionEndTime !== this.props.questionEndTime) {
			const seconds = (prevProps.questionEndTime - new Date()) / 1000;
			this.setState({ endTime: Math.round(seconds) });
			this.restartQuestionCountdown();
		}
	}

	componentWillUnmount() {
		clearInterval(this.state.endTimeId);
		clearInterval(this.state.totalTimeId);
	}

	restartQuestionCountdown = () => {
		clearInterval(this.state.endTimeId);

		// Question Time countdown
		const endTimeId = setInterval(() => {
			const { endTime } = this.state;

			if (endTime < 1) {
				clearInterval(this.state.endTimeId);
			} else {
				this.setState({ endTime: endTime - 1 });
			}
		}, 1000);

		this.setState({ endTimeId });
	};

	render() {
		const { totalTimeLeft, endTime } = this.state;

		return (
			<div
				className={`d-flex justify-content-between align-items-center ${this.props.className}`}
			>
				<div>
					Time for current question:{' '}
					<div className='display-4'>
						{endTime < 1 ? '00:00' : secondsToString(endTime)}
					</div>
				</div>
				<div>
					Total Time Remaining:{' '}
					<div className='display-4'>{secondsToString(totalTimeLeft)}</div>
				</div>
			</div>
		);
	}
}
