import React from 'react';
import HornedBeasts from './HornedBeasts.js';
import data from './hornedBeastsData.js';

class Main extends React.Component {
  render() {
    console.log(data);
    return (
      <div>
        {data.map((beast, i) =>
          <HornedBeasts key={i} title={beast.keyword} src={beast.image_url} desc={beast.description} />
        )}
        <HornedBeasts />
      </div>
    );
  }
}

export default Main;
