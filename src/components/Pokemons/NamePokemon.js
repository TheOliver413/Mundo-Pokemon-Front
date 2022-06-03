import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemonName } from '../../actions/pokemonsAction';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const Bar = styled.input`   
    padding: 1rem 1rem;
    border: 1px solid #000000;
    border-radius:5px;
    font-size: 1.3rem;
    background-color: #DDD4E6;
    :hover{
      background-color: white;
    }
`;

const Button = styled.button`  
    background-color: #C197FF;
    border: 1px solid #000000;
    border-radius:5px;
    font-size: 1.3rem;
    padding: 1rem 1rem;
    :hover{
        background-color: #95E06C;
        text-decoration: underline #95E06C;
    }
`;

const Container = styled.div`  
    padding: 1rem 1rem;
    text-align: center;
    @media (min-width: 768px) {
    position: absolute;
    left: 1%;
    top: 0;
    }
`;


const NamePokemon = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const [nombre, setName] = useState({
    name: ''
  });
  //funcion que coloca los elementos en el state
  const handleChange = e => {
    setName({
      ...nombre,
      [e.target.name]: e.target.value
    })
  }

  const { name } = nombre;

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(getPokemonName(name))
    history.push(`/pokemon/${name}`);
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}>
        <Container>
          <Bar
            name="name"
            type="text"
            value={name}
            placeholder="Type to search"
            onChange={handleChange}
          />
          <Button type='submit'>Search</Button>
        </Container>
      </form>
    </div>
  );
}

export default NamePokemon;
















