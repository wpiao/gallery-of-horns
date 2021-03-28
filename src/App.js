import React from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import Header from './Header.js';
import Main from './Main.js';
import SelectedBeast from './SelectedBeast.js';
import Footer from './Footer.js';
import data from './data.json';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      src: '',
      title: '',
      desc: '',
      data: data,
      input: '',
      showAllButton: 'none'
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleClick = e => {
    this.setState({
      src: e.target.src,
      title: e.target.title,
      desc: e.target.name,
      show: true
    });
  }

  handleSearch = () => {
    const result = this.state.data.filter(element => element.keyword.includes(this.state.input));
    this.setState({
      data: result,
      input: '',
      showAllButton: 'block'
    });
  }

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  }

  showAll = () => {
    this.setState({
      data: data,
      showAllButton: 'none'
    });
  }

  render() {
    const buttonStyle = {
      display: this.state.showAllButton,
      margin: 'auto'
    };

    return (
      <div>
        <Header />
        <SelectedBeast
          handleClose={this.handleClose}
          show={this.state.show}
          src={this.state.src}
          title={this.state.title}
          desc={this.state.desc}
        />
        <InputGroup className="mb-3">
          <FormControl
            onChange={this.handleChange}
            placeholder="Enter keyword"
            aria-label="keyword"
            aria-describedby="basic-addon2"
            value={this.state.input}
          />
          <InputGroup.Append>
            <Button onClick={this.handleSearch} variant="outline-secondary">Search</Button>
          </InputGroup.Append>
        </InputGroup>
        <Button
          variant="primary"
          onClick={this.showAll}
          style={buttonStyle}>Show all pictures</Button>
        <Main handleClick={this.handleClick} data={this.state.data} />
        <Footer />
      </div>
    );
  }
}

export default App;
