import React from 'react';
import { Form } from 'react-bootstrap';

class DropDown extends React.Component {
  render() {
    return (
      <>
        <Form>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Filter by Numbers of Horns</Form.Label>
            <Form.Control as="select" onChange={this.props.handleDropDown} defaultValue="Choose number of horns" >
              <option value="">Choose number of horns</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </>
    );
  }
}

export default DropDown;
