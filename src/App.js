import React, { Component } from 'react';
import './resources/styles.css';

import Location from './components/location';
import Pricing from './components/pricing';
import Featured from './components/featured';
import Header from './components/header';
import VenueNfo from './components/venueNfo';
import Highlights from './components/highlights';


class App extends Component {
  render() {
    return (
      <div className="App" style={{height: '1500px', boxShadow: 'none', padding: '10px 0'}}>
        <Header />
        <Featured />
        <VenueNfo />
        <Highlights />
        <Pricing />
        <Location />
      </div>
    )
  }
}

export default App;
