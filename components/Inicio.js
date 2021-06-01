/**
 * Pagina Inicio = Home
 * Lizeth Margarita Garcia Arteaga
 * Mayo 2021
 */
import React from 'react';
import { 
  View, 
  ImageBackground, 
  Text,
  Image
} from 'react-native';
import HeaderPokemon from './HeaderPokemon';
import MisFavoritos from './MisFavoritos';
import styles from './styles/styleInicio'

export default function Inicio() {

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imgBackground}  
                    resizeMode='cover' 
                    source={require('../assets/img/fondo3.jpeg')}>
        <HeaderPokemon />
        <View style={ styles.contenedorPokemones} >
            <View style={styles.box1}></View>
            <View style={styles.box2}>
              <Text style={styles.textoAtrapados}>Pokémones atrapados</Text>
              <Image source={require('../assets/img/atrapados.png')}
              />
            </View>
            <View style={styles.box3}>
              <MisFavoritos />
            </View>
        </View>
      </ImageBackground>
    </View>
  );
}