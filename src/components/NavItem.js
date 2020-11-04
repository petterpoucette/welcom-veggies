import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

class NavItem extends Component {
  render() {
    const Item = styled(NavLink)`
      font-family: 'Rubik', sans-serif;
      font-size: 10pt;
      font-weight: 300;
      letter-spacing: 1px;
      color: black;
      background-color: #ffd499;
      padding-left: 30px;
      padding-right: 30px;
      padding-top: 15px;
      padding-bottom: 15px;
      border-radius: 30px;
      text-decoration: none;
      margin-left: 10px;
      margin-right: 10px;
    `;
    return (
      <Item
        exact
        activeStyle={{
          backgroundColor: '#E88601',
          textDecoration: 'underline',
          color: 'white'
        }}
        to={this.props.tolink}
      >
        {this.props.name}
      </Item>
    );
  }
}

export default NavItem;
