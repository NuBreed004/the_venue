import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

class Discount extends Component {

  state = {
    discountStart: 0,
    discountEnd: 30
  }


  porcentage = () => {
    const { discountStart, discountEnd } = this.state

    if(discountStart < discountEnd) {

      this.setState({
        discountStart: discountStart + 1
      })

    }
  }

  componentDidUpdate() {
    setTimeout(()=> this.porcentage(), 30)
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade
            onReveal={()=> this.porcentage()}
          >
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Purchase Tickets</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque incidunt vitae ipsa nulla dolore cumque omnis sit expedita deleniti neque dignissimos qui tempora dolores, adipisci, quam laborum facere odit fugiat, praesentium atque illum voluptatibus. Amet iste, velit aliquam exercitationem, vitae magnam harum culpa iusto, delectus natus incidunt temporibus vel distinctio itaque. Ratione quia nisi repellendus nesciunt id earum harum porro? Suscipit eligendi voluptatibus rem</p>
              <div>button</div>
            </div>
          </Slide>
        </div>
      </div>
    );
  }

}

export default Discount;
