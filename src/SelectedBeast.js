import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class SelectedBeast extends React.Component {
  render() {
    const style = {
      textAlign: 'center'
    };

    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose} backdrop="static" keyboard={false}>
          <Modal.Header closeButton onHide={this.props.handleClose}>
            <Modal.Title>{this.props.pic.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={style}>
            <img src={this.props.pic.src} alt={this.props.pic.title} style={{ maxWidth: '100%' }} />
            <p>{this.props.pic.desc}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;
