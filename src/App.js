import React, { Component } from 'react';
import { BrowserRouter, Match, Miss, Link } from 'react-router'
import { Flex, Box } from 'reflexbox';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Upcoming from './pages/Upcoming';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Flex flexColumn style={{height: '100%'}}>
          <NavBar />

          <Match exactly pattern="/" component={Home} />
          <Match pattern="/upcoming" component={Upcoming} />
        </Flex>
      </BrowserRouter>
    );
  }
}

export default App;
