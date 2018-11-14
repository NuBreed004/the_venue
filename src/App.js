import React, { Component } from 'react';
import './resources/styles.css';


import Featured from './components/featured';
import Header from './components/header';
import VenueNfo from './components/venueNfo';


class App extends Component {
  render() {
    return (
      <div className="App" style={{height: '1500px'}}>
        <Header />
        <Featured />
        <VenueNfo />
      </div>
    )
  }
}

export default App;
