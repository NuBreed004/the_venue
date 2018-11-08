import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';

  const styles = {
    list: {
      width: 250
    },
    fullList: {
      width: 'auto'
    }
  }


class SideDrawer extends Component {

  render() {

      const list = ['Inbox', 'Starred', 'Send Mail', 'Drafts']

      return (
          <Drawer
            anchor={this.props.anchor}
            open={this.props.open}
            onClose={() => this.props.onClose(false)}
          >
            <List className={this.props.classes.list}>
              { list.map(item => (
                <ListItem button key={item}>
                  {item}
                </ListItem>
              )) }
            </List>
          </Drawer>
      )
  }



};

export default withStyles(styles)(SideDrawer)
