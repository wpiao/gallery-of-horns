import React from 'react';
import { Card } from 'react-bootstrap';
import './css/HornedBeasts.css';

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
  }

  handleCardClick = () => {
    this.props.handleClick({
      src: this.props.src,
      alt: this.props.title,
      title: this.props.title,
      desc: this.props.desc
    });
  }

  handleClick = () => {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  render() {
    return (
      <div className="horned-beasts">
        <Card onClick={this.handleCardClick}>
          <Card.Img onClick={this.handleClick} variant="top" src={this.props.src} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.desc}</Card.Text>
            <Card.Text>&hearts; {this.state.clicks}</Card.Text>
          </Card.Body>
        </Card>
        {/* <h2>{this.props.title}</h2>
        <Image
          onClick={this.handleClick}
          src={this.props.src}
          alt={this.props.title}
          title={this.props.title}
          name={this.props.desc} fluid
        />
        <p>{this.props.desc}</p>
        <p>&hearts; {this.state.clicks}</p> */}
      </div>
    );
  }
}

export default HornedBeasts;
