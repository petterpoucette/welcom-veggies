import { BrowserRouter as Router, Route } from 'react-router-dom';
import AllVeggies from './contents/AllVeggies';
import FavoriteVeggies from './contents/FavouriteVeggies';
import Header from './components/Header';
import styled from 'styled-components';

function App() {
  const App = styled.div`
    margin: 0 auto;
    text-align: center;
    background-color: #fbfbf0;
    padding-bottom: 50px;
  `;
  return (
    <Router>
      <App>
        <Header />
        <Route exact path="/" component={AllVeggies} />
        <Route exact path="/favourites" component={FavoriteVeggies} />
      </App>
    </Router>
  );
}

export default App;
