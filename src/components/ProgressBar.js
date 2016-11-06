import React, { Component, PropTypes } from 'react';
import Text from './Text';
import formatUSD from 'format-usd';
import { font, colors } from '../styles';
import color from 'color';

const propTypes = {
  total: PropTypes.number,
  current: PropTypes.number,
  title: PropTypes.string,
  color: PropTypes.string,
};

const sx = {
  bg: {
    width: '100%',
    height: 40,
    display: 'flex',
    alignItems: 'center',
  },
  fg: {
    height: 32,
    marginLeft: 4,
  },
  label: {
    color: colors.white,
    position: 'relative',
    left: -35,
  },
  total: {
    position: 'absolute',
    left: '101%',
    top: '20%',
  },
  container: {
    position: 'relative',
  },
  current: {
    position: 'aboslute',
  },
}

class ProgressBar extends Component {
  get widthPercentage() {
    const { current, total } = this.props;
    return Math.round(current / total * 100);
  }

  get foregroundStyle() {
    return {
      ...sx.fg,
      width: `${this.widthPercentage}%`,
      background: this.props.color,
    };
  }

  get backgroundStyle() {
    return {
      ...sx.bg,
      background: color(this.props.color).alpha(0.35).hslString(),
    }
  }

  get currentStyle() {
    return {
      position: 'absolute',
      left: `${this.widthPercentage}%`,
    }
  }

  render() {
    return (
      <div style={sx.container}>
        <div style={this.backgroundStyle}>
          <div style={this.foregroundStyle} />
          <span style={sx.label}>
            <Text>{this.widthPercentage}%</Text>
          </span>
        </div>
        <span style={sx.total}>
          <Text>{formatUSD({amount: this.props.total})}</Text>
        </span>
        <span style={this.currentStyle}>
          <Text>{formatUSD({amount: this.props.current})}</Text>
        </span>
      </div>
    );
  }
}

ProgressBar.propTypes = propTypes;
export default ProgressBar;
