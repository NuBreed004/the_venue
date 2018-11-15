import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Footer from './components/footer';
import Location from './components/location';
import Pricing from './components/pricing';
import Featured from './components/featured';
import Header from './components/header';
import VenueNfo from './components/venueNfo';
import Highlights from './components/highlights';


class App extends Component {
  render() {
    return (
      <div className="App" style={{height: '1500px', boxShadow: 'none'}}>

        <Element name="Event Starts In">
          <Header />
        </Element>

        <Element name="Highlights">
          <Featured />
        </Element>

        <Element name="Venue Info">
          <VenueNfo />
        </Element>

        <Element name="Highlights">
          <Highlights />
        </Element>

        <Element name="Pricing">
          <Pricing />
        </Element>

        <Element name="Location">
          <Location />
        </Element>


        <Footer />
      </div>
    )
  }
}

export default App;
