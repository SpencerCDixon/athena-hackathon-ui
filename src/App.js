import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';
import NavBar from './components/NavBar';
import H3 from './components/H3';
import Page from './components/Page';
import P from './components/P';
import Link from './components/Link';
import Button from './components/Button';
import ProgressBar from './components/ProgressBar';

class App extends Component {
  render() {
    return (
      <Flex flexColumn style={{height: '100%'}}>
        <NavBar />
        <Page title="Hello, Johnny!">
          <Box>
            <P> Check your <Link>upcoming appointments</Link> and <Link>account history.</Link> </P>

            <Box>
              <Flex flexColumn>
                <H3 style={{textAlign: 'center'}}>Family</H3>
                <ProgressBar total={100} current={90} />
              </Flex>

              <Flex flexColumn>
                <H3 style={{textAlign: 'center'}}>Jessica</H3>
                <ProgressBar total={100} current={35} />
              </Flex>

              <Flex flexColumn>
                <H3 style={{textAlign: 'center'}}>Johnny</H3>
                <ProgressBar total={100} current={45} />
              </Flex>
            </Box>

            <Box mt={3} flex justify="flex-end">
              <Button> Set up a payment plan </Button>
            </Box>
          </Box>
        </Page>
      </Flex>
    );
  }
}

export default App;
