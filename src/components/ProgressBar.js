import React, { Component, PropTypes } from 'react';
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
    fontFamily: font.bodyText,
    fontWeight: font.thin,
    color: colors.white,
    position: 'relative',
    left: '-35',
  },
}

class ProgressBar extends Component {
  get widthPercentage() {
    const { current, total } = this.props;
    return current / total * 100;
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

  render() {
    return (
      <div style={this.backgroundStyle}>
        <div style={this.foregroundStyle} />
        <span style={sx.label}>
          {this.widthPercentage}%
        </span>
      </div>
    );
  }
}

ProgressBar.propTypes = propTypes;
export default ProgressBar;
