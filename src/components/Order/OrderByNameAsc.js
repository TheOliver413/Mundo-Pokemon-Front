import React  from 'react';
import { useDispatch } from 'react-redux';
import { orderNameAsc } from '../../actions/pokemonsAction';
import { But } from '../Layouts/Button';


const OrderByNameAsc = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(orderNameAsc())
    }
    return (
        <>
            <form
                onSubmit={handleSubmit}>
                < But type='submit'>Name &uarr;</ But>
            </form>

        </>
    );
}

export default OrderByNameAsc;