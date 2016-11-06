import React, { Component, PropTypes } from 'react';
import { Flex, Box } from 'reflexbox';
import { colors } from '../styles';
import H3 from '../components/H3';
import Page from '../components/Page';
import P from '../components/P';
import InsuranceHeading from '../components/InsuranceHeading';
import DateHeading from '../components/DateHeading';
import { Link as RouterLink } from 'react-router';
import Link from '../components/Link';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';
import AccountData from '../components/AccountData';
import StripeCheckout from 'react-stripe-checkout';
import { FlatButton } from 'material-ui';

class Home extends Component {
  handleFilterToggle = (filter) => {
    this.props.changeFilter(filter);
  }

  render() {
    const {
      inNetwork,
      outNetwork,
    } = this.props.data;
    const { filter, insurance } = this.props;
    console.log(this.props);

    return (
      <Page title="Hello, Alice!">
        <Box>
          <P> Check your <RouterLink to="/upcoming"><Link>upcoming appointments</Link></RouterLink> and <RouterLink to="/bills"><Link>outstanding bills</Link></RouterLink> </P>

          <Flex>
            <Box>
              <InsuranceHeading name={insurance.insuranceplanname} tooltip={insurance.insurancephone}/>
            </Box>
            <Box flexAuto />
            <Box>
              <FlatButton label="Family" disabled={filter === 'family'} onClick={this.handleFilterToggle.bind(this, 'family')}/>
              <FlatButton label="Individual" disabled={filter === 'individual'} onClick={this.handleFilterToggle.bind(this, 'individual')}/>
            </Box>
          </Flex>

          <Box>
            <Flex flexColumn>
              <H3 style={{textAlign: 'center'}}>In Network</H3>
              <ProgressBar total={inNetwork.total} current={inNetwork.current} color={colors.darkGreen} />
            </Flex>

            <Flex flexColumn>
              <H3 style={{textAlign: 'center'}}>Out Of Network</H3>
              <ProgressBar total={outNetwork.total} current={outNetwork.current} color={colors.lightGreen} />
            </Flex>
          </Box>

          <Flex flexColumn>
            <Box mt={4}>
              <AccountData />
            </Box>
          </Flex>

          <Box mt={3} flex justify="flex-end">
            <Box mr={2} flex flexColumn> 
              <StripeCheckout
                name="Deductr"
                amount={25500}
              >
                <Button onClick={this.handleStripe}>Make A Payment</Button>
              </StripeCheckout>
            </Box>
            <Box ml={2} flex flexColumn> 
              <RouterLink to="/bills"> <Button>View Bills</Button> </RouterLink>
            </Box>
          </Box>
        </Box>
      </Page>
    );
  }
}

export default Home;
