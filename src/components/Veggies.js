/**
 * The component for all veggies
 */

import React, { Component } from 'react';
import styled from 'styled-components';
import service from '../service';

import Veggie from './Veggie';

class Veggies extends Component {
  state = {
    veggies: []
  };

  /**
   * Setting the veggies state on mount
   */
  componentDidMount() {
    this.setVeggiesState();
  }

  /**
   * Function the setts the veggies state from data from the database
   */
  setVeggiesState() {
    service.getVeggies().then((response) => {
      var veggies = response.data;
      if (this.props.favourites) {
        //favourite
        veggies = veggies.filter((veggie) => veggie.favourite);
      }
      this.setState({ veggies });
    });
  }

  /**
   * Toggels if a veggie is favourite or not an updates the value in the
   * database and then updates the state with data from the database
   */
  toggleFav = (veggie) => {
    veggie.favourite = !veggie.favourite;
    service.updateVeggie(veggie).then(() => {
      this.setVeggiesState();
    });
  };

  render() {
    const Grid = styled.div`
      width: 65vw;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-flow: row dense;
      grid-gap: 35px;
      margin: 0 auto;
      margin-top: 100px;
    `;
    return (
      <Grid>
        {this.state.veggies.map((veggie) => (
          <Veggie
            key={veggie.id}
            veggie={veggie}
            toggleFav={() => this.toggleFav(veggie)}
          />
        ))}
      </Grid>
    );
  }
}

export default Veggies;
