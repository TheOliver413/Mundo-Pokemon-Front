import React from 'react';
import { useDispatch } from 'react-redux';
import { getPokemonsAction } from '../../actions/pokemonsAction';
import { But } from '../Layouts/Button';

const ResetFilter = () => {

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(getPokemonsAction())
  }

  return (

    <form
      onSubmit={handleSubmit}>
      <But type='submit'>Reset Filters</But>
    </form>

  );
}

export default ResetFilter;