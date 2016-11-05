import React, { Component } from 'react';
import { BrowserRouter, Match, Miss, Link } from 'react-router'
import { Flex, Box } from 'reflexbox';
import NavBar from './components/NavBar';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <Flex flexColumn style={{height: '100%'}}>
        <NavBar />

        <BrowserRouter>
          <Match exactly pattern="/" component={Home} />
        </BrowserRouter>
      </Flex>
    );
  }
}

export default App;
