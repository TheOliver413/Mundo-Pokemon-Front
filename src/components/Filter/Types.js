import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getType } from '../../actions/typesAction';
import { getPokemonByType } from '../../actions/pokemonsAction';
import styled from 'styled-components';

const Button = styled.button`

color: white;
padding: 0.5em 1.2em;
background: #385ca8;
border: 2px solid;
border-radius: 0 30px 30px 0;
border-color: #385ca8;
position: relative;
transition: 0.3s;
display:inline-block;
    :hover{
      transform: translateY(0) scale(1.1);
      background-color: #071737;
      color: white;
    }
    @media (min-width: 768px) {
        font-size: 1.5rem;
    }
`;

const Select = styled.select`
color: white;
font-size: 15px;
padding:0.3em;
background: #385ca8;
border: 2px solid;
border-radius: 30px 0 0 30px;
border-color: #385ca8;
position: relative;
transition: 0.3s;
display:inline-block;

  `;
const Div = styled.div`
    margin: 1.5rem .5rem;
    @media (min-width: 768px) {
        font-size: 1.5rem;
 }
`;
const Types = () => {

  const [type, setType] = useState('')

  const dispatch = useDispatch();


  const types = useSelector(state => state.types);

  const handleChange = e => {
    setType({
      ...type,
      [e.target.name]: e.target.value
    })
  }


  useEffect(() => {
    dispatch(getType());
    dispatch(getPokemonByType(Object.values(type).toString()))
  }, [dispatch])


  const handleSubmit = e => {
    e.preventDefault();
    console.log(dispatch(getPokemonByType(Object.values(type).toString())))
  }
  return (
    <form
      onSubmit={handleSubmit}>
      <Div>
        <Select
          name='type'
          onChange={handleChange}
        >
          <option value="">-- Select a type --</option>
          {
            Array.isArray(types) ? types.map(type => (
              <option
                key={type.id}
                value={type.name}
              >{type.name}</option>
            )) : null
          }
        </Select>
        <Button type='submit'>Filt</Button>
      </Div>
    </form>

  );
}

export default Types;