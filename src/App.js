import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import MyComponent from './Mycomponent';
import AppBarExampleIcon from './AppBar';
import IconMenuExampleNested from './Menu';
import AppBarExampleComposition from './AppBarExampleComposition';
import TableExampleSimple from './Table';
import BottomNavigationExampleSimple from './BottomNavigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <AppBarExampleComposition />
          <TableExampleSimple />

          <BottomNavigationExampleSimple />

        </MuiThemeProvider>

      </div>
    );
  }
}

export default App;
