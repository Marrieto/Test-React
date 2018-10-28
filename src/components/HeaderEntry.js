import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyledHeaderEntry from './../Styles/HeaderEntry';

class HeaderEntry extends Component {

  constructor(props) {
    super(props);
  }
  

  render() {
    let { text } = this.props

    return (
      <StyledHeaderEntry>
        <h1>{text}</h1>
      </StyledHeaderEntry>
    );
  }
}

HeaderEntry.propTypes = {
  text: PropTypes.string.isRequired
};

export default HeaderEntry;