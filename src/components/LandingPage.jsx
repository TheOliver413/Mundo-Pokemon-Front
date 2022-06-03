import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <Fragment>
      <div className='Wrapper'>
        <h1 className='title'>¡Bienvenidos!</h1>
        <h1 className='Phrase'>Conoce a Tu Pokémon Favorito o Crea el Tuyo</h1>

        <Link to={'/pokemon'}>
          <button className='button'>Inicio</button>
        </Link>
      </div>
    </Fragment>
  );
}

export default LandingPage;