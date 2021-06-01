/**
 * Reducers
 * Lizeth Margarita Garcia Arteaga
 * Mayo 2021
 */
import {
  GET_POKEMONES,
  ADD_FAVORITOS
} from './actions';

const initialState = {
  listaPokemones: [],
  pokemones: []
};

//Funciones agregar y agregar favoritos
function pokemonesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONES:
      return { ...state, listaPokemones: action.payload };
    case ADD_FAVORITOS:
      return { ...state, pokemones: [...state.pokemones, action.payload] };
    default:
      return state;
  }
}

export default pokemonesReducer;
