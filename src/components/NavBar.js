import React, { Component } from 'react';
import styled from 'styled-components';
import NavItem from './NavItem';

class NavBar extends Component {
  render() {
    const NavBar = styled.div`
      height: auto;
      display: flex;
      position: absolute;
      transform: translate(-50%, 50%);
      bottom: 0;
      left: 50%;
    `;
    return (
      <NavBar>
        <NavItem tolink="/" name="Show all my favorites veggies" />
        <NavItem tolink="/favourites" name="Show only my hearted veggies" />
      </NavBar>
    );
  }
}

export default NavBar;
