import React from 'react';
import { useDispatch } from 'react-redux';
import { getOwnPokemons } from '../../actions/pokemonsAction';
import { But } from '../Layouts/Button';


const FilterByOwn = () => {

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(getOwnPokemons())
    }

    return (
        <form
            onSubmit={handleSubmit}>
            <But type='submit'>Creados</But>
        </form>

    );
}

export default FilterByOwn;