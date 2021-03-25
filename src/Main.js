import React from 'react';
import HornedBeasts from './HornedBeasts.js';
import './Main.css';
import data from './data.json';

class Main extends React.Component {
  render() {
    return (
      <main className="main-section">
        {data.map((beast, i) =>
          <HornedBeasts key={i} title={beast.keyword} src={beast.image_url} desc={beast.description} />
        )}
      </main>
    );
  }
}

export default Main;
