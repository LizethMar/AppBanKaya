/**
 * Conexión con el servicio Base para la consulta de Pokemones
 * Lizeth Margarita Garcia Arteaga
 * Mayo 2021
 */
import axios from 'axios';
import { URL_BASE_POKEMON } from '../config/urls';

export const GET_POKEMONES = 'GET_POKEMONES';
export const ADD_FAVORITOS = 'ADD_FAVORITOS';

//Obtencion de colores e informacion
export const getPokemones = () => {
  try {
    return async dispatch => {
      const response = await axios.get(`${URL_BASE_POKEMON}`);
      
      if (response.data) {

        var auxData = response.data.results;
        var datosUrl = [];
        var final = [];

        for(var i=0; i<auxData.length; i++) {
          const responseDatos = await axios.get(auxData[i].url);
          datosUrl.push(responseDatos.data);
        }

        for(var i=0; i<datosUrl.length; i++) {
          for(var j=0; j< datosUrl[i].pokemon_species.length; j++) {
            var myObj = new Object();
            myObj.color = datosUrl[i].name;
            myObj.id = datosUrl[i].pokemon_species[j].url.split('/')[6];
            myObj.title = datosUrl[i].pokemon_species[j].name;
            myObj.species = datosUrl[i].pokemon_species[j].url;
            myObj.image_url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+datosUrl[i].pokemon_species[j].url.split('/')[6]+ '.png'; 
            final.push(myObj);
          }
        }
        
        dispatch({
          type: GET_POKEMONES,
          payload: final
        });
      } else {
        console.log('EROR AL LLAMAR LA API BASE URL!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const addPokemones = pokemon => dispatch => {
  dispatch({
    type: ADD_FAVORITOS,
    payload: pokemon
  });
};
