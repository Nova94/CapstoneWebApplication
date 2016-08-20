import React, {Component, PropTypes} from 'react';
import { Button, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import ResumeForm from '../forms/ResumeForm';

export default class SubmitResume extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };
  }

  openModal() {
    this.setState({showModal: true});
  }

  closeModal() {
    this.setState({showModal: false});
  }

  getModalWithViewResume() {
    return (
      <Modal bsSize="large" show={this.state.showModal} onHide={ this.closeModal.bind(this) }>
        <Modal.Body>
          <ResumeForm user={this.props.user} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={ this.closeModal.bind(this) }>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  render() {
    return (<Button bsStyle="danger" onClick={this.openModal.bind(this)}>
      Submit Resume
      {this.getModalWithViewResume()}
    </Button>)
  }
}