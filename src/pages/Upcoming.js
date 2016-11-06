import React, { Component, PropTypes } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import { Flex, Box } from 'reflexbox';
import Text from '../components/Text';
import Page from '../components/Page';
import P from '../components/P';
import kelly from '../images/kelly.jpg';
import barbara from '../images/barbara.jpg';
import { Avatar } from 'material-ui';
import dan from '../images/dan.jpg';

const appointments = [
  { date: '11/05/2016', provider: 'Kelly Hayes, MD', outOfPocket: 'Applies', img: kelly },
  { date: '11/06/2016', provider: 'Dan Smith, MD', outOfPocket: 'Does Not Apply', img: dan },
  { date: '12/10/2016', provider: 'Barbara Johnson, MD', outOfPocket: 'Applies', img: barbara },
];

class Upcoming extends Component {
  render() {
    return (
      <Page title="Upcoming Appointments">
        <Box>
          <P>You have 3 upcoming apointments.</P>
        </Box>
        <Box mt={2}>
          <Flex flexColumn style={{maxWidth: 800, margin: '0 auto'}}>
            <Table selectable={false}>
              <TableHeader disableRowCheckbox={false} displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                  <TableHeaderColumn>Date</TableHeaderColumn>
                  <TableHeaderColumn>Provider</TableHeaderColumn>
                  <TableHeaderColumn>Out-of-Pocket Costs</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false} adjustForCheckbox={true}>
                {appointments.map(apt => (
                  <TableRow>
                    <TableRowColumn><Text>{apt.date}</Text></TableRowColumn>
                    <TableRowColumn><Avatar src={apt.img} style={{marginRight: 30}} size={30}/><Text>{apt.provider}</Text></TableRowColumn>
                    <TableRowColumn><Text>{apt.outOfPocket}</Text></TableRowColumn>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Flex>
        </Box>
      </Page>
    );
  }
}

export default Upcoming;
