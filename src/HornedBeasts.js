import React from 'react';

class HornedBeasts extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img src={this.props.src} alt={this.props.title} title={this.props.title} />
        <p>{this.props.desc}</p>
      </div>
    );
  }
}

export default HornedBeasts;
