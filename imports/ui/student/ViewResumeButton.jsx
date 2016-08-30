import React, {Component, PropTypes} from 'react';
import { Button, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import ViewResume from '../forms/ViewResume';

export default class ViewResumeButton extends Component {
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

  viewResumeModal() {
    return (
      <Modal bsSize="large" show={this.state.showModal} onHide={ this.closeModal.bind(this) }>
        <Modal.Body>
          <ViewResume user={this.props.user}/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={ this.closeModal.bind(this) }>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  render() {
    return (<Button onClick={this.openModal.bind(this)}>
      View Resume
      {this.viewResumeModal()}
    </Button>)
  }
}