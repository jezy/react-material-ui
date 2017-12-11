import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import Badge from 'material-ui/Badge';

import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Zaloguj się" />
    );
  }
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Ustawienia" />
    <MenuItem primaryText="Odśwież" />
    <MenuItem primaryText="Pomoc" />
    <MenuItem primaryText="Wyloguj się" />
  </IconMenu>
);

Logged.muiName = 'IconMenu';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class AppBarExampleComposition extends Component {
  state = {
    logged: true,
  };

  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };

  render() {
    return (
      <div>
        <Toggle
          label="Zalogowany"
          defaultToggled={true}
          onToggle={this.handleChange}
          labelPosition="right"
          style={{
            margin: 0,
          }}
        />
        <AppBar
          title="Panel administracyjny"
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={this.state.logged ? <Logged /> : <Login />}
          style={{
            backgroundColor: '#555',
          }}
        />

       <Badge
         badgeContent={4}
         primary={true}
        >
        <NotificationsIcon />
       </Badge>
       <Badge
  badgeContent={10}
  secondary={true}
  badgeStyle={{top: 12, right: 12}}
        >
        <IconButton tooltip="Notifications">
        <NotificationsIcon />
        </IconButton>
       </Badge>
      </div>
    );
  }
}

export default AppBarExampleComposition;
