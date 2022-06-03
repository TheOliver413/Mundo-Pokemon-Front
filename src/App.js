import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import IdPokemon from './components/Pokemons/IdPokemon';
import NamePokemon from './components/Pokemons/NamePokemon';
import Pokemons from './components/Pokemons/Pokemons';

import { Provider } from 'react-redux';
import store from './store';
import NewPokemon from './components/Pokemons/NewPokemon';


function App() {
  return (
    <Router>
      <Provider store={store}> 
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/pokemon' component={Pokemons} />
          <Route exact path='/pokemon/:id' component={IdPokemon} />
          <Route exact path='/pokemon/:name' component={NamePokemon} />
          <Route exact path='/new' component={NewPokemon} />
         </ Switch>
        </Provider>
    </Router>

  );
}

export default App;
