import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import SelectedBeast from './SelectedBeast.js';
import Search from './Search.js';
import DropDown from './DropDown.js';
import Footer from './Footer.js';
import data from './data.json';
import './css/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selectedPic: {},
      data: data,
      input: '',
      showAllButton: 'none',
      numberOfHorns: ''
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleClick = pic => {
    this.setState({
      selectedPic: pic,
      show: true
    });
  }

  handleSearch = () => {
    const result = data.filter(element => element.keyword.includes(this.state.input));
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

  handleDropDown = e => {
    e.preventDefault();
    let result = data;
    if (e.target.value !== '') {
      result = data.filter(element => element.horns.toString() === e.target.value);
    }
    this.setState({
      data: result
    });
  }

  render() {
    return (
      <div>
        <Header />
        <SelectedBeast
          handleClose={this.handleClose}
          show={this.state.show}
          pic={this.state.selectedPic}
        />
        <Search
          handleSearch={this.handleSearch}
          handleChange={this.handleChange}
          showAll={this.showAll}
          input={this.state.input}
          showAllButton={this.state.showAllButton}
        />
        <DropDown
          style={{ width: '50px' }}
          handleDropDown={this.handleDropDown}
        />
        <Main handleClick={this.handleClick} data={this.state.data} />
        <Footer />
      </div>
    );
  }
}

export default App;
