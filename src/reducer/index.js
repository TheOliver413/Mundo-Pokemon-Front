import {
    GET_POKEMONS_SUCCESS,
    GET_POKEMON_DETAIL,
    GET_POKEMON_NAME,
    GET_TYPES,
    GET_TYPES_POKEMONS,
    CREATE_POKEMON,
    CREATE_POKEMON_SUCCESS,
    CREATE_POKEMON_ERROR,
    ORDER_NAME_ASC,
    ORDER_NAME_DESC,
    ORDER_ATTACK_ASC,
    ORDER_ATTACK_DESC,
    FILT_API_POKEMON,
    FILT_OWN_POKEMON,

} from '../types';

const initialState = {
    pokemons: undefined,
    error: null,
    loading: false,
    pokemonDetail: undefined,
    types: undefined,
    pokemonName: undefined,
}



function rootReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_POKEMON:
            return {
                ...state,
                loading: action.payload
            }
        case FILT_OWN_POKEMON:
        case FILT_API_POKEMON:
        case ORDER_ATTACK_DESC:
        case ORDER_ATTACK_ASC:
        case GET_POKEMONS_SUCCESS:
            return {
                ...state,
                pokemons: action.payload
            }
        case CREATE_POKEMON_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case CREATE_POKEMON_SUCCESS:
            return {
                ...state,
                loading: false,
                pokemons: action.payload
            }
        case GET_POKEMON_DETAIL:
            return {
                ...state,
                pokemonDetail: action.payload
            }

        case GET_POKEMON_NAME:
            return {
                ...state,
                pokemonName: action.payload
            }

        case GET_TYPES:
            return {
                ...state,
                types: action.payload
            }
        case GET_TYPES_POKEMONS:
            return {
                ...state,
                pokemons: state.pokemons.filter(function (el) {
                    if (el.type.length === 1) {
                        return el.type[0].includes(action.payload)
                    } else if (el.type.length === 2) {
                        return el.type[0].includes(action.payload) || el.type[1].includes(action.payload)
                    } else {
                        return null
                    }
                })
            }

        case ORDER_NAME_ASC: {
            return {
                ...state,
                pokemons: action.payload.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
            }
        }
        case ORDER_NAME_DESC: {
            return {
                ...state,
                pokemons: action.payload.sort((a, b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0))
            }
        }
        default:
            return state;
    }
}

export default rootReducer;