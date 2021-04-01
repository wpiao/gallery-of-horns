import React from 'react';
import HornedBeasts from './HornedBeasts.js';
import './css/Main.css';

class Main extends React.Component {
  render() {
    return (
      <main className="main-section">
        {this.props.data.map((beast, i) =>
          <HornedBeasts
            key={i}
            title={beast.title}
            src={beast.image_url}
            desc={beast.description}
            handleClick={this.props.handleClick}
          />
        )}
      </main>
    );
  }
}

export default Main;
