import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NamePokemon from './NamePokemon';
import Header from '../Layouts/Header';
import Pokemon from './Pokemon';
import Pagination from '../Layouts/Pagination';
import { getPokemonsAction } from '../../actions/pokemonsAction';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import OrderByNameAsc from '../Order/OrderByNameAsc';
import OrderByNameDesc from '../Order/OrderByNameDesc';

import OrderByAttackAsc from '../Order/OrderByAttackAsc';
import OrderByAttackDesc from '../Order/OrderByAttackDesc';

import FilterByOwn from '../Filter/FilterByOwn';
import FilterByAPI from '../Filter/FilterByAPI';
import Types from '../Filter/Types';
import ResetFilter from '../Filter/ResetFilter';

import { createGlobalStyle } from 'styled-components'

import Loading from '../Layouts/Loading';


const GlobalStyle = createGlobalStyle`
  body {
    background: #B0A8B9;
  }
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    margin: 2rem;
    @media (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
        margin: 4rem;
    }
`;

const Box = styled.div`
  display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1rem;
    @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 2r;
 
   
    margin: 1.5rem; 
}
`;
const Fieldset = styled.fieldset`
    display: grid;
    grid-template-columns:1fr;
    column-gap: 1rem;
    background-color: #4B4453;
    border: 1px solid black;

    @media (min-width: 768px) {
      display: flex;
      justify-content: center;

   
    }
`;

const Text = styled.p`
    text-decoration: underline #C197FF;
    margin: 1rem 1rem;
    text-align: center;
    padding: 1rem;
    font-size: 1.5rem;
    border: 1px solid #000000;
    border-radius:5px;
    box-sizing: border-box;
    color:#000000;
    background-color: #C197FF;
    :hover{
        transform: translateY(0) scale(1.1);
        background-color: #95E06C;
        text-decoration: underline #95E06C;
    }
    @media (min-width: 768px) {
      font-size: 1.3rem;
      padding: 1rem 1rem;
      position: absolute;
      right: 1%;
      top: 0;
     
    }
    
`;

const Pokemons = () => {

  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(12)

  useEffect(() => {
    dispatch(getPokemonsAction());
    // eslint-disable-next-line
  }, [dispatch])

  const pokemons = useSelector(state => state.pokemons);

  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  //const currentPokemon = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Box>
        <Fieldset>
          <OrderByNameAsc />
          <OrderByNameDesc />
          <OrderByAttackAsc />
          <OrderByAttackDesc />

        </Fieldset>
        <Fieldset>
          <FilterByOwn />
          <FilterByAPI />
          <Types />
          <ResetFilter />
        </Fieldset>
      </Box>

      <Link to={'/new'}>
        <Text>New Pokemon</Text>
      </Link>
      <NamePokemon />

      <Container>
        {
          Array.isArray(pokemons) ?
            pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon).map(pokemon => (

              <Pokemon
                key={pokemon.id}
                pokemon={pokemon}
              />
            ))
            : <Loading />
        }
      </Container>
      {
        Array.isArray(pokemons)  && pokemons.length <12 ? null 
        :
         Array.isArray(pokemons) ?
            <Pagination
            pokemonsPerPage={pokemonsPerPage}
            paginate={paginate}
          />
          : null
        
         
      }

    </>
  )
}
export default Pokemons;