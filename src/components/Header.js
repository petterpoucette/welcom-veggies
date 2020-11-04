/**
 * Header component for the page
 */

import React, { Component } from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import Radish from '../assets/images/Radish.svg';

class Header extends Component {
  render() {
    const Header = styled.div`
      background-color: #122b0b;
      position: relative;
      height: 300px;
      margin-bottom: 30px;
    `;
    const Title = styled.h1`
      color: #fbfbf0;
      position: absolute;
      text-align: center;
      width: 100%;
      font-size: 40pt;
      transform: translateY(-100%);
      top: 50%;
      font-family: 'Noto Serif', serif;
      z-index: 2;
    `;

    const GgImg = styled.img`
      position: absolute;
      transform: translate(-50%, -60%);
      top: 50%;
      left: 50%;
      z-index: 1;
      height: 200px;
      width: auto;
    `;
    return (
      <Header>
        <Title>My favourite veggies</Title>
        <GgImg src={Radish} />
        <NavBar />
      </Header>
    );
  }
}

export default Header;
