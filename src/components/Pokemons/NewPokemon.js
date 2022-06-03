import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewPokemon } from '../../actions/pokemonsAction';
import { getType } from '../../actions/typesAction';
import Header from '../Layouts/Header';
import styled from 'styled-components';

import myImage from '../../img/pika.png';

import { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom';



const GlobalStyle = createGlobalStyle`
  body {
    background-color: #D9EDDF;
  }
`;
const Image = styled.img`
    width: 200px;
    height: 200px;
    :hover{
        transform: translateY(0) scale(1.1);
    }
    @media (min-width: 768px) {
      width: 480px;
      height: 500px;
 }
`;

const Container = styled.div`
    @media (min-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
}
  
`;
const DivTwo = styled.div`
    margin: .5rem;
    font-size: 1.3rem;
`;
const Text = styled.h2`
    margin: 1rem 0;
    text-align: center;
    font-weight: 900;
    font-size: 2rem;
`;
const Par = styled.p`
    margin: 1rem 0;
    text-align: center;
    font-size: 1.6rem;
`;

const Div = styled.div`
    margin: 1rem 2rem;
    background-color: #FEFEDF;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    @media (min-width: 768px) {
      width: 500px;
    }
`;
const Type = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 1.5rem;
    background-color: #C493FF;
    border-radius: 5px;

`;

const Input = styled.input`
    margin-left: 2rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    padding: .5rem;
    background-color: #C493FF;
    border: 1px solid #845EC2;
    border-radius: 5px;
    ::placeholder { 
    color: black;
    opacity: 1; 
}
`;
const CheckBox = styled.input`
    list-style: none;
    float: left;
`;



const Advertencia = styled.p`
    color: red;
    font-weight: 700;
    text-align: center;
`;
const Button = styled.button`
    background-color: #00C9A7;
    margin-top: 1rem;
    padding: 1rem 3rem;
    border-radius: 7px;
    font-size: 1.5rem;
    font-weight: 700;
    color: black;
    border: 1px solid black;
    text-decoration: none;
    margin-left: 35%;
    :hover{
        transform: translateY(0) scale(1.1);
        background-color: #F6F83E;
    }
    @media (min-width: 768px) {
    position: absolute;
    top: 87%;
    right: 65%;
    }
`;


const But = styled.button`
    margin-top: 1rem;
    border-radius: 7px;
    font-size: 1.5rem;
    font-weight: 700;
    background-color: #00C9A7;
    color: black;
    border: 1px solid black;
    padding: 1rem 2rem;
    :hover{
        transform: translateY(0) scale(1.1);
        background-color: #F6F83E;
    }
    position: absolute;
        left: 1%;
        top: 0;
`;
const NewPokemon = ({ history }) => {

  const dispatch = useDispatch();

  const types = useSelector(state => state.types);

  useEffect(() => {
    dispatch(getType());
  }, [dispatch])

  const [pokemon, setPokemon] = useState({
    name: '',
    healthpoints: null,
    attack: null,
    defense: null,
    speed: null,
    height: null,
    weight: null,
    img: ''
  })


  const [type, setType] = useState([])

  const { name, healthpoints, attack, defense, speed, height, weight, img } = pokemon;

  const handleChange = e => {
    setPokemon({
      ...pokemon,
      [e.target.name]: e.target.value
    })
  }
  const handleType = e => {
    setType([
      ...type,
      [e.target.name] = e.target.value
    ])
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (name === '') {
      alert('The name is obligatory')
      return;
    }
    alert('Pokemon Created!')
    dispatch(createNewPokemon(pokemon, type))
    history.push('/pokemon');
  }

  return (
    <>
      <Header />
      <Container>

        <GlobalStyle />
        <Link to={'/pokemon'}>
           <But>&laquo; BACK</But>
        </Link>
        <Div>
          <Text>
            Create your Pokemon
        </Text>
          <form
            onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder="Name"
                onChange={handleChange}
                name='name'
                value={name}
              />

              <Input
                type="number"
                placeholder="Health Points"
                onChange={handleChange}
                name='healthpoints'
                value={healthpoints}
              />
              <Input
                type="number"
                placeholder="Attack"
                onChange={handleChange}
                name='attack'
                value={attack}
              />
              <Input
                type="number"
                placeholder="Speed"
                onChange={handleChange}
                name='speed'
                value={speed}
              />

              <Input
                type="number"
                placeholder="Defense"
                onChange={handleChange}
                name='defense'
                value={defense}
              />

              <Input
                type="number"
                placeholder="Height"
                onChange={handleChange}
                name='height'
                value={height}
              />

              <Input
                type="number"
                placeholder="Weight"
                onChange={handleChange}
                name='weight'
                value={weight}
              />
              <Input
                type="url"
                placeholder="Image url"
                onChange={handleChange}
                name='img'
                value={img}
              />
            <Par>Choose a type</Par>

            {
              type.length < 2 ? <Advertencia>You can select only two</Advertencia> : null
            }

            <Type>
              {Array.isArray(types) ? types.map(type => (
                  <DivTwo>
                    {type.name}
                    <CheckBox
                      key={type.id}
                      type="checkbox"
                      value={type.name}
                      name='type'
                      onChange={handleType}
                    />
                  </DivTwo>
                )) : null
              }
            </Type>
            <Button type='submit'>Create</Button>
          </form>
        </Div>
        <Image src={`${myImage}`} alt="Pokemon" />
      </Container>
    </>
  );
}

export default NewPokemon;