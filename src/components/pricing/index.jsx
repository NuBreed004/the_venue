import React, { Component } from 'react';
import MyButton from '../utils/myButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

  state = {
    prices: [100, 150, 250],
    positions: ['balcony', 'medium', 'Star'],
    desc: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic laborum illum, sint, quos minus magnam.',
      'Consectetur adipisicing elit. Hic laborum illum, sint, quos minus magnam.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic laborum illum, sint'
    ],
    linkto: ['http://sales/b', 'http://sales/m', 'http://sales/star'],
    delay: [500, 0, 500]
  }

  showBoxes = () => (
    this.state.prices.map((box, i)=> (
      <Zoom key={i} delay={this.state.delay[i]}>
      <div className="pricing_item">
        <div className="pricing_inner_wrapper">
          <div className="pricing_title">
            <span>
              ${this.state.prices[i]}
            </span>
            <span>{this.state.positions[i]}</span>
          </div>
          <div className="pricing_description">
            {this.state.desc[i]}
          </div>
          <div className="pricing_butons">
            <MyButton
                text="Purchase"
                bck="#ffa800"
                color= 'white'
                link = {this.state.linkto[i]}
             />
          </div>
        </div>
      </div>
      </Zoom>
    ))
  )

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>
            <div className="pricing_wrapper">
              {this.showBoxes()}
            </div>
          </h2>
        </div>
      </div>
    );
  }

}

export default Pricing;
