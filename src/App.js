import React, { Component } from 'react';
import { BrowserRouter, Match, Miss, Link } from 'react-router'
import { Flex, Box } from 'reflexbox';
import { CircularProgress } from 'material-ui';
import NavBar from './components/NavBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import axios from 'axios';
injectTapEventPlugin();

// Pages
import Home from './pages/Home';
import Upcoming from './pages/Upcoming';
import Bills from './pages/Bills';

import { colors } from './styles';

class App extends Component {
  state = {
    isLoading: true,
    filter: 'individual',
  };

  componentDidMount() {
    axios.get('http://www.melnick.org/api/')
      .then(({data}) => {
        this.setState({
          isLoading: false,
          insurances: data.insurances[0],
          family: {
            inNetwork: {
              total: data[271][1295499915].outofpocket.FAM.calendar.in,
              current: data[271][1295499915].deductible.FAM.calendar.in,
            },
            outNetwork: {
              total: data[271][1295499915].outofpocket.FAM.calendar.out,
              current: data[271][1295499915].deductible.FAM.calendar.out,
            }
          },
          individual: {
            inNetwork: {
              total: 2500,
              current: 500,
            },
            outNetwork: {
              total: 4000,
              current: 600,
            }
          }
        })
      });
  }

  changeFilter = (filter) => {
    this.setState({filter});
  }

  render() {
    if (this.state.isLoading) {
      return (
        <MuiThemeProvider>
          <Flex justify="center" align="center" style={{height: '100vh'}}>
            <CircularProgress color={colors.darkGreen} /> 
          </Flex>
        </MuiThemeProvider>
      );
    }

    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <Flex flexColumn style={{height: '100%'}}>
            <NavBar />
            <Match exactly pattern="/" render={() => 
              <Home data={this.state[this.state.filter]} changeFilter={this.changeFilter} filter={this.state.filter} />} 
            />
            <Match pattern="/upcoming" component={Upcoming} />
            <Match pattern="/bills" component={Bills} />
          </Flex>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
