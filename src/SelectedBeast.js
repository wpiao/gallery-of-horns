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
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={style}>
            <img src={this.props.src} alt={this.props.title} width={400} height={400} />
            <p>{this.props.desc}</p>
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
