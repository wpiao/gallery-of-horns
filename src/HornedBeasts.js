import React from 'react';
import { Image } from 'react-bootstrap';
import './HornedBeasts.css';

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
  }

  handleClick = () => {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  render() {
    return (
      <div className="horned-beasts">
        <h2>{this.props.title}</h2>
        <Image onClick={this.handleClick} src={this.props.src} fluid alt={this.props.title} title={this.props.title} />
        <p>{this.props.desc}</p>
        <p>&hearts; {this.state.clicks}</p>
      </div>
    );
  }
}

export default HornedBeasts;
