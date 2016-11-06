import React, { Component, PropTypes } from 'react';
import Page from '../components/Page';
import Text from '../components/Text';
import AccountData from '../components/AccountData';
import { Flex, Box } from 'reflexbox';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const tableData = [
  { date: '11/05/2016', procedure: 'Blood Draw', total: 200, patientDue: 30, owed: 10 },
  { date: '11/06/2016', procedure: 'Nail Trim', total: 100, patientDue: 20, owed: 10 },
  { date: '11/06/2016', procedure: 'Annual Exam', total: 250, patientDue: 20, owed: 10 },
];

class Bills extends Component {
  render() {
    return (
      <Page title="Your Bills">
        <Box mt={2}>
          <Flex flexColumn style={{maxWidth: 800, margin: '0 auto'}}>
            <Table selectable={false}>
              <TableHeader disableRowCheckbox={false} displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                  <TableHeaderColumn tooltip="Date">Date</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Procedure">Procedure</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Total Amount">Total Amount</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Your Responsibility">Your Responsibility</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Still Owed">Still Owed</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false}>
                {tableData.map(data => (
                  <TableRow>
                    <TableRowColumn><Text>{data.date}</Text></TableRowColumn>
                    <TableRowColumn><Text>{data.procedure}</Text></TableRowColumn>
                    <TableRowColumn><Text>$ {data.total}</Text></TableRowColumn>
                    <TableRowColumn><Text>$ {data.patientDue}</Text></TableRowColumn>
                    <TableRowColumn><Text>$ {data.owed}</Text></TableRowColumn>
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

export default Bills;
