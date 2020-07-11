import React from 'react';
import {
	MDBContainer,
	MDBBtn,
	MDBModal,
	MDBModalBody,
	MDBModalHeader,
	MDBModalFooter,
} from 'mdbreact';

const ModalPage = props => {
	return (
		<MDBContainer>
			<MDBModal isOpen={props.isOpen} toggle={props.toggle} centered>
				<MDBModalHeader toggle={props.toggle}>
					Important Points !!!
				</MDBModalHeader>
				<MDBModalBody>
					<ol>
						<li>
							Enter correct <b>Name</b> and <b>Email</b> to avail your
							certificate.
						</li>
						<li>
							Your answers will NOT be saved if you leave the page without
							submitting.
						</li>
						<li>
							Total time for quiz <b>45 Mins.</b>
						</li>
						<li>
							When ever the quiz tab/window losses focus, <br /> <b>10 mins </b>
							from total time will be deducted immediately.
						</li>
						<li>
							Quiz tab/window losses focus when:
							<ol type='i'>
								<li>Opened/Switched to new tab.</li>
								<li>Switched to other application.</li>
								<li>Switched Workspace/Desktop.</li>
							</ol>
						</li>
						<li>
							Each question will expire after <b>180 seconds</b>.
						</li>
						<li>Results will be displayed at the end of exam.</li>
					</ol>
				</MDBModalBody>
				<MDBModalFooter>
					<MDBBtn color='danger' onClick={props.toggle}>
						Close
					</MDBBtn>
					<MDBBtn color='primary' onClick={props.handleSubmit}>
						OK
					</MDBBtn>
				</MDBModalFooter>
			</MDBModal>
		</MDBContainer>
	);
};

export default ModalPage;
