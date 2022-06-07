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
    font-size: 4rem;
    font-family: pokemon;
    color: white;
`;
const Par = styled.p`
    margin: 1rem 0;
    text-align: center;
    font-size: 1.6rem;
    color: #f2c105;
`;

const Div = styled.div`
    margin: 1rem 2rem;
    background: #385ca8;
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
    background-color: #4f618a;
    border-radius: 5px;
    color: white;
`;

const Input = styled.input`
    width: 43%;
    margin-left: 2rem;
    margin-bottom: 1rem;
    margin-top: 5px;
    padding: 0.5em 1.2em;
    border: 1px solid #000000;
    font-size: 15px;
    background-color: #DDD4E6;
    outline: none;
    border-radius: 5px;
    ::placeholder { 
    color: black;
    opacity: 1; 
}
`;
const CheckBox = styled.input`
    list-style: none;
    float: left;
    color: white;
`;



const Advertencia = styled.p`
    color: #f2c105;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
`;
const Button = styled.button`
    width: 100%;
    color: white;
    font-size: 20px;
    padding: 0.5em 1.2em;
    background: #385ca8;
    border: 2px solid;
    border-radius:30px;
    transition: 0.3s;
 
    :hover{
      color: #385ca8 ;
      box-shadow: 0 4px 16px rgb(56, 92, 168,1);
      transition: 0.3s;
      background:#f2c105;
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
    ]);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (name === '') {
      alert('El Nombre es obligatorio')
      return;
    }

    if (healthpoints === '') {
      alert('Los Puntos de Vida son obligatorios')
      return;
    }

    if (attack === '') {
      alert('El Ataque es obligatorio')
      return;
    }

    if (defense === '') {
      alert('La Defensa es obligatoria')
      return;
    }

    if (speed === '') {
      alert('La Velocidad es obligatoria')
      return;
    }

    if (height === '') {
      alert('La Altura es obligatorio')
      return;
    }

    if (weight === '') {
      alert('El Peso es obligatorio')
      return;
    }
    //name, healthpoints, attack, defense, speed, height, weight, img

    if (healthpoints < 0){
      alert('No puede ser negativos los puntos de vida')
      return;
    }

    if (healthpoints < 0){
      alert('No puede ser negativos los puntos de vida')
      return;
    }

    if (attack < 0){
      alert('El Ataque no puede ser negativo')
      return;
    }

    if (defense < 0){
      alert('La Defensa no puede ser negativa')
      return;
    }

    if (speed < 0){
      alert('La Velocidad no puede ser negativa')
      return;
    }

    if (height < 0){
      alert('La Altura no puede ser negativa')
      return;
    }

    if (weight < 0){
      alert('El Peso no puede ser negativo')
      return;
    }

    alert('El pokemon '+name+' Fue creado exitosamente')
    dispatch(createNewPokemon(pokemon, type))
    history.push('/pokemon');
  }

  return (
    <>
      <Header />
      <Container>

        <GlobalStyle />
        <Link to={'/pokemon'}>
           <But>&laquo; Volver</But>
        </Link>
        <Div>
          <Text>
            Crea tu Pokemon
        </Text>
          <form
            onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder="Nombre"
                onChange={handleChange}
                name='name'
                value={name}
              />

              <Input
                type="number"
                placeholder="Puntos de Vida"
                onChange={handleChange}
                name='healthpoints'
                value={healthpoints}
              />
              <Input
                type="number"
                placeholder="Ataque"
                onChange={handleChange}
                name='attack'
                value={attack}
              />
              <Input
                type="number"
                placeholder="Velocidad"
                onChange={handleChange}
                name='speed'
                value={speed}
              />

              <Input
                type="number"
                placeholder="Defensa"
                onChange={handleChange}
                name='defense'
                value={defense}
              />

              <Input
                type="number"
                placeholder="Altura"
                onChange={handleChange}
                name='height'
                value={height}
              />

              <Input
                type="number"
                placeholder="Peso"
                onChange={handleChange}
                name='weight'
                value={weight}
              />
              <Input
                type="url"
                placeholder="Url de Imagen"
                onChange={handleChange}
                name='img'
                value={img}
              />
            <Par>Elige un tipo</Par>

            {
              type.length < 2 ? <Advertencia>Puede seleccionar sólo dos</Advertencia> : null
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
            <Button type='submit'>Crear</Button>
          </form>
        </Div>

      </Container>
    </>
  );
}

export default NewPokemon;