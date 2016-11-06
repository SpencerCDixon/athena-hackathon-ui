import React, { Component, PropTypes } from 'react';
import { Flex, Box } from 'reflexbox';
import { colors } from '../styles';
import H3 from '../components/H3';
import Page from '../components/Page';
import P from '../components/P';
import Provider from '../components/Provider';
import Date from '../components/Date';
import { Link as RouterLink } from 'react-router';
import Link from '../components/Link';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';
import AccountData from '../components/AccountData';

class Home extends Component {
  render() {
    return (
      <Page title="Hello, Alice!">
        <Box>
          <P> Check your <RouterLink to="/upcoming"><Link>upcoming appointments</Link></RouterLink> and <RouterLink to="/history"><Link>account history.</Link></RouterLink> </P>

          <Box>
            <Flex flexColumn>
              <Flex align="center" justify="space-between">
              <Box>
                <Provider name={"Athena Health"}/>
              </Box>
              <Box>
                <Date date={"12/31/2016"}/>
              </Box>
              </Flex>
              <H3 style={{textAlign: 'center', marginTop: '0px'}}>Family</H3>
              <H3 style={{textAlign: 'center'}}>In Network</H3>
              <ProgressBar total={100} current={90} color={colors.darkGreen} />
            </Flex>

            <Flex flexColumn>
              <H3 style={{textAlign: 'center'}}>Out Of Network</H3>
              <ProgressBar total={1000} current={400} color={colors.lightGreen} />
            </Flex>

            {/*
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
            */}
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
