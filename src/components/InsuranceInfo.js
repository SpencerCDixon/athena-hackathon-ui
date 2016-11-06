import React from 'react';
import IconButton from 'material-ui/IconButton';

const sx = {
  smallIcon: {
    width: 14,
    height: 14,
    fontSize: '16px',
    color: '#8C8887'
  },
  small: {
    color: '#8C8887',
    width: 14,
    height: 14,
    padding: 0
  }
};

const InsuranceInfo = ({tooltip}) => (
    <IconButton
      iconClassName="material-icons" 
      tooltip={tooltip}
      tooltipPosition="right"
      iconStyle={sx.smallIcon}
      style={sx.small}
    >
    info
    </IconButton>
);

export default InsuranceInfo;
