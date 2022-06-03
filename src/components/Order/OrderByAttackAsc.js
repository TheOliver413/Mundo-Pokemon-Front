import React from 'react';
import { useDispatch } from 'react-redux';
import { orderAttackAsc } from '../../actions/pokemonsAction';
import { But } from '../Layouts/Button';

const OrderByAttackAsc = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(orderAttackAsc())
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}>
                <But type='submit'>Attack &uarr;</But>

            </form>

        </>
    );
}

export default OrderByAttackAsc;