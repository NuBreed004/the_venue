import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';
import { scroller } from 'react-scroll';

  const styles = {
    list: {
      width: 250
    },
    fullList: {
      width: 'auto'
    }
  }


class SideDrawer extends Component {

  scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
    })
    this.props.onClose(false)
  }

  render() {

      const list = ['Event Starts In', 'Venue Info', 'Highlights', 'Pricing', 'Location']

      return (
          <Drawer
            anchor={this.props.anchor}
            open={this.props.open}
            onClose={() => this.props.onClose(false)}
          >
            <List component="nav" className={this.props.classes.list}>
              { list.map((item, i) => (
                <ListItem onClick={()=> this.scrollToElement(item)} button key={item}>
                  {item}
                </ListItem>
              )) }
            </List>
          </Drawer>
      )
  }



};

export default withStyles(styles)(SideDrawer)
