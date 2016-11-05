import React, { Component, PropTypes } from 'react';
import { font, colors } from '../styles';

const propTypes = {
  total: PropTypes.number,
  current: PropTypes.number,
  title: PropTypes.string,
};

const sx = {
  bg: {
    background: 'rgba(22,102,120,.35)',
    width: '100%',
    height: 40,
    display: 'flex',
    alignItems: 'center',
  },
  fg: {
    background: colors.darkGreen,
    height: 32,
    marginLeft: 4,
  },
  label: {
    fontFamily: font.bodyText,
    fontWeigth: font.thin,
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
    };
  }

  render() {
    return (
      <div>
        <div style={sx.bg}>
          <div style={this.foregroundStyle} />
          <span style={sx.label}>
            {this.widthPercentage}%
          </span>
        </div>
      </div>
    );
  }
}

ProgressBar.propTypes = propTypes;
export default ProgressBar;
