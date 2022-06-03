import React from 'react';
import { useDispatch } from 'react-redux';
import { orderNameDesc } from '../../actions/pokemonsAction';
import { But } from '../Layouts/Button';


const OrderByNameAsc = () => {
  const dispatch = useDispatch();



  const handleSubmit = e => {
    e.preventDefault();
    dispatch(orderNameDesc())
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}>
        < But type='submit'>Name &darr;</ But>

      </form>

    </>
  );
}

export default OrderByNameAsc;