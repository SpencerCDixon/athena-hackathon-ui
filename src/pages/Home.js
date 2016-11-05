import React, { Component, PropTypes } from 'react';
import { Flex, Box } from 'reflexbox';
import { colors } from '../styles';
import H3 from '../components/H3';
import Page from '../components/Page';
import P from '../components/P';
import Link from '../components/Link';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';

class Home extends Component {
  render() {
    return (
      <Page title="Hello, Johnny!">
        <Box>
          <P> Check your <Link>upcoming appointments</Link> and <Link>account history.</Link> </P>

          <Box>
            <Flex flexColumn>
              <H3 style={{textAlign: 'center'}}>Family</H3>
              <ProgressBar total={100} current={90} color={colors.darkGreen} />
            </Flex>

            <Flex flexColumn>
              <H3 style={{textAlign: 'center'}}>Jessica</H3>
              <ProgressBar total={100} current={35} color={colors.lightGreen} />
            </Flex>

            <Flex flexColumn>
              <H3 style={{textAlign: 'center'}}>Johnny</H3>
              <ProgressBar total={100} current={45} color={colors.lightGreen} />
            </Flex>
          </Box>

          <Box mt={3} flex justify="flex-end">
            <Button> Set up a payment plan </Button>
          </Box>
        </Box>
      </Page>
    );
  }
}

export default Home;
