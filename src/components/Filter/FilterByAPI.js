import React from 'react';
import { useDispatch } from 'react-redux';
import { getAPIPokemons } from '../../actions/pokemonsAction';
import { But } from '../Layouts/Button';

const FilterByAPI = () => {

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(getAPIPokemons())
    }

    return (
        <form
            onSubmit={handleSubmit}>
            <But type='submit'>Original Pokemons</But>
        </form>
    );
}

export default FilterByAPI;