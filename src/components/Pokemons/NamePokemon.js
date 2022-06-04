import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemonName } from '../../actions/pokemonsAction';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const Bar = styled.input`   
  margin-top: 5px;
  padding: 0.5em 1.2em;
  border: 1px solid #000000;
  font-size: 20px;
  background-color: #DDD4E6;
  outline: none;
  :hover{
    background-color: white;
  }
`;

const Button = styled.button`  
  margin-top: 5px;
  color: white;
  font-size: 20px;
  padding: 0.5em 1.2em;
  background: #385ca8;
  border: 2px solid;
  border-radius: 0 30px 30px 0;
  border-color: #385ca8;
  position: relative;
  transition: 0.3s;
  :hover{
    color: #385ca8 ;
    box-shadow: 0 4px 16px rgb(56, 92, 168,1);
    transition: 0.3s;
    background:#f2c105;
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
            placeholder="Escribe Para Buscar"
            onChange={handleChange}
          />
          <Button type='submit'>Buscar</Button>
        </Container>
      </form>
    </div>
  );
}

export default NamePokemon;
















