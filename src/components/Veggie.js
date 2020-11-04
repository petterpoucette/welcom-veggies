/**
 * The component for a single veggie item
 */

import React, { Component } from 'react';
import styled from 'styled-components';
import { Heart, HeartFill } from '@styled-icons/bootstrap';

class Veggie extends Component {
  /**
   * Determines is a image is wider than then higher
   */
  isWide(src) {
    var img = new Image();
    img.src = src;
    return img.width > img.height;
  }
  render() {
    const Veg = styled.div.attrs((props) => ({
      size: props.size || 'span 1',
      img: props.img
    }))`
      position: relative;
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      grid-column: ${(props) => props.size};
      max-width: 100%;
      max-height: 100%;
      width: auto;
      height: 380px;
      padding-left: 20px;
      padding-bottom: 20px;
      background-image: url(${(props) => props.img});
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      text-align: left;
    `;
    const VegTitle = styled.h2`
      font-family: 'Rubik', sans-serif;
      font-size: 12pt;
      font-weight: 500;
      color: #fbfbf0;
      margin: 0;
      margin-bottom: 10px;
    `;
    const VegDesc = styled.p`
      font-family: 'Rubik', sans-serif;
      font-size: 10pt;
      font-weight: 100;
      color: #fbfbf0;
      margin: 0;
    `;
    const NotFav = styled(Heart)`
      color: white;
      width: 20px;
      height: auto;
      position: absolute;
      top: 10px;
      left: 10px;
      &:hover {
        cursor: pointer;
      }
    `;
    const Fav = styled(HeartFill)`
      color: white;
      width: 20px;
      height: auto;
      position: absolute;
      top: 10px;
      left: 10px;
      &:hover {
        cursor: pointer;
      }
    `;
    return (
      <Veg
        size={this.isWide(this.props.veggie.img) ? 'span 2' : undefined}
        key={this.props.veggie.id}
        img={this.props.veggie.img}
      >
        <VegTitle>{this.props.veggie.title}</VegTitle>
        <VegDesc>{this.props.veggie.description}</VegDesc>
        {this.props.veggie.favourite ? (
          <Fav onClick={this.props.toggleFav} />
        ) : (
          <NotFav onClick={this.props.toggleFav} />
        )}
      </Veg>
    );
  }
}

export default Veggie;
