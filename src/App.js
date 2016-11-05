import React, { Component } from 'react';
import { BrowserRouter, Match, Miss, Link } from 'react-router'
import { Flex, Box } from 'reflexbox';
import NavBar from './components/NavBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Pages
import Home from './pages/Home';
import Upcoming from './pages/Upcoming';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <Flex flexColumn style={{height: '100%'}}>
            <NavBar />
            <Match exactly pattern="/" component={Home} />
            <Match pattern="/upcoming" component={Upcoming} />
          </Flex>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
