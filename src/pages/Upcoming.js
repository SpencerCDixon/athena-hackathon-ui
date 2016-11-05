import React, { Component, PropTypes } from 'react';
import Page from '../components/Page';

class Upcoming extends Component {
  render() {
    return (
      <Page title="Upcoming">
        {this.props.children}
      </Page>
    );
  }
}

export default Upcoming;
