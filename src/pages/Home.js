import React, { Component, PropTypes } from 'react';
import { Flex, Box } from 'reflexbox';
import { colors } from '../styles';
import H3 from '../components/H3';
import Page from '../components/Page';
import P from '../components/P';
import { Link as RouterLink } from 'react-router';
import Link from '../components/Link';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';
import AccountData from '../components/AccountData';

class Home extends Component {
  render() {
    return (
      <Page title="Hello, Johnny!">
        <Box>
          <P> Check your <RouterLink to="/upcoming"><Link>upcoming appointments</Link></RouterLink> and <RouterLink to="/history"><Link>account history.</Link></RouterLink> </P>

          <Box>
            <Flex flexColumn>
              <H3 style={{textAlign: 'center'}}>Family</H3>
              <ProgressBar total={100} current={90} color={colors.darkGreen} />
            </Flex>

            <Box flex justify="space-between">
              <Flex flexColumn style={{width: '45%'}}>
                <H3 style={{textAlign: 'center'}}>Jessica</H3>
                <ProgressBar total={100} current={35} color={colors.lightGreen} />
              </Flex>

              <Flex flexColumn style={{width: '45%'}}>
                <H3 style={{textAlign: 'center'}}>Johnny</H3>
                <ProgressBar total={100} current={45} color={colors.lightGreen} />
              </Flex>
            </Box>
          </Box>

          <Flex flexColumn>
            <Box mt={4}>
              <AccountData />
            </Box>
          </Flex>

          <Box mt={3} flex justify="flex-end">
            <Box mr={2} flex flexColumn> <Button>Make A Payment</Button> </Box>
            <Box ml={2} flex flexColumn> <Button>View Bills</Button> </Box>
          </Box>
        </Box>
      </Page>
    );
  }
}

export default Home;
