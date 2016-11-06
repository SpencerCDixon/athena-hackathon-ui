import React, { Component } from 'react';
import { BrowserRouter, Match, Miss, Link } from 'react-router'
import { Flex, Box } from 'reflexbox';
import NavBar from './components/NavBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import axios from 'axios';
injectTapEventPlugin();

// Pages
import Home from './pages/Home';
import Upcoming from './pages/Upcoming';
import Bills from './pages/Bills';

class App extends Component {
  componentDidMount() {
    axios.get('http://www.melnick.org/api/')
      .then(results => {
        // debugger;
      });
  }

  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <Flex flexColumn style={{height: '100%'}}>
            <NavBar />
            <Match exactly pattern="/" component={Home} />
            <Match pattern="/upcoming" component={Upcoming} />
            <Match pattern="/bills" component={Bills} />
          </Flex>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
