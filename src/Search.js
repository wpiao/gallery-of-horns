import React from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap';

class Search extends React.Component {
  render() {
    const buttonStyle = {
      display: this.props.showAllButton,
      margin: 'auto'
    };

    return (
      <>
        <InputGroup className="mb-3">
          <FormControl
            onChange={this.props.handleChange}
            placeholder="Enter keyword"
            aria-label="keyword"
            aria-describedby="basic-addon2"
            value={this.props.input}
          />
          <InputGroup.Append>
            <Button onClick={this.props.handleSearch} variant="outline-secondary">Search</Button>
          </InputGroup.Append>
        </InputGroup>
        <Button
          variant="primary"
          onClick={this.props.showAll}
          style={buttonStyle}>Show all pictures
        </Button>
      </>
    );
  }
}

export default Search;
