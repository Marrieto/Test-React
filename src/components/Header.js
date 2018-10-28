import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyledHeader from '../Styles/Header';
import HeaderEntry from './HeaderEntry';

// Header.PropTypes = {
//   title: PropTypes.string.isRequired,
//   theme: propTypes.string
// };

const defaultProps = {
  title: 'Default title',
  theme: 'light',
  menuEntries: ['Choice1', 'Choice2']
}

class Header extends Component {

  constructor(props) {
    super(props);
  }
  

  render() {
    let { title, theme, menuEntries} = this.props

    return (
      <StyledHeader>
        <h1> {title} </h1>
        {menuEntries.map((entry) => {
          return (
            <HeaderEntry text={entry}/>
          )
        })}
      </StyledHeader>
    );
  }
}

Header.defaultProps = defaultProps

export default Header;