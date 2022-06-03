import {
    GET_POKEMONS_SUCCESS,
    GET_POKEMON_DETAIL,
    GET_POKEMON_NAME,
    CREATE_POKEMON,
    CREATE_POKEMON_SUCCESS,
    CREATE_POKEMON_ERROR,
    ORDER_NAME_ASC,
    ORDER_NAME_DESC,
    ORDER_ATTACK_ASC,
    ORDER_ATTACK_DESC,
    FILT_API_POKEMON,
    FILT_OWN_POKEMON,
    GET_TYPES_POKEMONS,

} from '../types';

import clientAxios from '../config/axios';

export function getPokemonsAction() {
    return async (dispatch) => {
        try {
            const res = await clientAxios.get('/pokemon/');
            dispatch({
                type: GET_POKEMONS_SUCCESS,
                payload: res.data
            });
        } catch (error) {
            // if (error.response?.status !== 404) alert("Something went wrong")
            dispatch({ type: GET_POKEMONS_SUCCESS, payload: null })
        }
    }
}


export function getPokemonDetail(id) {
    return async (dispatch) => {
        try {
            const res = await clientAxios.get(`/pokemon/${id}`);
            dispatch({
                type: GET_POKEMON_DETAIL,
                payload: res.data
            });
        } catch (error) {
            if (error.response?.status !== 404) alert("Something went wrong")
            dispatch({ type: GET_POKEMON_DETAIL, payload: null })
        }
    }
}



export function getPokemonName(name) {
    return async (dispatch) => {
        try {
            const res = await clientAxios.get(`/pokemon/${name}`);
            dispatch({
                type: GET_POKEMON_NAME,
                payload: res.data
            });
        } catch (error) {
            console.log(error)
        }
    }
}



export function createNewPokemon(pokemon, type) {
    return async (dispatch) => {

        dispatch(addPokemon());
        try {
            await clientAxios.post('/pokemon', { ...pokemon, type });

            dispatch(addPokemonSuccess(pokemon, type))
        } catch (error) {
            console.log(error);

            dispatch(addPokemonError(true));
        }
    }
}

export const addPokemon = () => ({
    type: CREATE_POKEMON,
    payload: true
});
const addPokemonSuccess = (pokemon, type) => ({
    type: CREATE_POKEMON_SUCCESS,
    payload: {
        pokemon,
        type
    }
});

const addPokemonError = estado => ({
    type: CREATE_POKEMON_ERROR,
    payload: estado
});


export function orderNameAsc() {
    return async (dispatch) => {
        try {
            const res = await clientAxios.get('/pokemon/');
            dispatch({
                type: ORDER_NAME_ASC,
                payload: res.data
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export function orderNameDesc() {
    return async (dispatch) => {
        try {
            const res = await clientAxios.get('/pokemon/');
            dispatch({
                type: ORDER_NAME_DESC,
                payload: res.data
            });

        } catch (error) {
            console.log(error)
        }
    }
}


export function orderAttackAsc() {
    return async (dispatch) => {
        try {
            const res = await clientAxios.get('/pokemon/orderAsc');
            dispatch({
                type: ORDER_ATTACK_ASC,
                payload: res.data
            });

        } catch (error) {
            console.log(error)
        }
    }
}

export function orderAttackDesc() {
    return async (dispatch) => {
        try {
            const res = await clientAxios.get('/pokemon/orderDesc');
            dispatch({
                type: ORDER_ATTACK_DESC,
                payload: res.data
            });

        } catch (error) {
            console.log(error)
        }
    }
}

export function getAPIPokemons() {
    return async (dispatch) => {
        try {
            const res = await clientAxios.get('/pokemon/filtAPI');
            dispatch({
                type: FILT_API_POKEMON,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}


export function getOwnPokemons() {
    return async (dispatch) => {
        try {
            const res = await clientAxios.get('/pokemon/filtOwn');
            dispatch({
                type: FILT_OWN_POKEMON,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export function getPokemonByType(tipo) {
    return async (dispatch) => {
        try {

            dispatch({
                type: GET_TYPES_POKEMONS,
                payload: tipo
            })
        } catch (error) {
            console.log(error)
        }
    }
}

