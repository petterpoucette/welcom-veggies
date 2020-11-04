/**
 * View for the favourite the veggies
 */

import React, { Component } from 'react';
import Veggies from '../components/Veggies';

class FavouriteVeggies extends Component {
  render() {
    return <Veggies favourites={true} />;
  }
}

export default FavouriteVeggies;
