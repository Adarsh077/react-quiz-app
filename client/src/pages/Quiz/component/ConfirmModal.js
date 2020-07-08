import React, { Component } from 'react';
import {
	MDBContainer,
	MDBBtn,
	MDBModal,
	MDBModalBody,
	MDBModalHeader,
	MDBModalFooter,
} from 'mdbreact';

class ConfirmModal extends Component {
	render() {
		const { isSubmitting } = this.props;
		return (
			<MDBContainer>
				<MDBModal isOpen={this.props.isOpen} centered>
					<MDBModalHeader toggle={this.props.toggle}>
						Confirm Submit
					</MDBModalHeader>
					<MDBModalBody>Are you sure you want to submit</MDBModalBody>
					<MDBModalFooter>
						<MDBBtn color='danger' onClick={this.props.toggle}>
							No
						</MDBBtn>
						<MDBBtn
							disabled={isSubmitting}
							color='primary'
							onClick={this.props.onConfirm}
						>
							{isSubmitting && (
								<div
									className='spinner-border text-light	spinner-border-sm mr-2'
									role='status'
								>
									<span className='sr-only'>Loading...</span>
								</div>
							)}
							Yes
						</MDBBtn>
					</MDBModalFooter>
				</MDBModal>
			</MDBContainer>
		);
	}
}

export default ConfirmModal;
