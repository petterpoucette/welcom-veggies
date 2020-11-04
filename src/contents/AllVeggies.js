/**
 * View for all the veggies
 */

import React, { Component } from 'react';
import Veggies from '../components/Veggies';

class AllVeggies extends Component {
  render() {
    return <Veggies favourites={false} />;
  }
}

export default AllVeggies;
