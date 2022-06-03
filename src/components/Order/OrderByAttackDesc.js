import React from 'react';
import { useDispatch } from 'react-redux';
import { orderAttackDesc } from '../../actions/pokemonsAction';
import { But } from '../Layouts/Button';


const OrderByAttackDesc = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(orderAttackDesc())
    }

    return (
            <form
                onSubmit={handleSubmit}>
                <But type='submit' >Attack &darr;</But>
            </form>
    );
}

export default OrderByAttackDesc;