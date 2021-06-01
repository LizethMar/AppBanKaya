/**
 * Pagina Mis Favoritos e informacion
 * Lizeth Margarita Garcia Arteaga
 * Mayo 2021
 */
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import { useSelector } from 'react-redux';
import Modal from 'react-native-modal';
import axios from 'axios';
import { URL_INFO_POKEMON } from '../config/urls';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import styles from './styles/styleFavoritos'

export default function FavoritosPokemon() {

  const { pokemones } = useSelector(state => state.pokemonesReducer);
  const [visibleModal,setVisibleModal] = React.useState(false);
  const [isLoading,setIsLoading] = React.useState(true);
  const [informacionPokemon, setInformacionPokemon] = React.useState(Object);
  const [desHabilidad, setDesHabilidad] = React.useState('');
  const [movimientosPokemon, setMovimientosPokemon] = React.useState('');
  const [evoluciones,setEvoluciones] = React.useState(Object);
  const [stats,setStats] = React.useState([]);

  async function mostrarModal (item) {
    let auxHabilidades = [];
    let auxMovimientos = [];
    let auxStats = [];

    setVisibleModal(true);
    setIsLoading(true);

    //Llamado a servicio de pokemon
    const response  = await axios.get(`${URL_INFO_POKEMON}`+ item.id);
    setInformacionPokemon(response.data);

    for(let i= 0; i< response.data.abilities.length; i++) {
      //LLamado a servicio de habilidades
      const abilitiesPokemon = await axios.get(response.data.abilities[i].ability.url);
      for(let j= 0; j< abilitiesPokemon.data.flavor_text_entries.length; j++) {
         if(abilitiesPokemon.data.flavor_text_entries[j].language.name == 'es') {
          auxHabilidades.push('- '+response.data.abilities[i].ability.name+': '+ abilitiesPokemon.data.flavor_text_entries[j].flavor_text + '\n');
          break;
        }
      }
    }

    for(let i= 0; i< response.data.moves.length; i++) {
      //Llamado a servicios de movimientos
      const movimientosPokemon = await axios.get(response.data.moves[i].move.url);
      for(let j= 0; j< movimientosPokemon.data.flavor_text_entries.length; j++) {
         if(movimientosPokemon.data.flavor_text_entries[j].language.name == 'es') {
          auxMovimientos.push('- '+response.data.moves[i].move.name+': '+ movimientosPokemon.data.flavor_text_entries[j].flavor_text + '\n');
          break;
        }
      }
    } 
    for(let i= 0; i< response.data.stats.length; i++) {
      auxStats.push(response.data.stats[i].base_stat/100)
    }
    //Llamado a servicios de evolucion
    const evolucion1_Pokemon = await axios.get(response.data.species.url);
    const evolucion2_Pokemon = await axios.get(evolucion1_Pokemon.data.evolution_chain.url);
    
    console.log(evolucion2_Pokemon.data.chain.evolves_to[0]+ 'Evolution'+evolucion2_Pokemon.data);
    
    let myObj = new Object();
    myObj.urlBasePokemon = item.image_url;
    myObj.urlEvolucionPokemon = '';
   
    if(evolucion2_Pokemon.data.chain.evolves_to[0] != undefined) {
      let auxIdEvolucion = evolucion2_Pokemon.data.chain.evolves_to[0].species.url.split('/')[6];
      if(auxIdEvolucion != item.id) {
        myObj.urlEvolucionPokemon = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+auxIdEvolucion+ '.png';     ;
      }
    }

    setStats(auxStats);
    setEvoluciones(myObj);
    setDesHabilidad(auxHabilidades);
    setMovimientosPokemon(auxMovimientos);
    setIsLoading(false);
  }   

  const renderModalInfo = () => (
    
    <>
    <View style={styles.modalContent}>
      {isLoading?<>
                  <TouchableOpacity style={styles.closeInfo} onPress={() => setVisibleModal(null) }>
                    <MaterialCommunityIcons name='close' color='black' size={50} />
                  </TouchableOpacity>
                  <Text style={styles.tituloInfo}>Obteniendo información Pokémon</Text>
                  <ActivityIndicator size="large" color="red" />
                </> : 
      <ScrollView>
        <TouchableOpacity style={styles.closeInfo} onPress={() => setVisibleModal(false) }>
          <MaterialCommunityIcons name='close' color='black' size={50} />
        </TouchableOpacity>
        <Text style={styles.tituloInfo}>Información Pokémon</Text>
        <View style={styles.viewInfo}>
          <View style={styles.viewDetalles} >
            <Text>Habilidad</Text>
          </View>
          <ScrollView style={styles.scrollInfo} >
            <Text>{desHabilidad}</Text>
          </ScrollView>
        </View>
        <View style={styles.viewInfo}>
          <View style={styles.auxViewInfo} >
            <Text>Experiencia base</Text>
          </View>
          <View style={styles.auxViewDetalle} >
            <Text>{informacionPokemon.base_experience}</Text>
          </View>
        </View>
        <View style={styles.viewInfo}>
          <View style={styles.auxViewInfo} >
            <Text>Peso</Text>
          </View>
          <View style={styles.auxW} >
            <Text>{informacionPokemon.weight}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.viewDetalles} >
            <Text>Movimientos</Text>
          </View>
          <ScrollView style={styles.auxMovimientos} >
            <Text>{movimientosPokemon}</Text>
          </ScrollView>
        </View>
        <View style={styles.viewEvoluciones}>
          <View style={styles.viewImgEvo} >
            <Image
                  source={{ uri: evoluciones.urlBasePokemon}}
                  resizeMode='stretch'
                  style={styles.imgEvol}
              />
          </View>
          <View style={styles.viewImgEvo} >
            <Image
                  source={{ uri: evoluciones.urlEvolucionPokemon}}
                  resizeMode='stretch'
                  style={styles.imgEvol}
              />
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.viewStats} >
            <Text>Hp</Text>
            <Progress.Bar progress={stats[0]} width={150} color='red' marginBottom={10}/>
            <Text>Ataque</Text>
            <Progress.Bar progress={stats[1]} width={150} color='red' marginBottom={10}/>
            <Text>Defensa</Text>
            <Progress.Bar progress={stats[2]} width={150} color='red' marginBottom={10}/>
          </View>
          <View style={styles.viewStats} >
            <Text>Ataque especial</Text>  
            <Progress.Bar progress={stats[3]} width={150} color='red' marginBottom={10}/>
            <Text>Defensa especial</Text>
            <Progress.Bar progress={stats[4]} width={150} color='red' marginBottom={10}/>
            <Text>Velocidad</Text>
            <Progress.Bar progress={stats[5]} width={150} color='red' marginBottom={10}/>
          </View>
        </View>
      </ScrollView>}
    </View>
    </>
  );

  const renderItem = ({ item }) => {

    return (
      <View style={styles.tituloFavoritos}>        
        <Text style={styles.textoTituloFavoritos}>
          {item.title}
        </Text> 
        <View style={styles.containerSeparador}>
          <View style={styles.separador1} />
          <View style={styles.separador2} />
          <View style={styles.separador3} />
        </View>
        <View style={styles.contenedorEvo}>
            <View style={styles.contenedorImg} >
              <Image
                  source={{ uri: item.image_url }}
                  resizeMode='stretch'
                  style={styles.imgEvol}
              />
            </View>
            <View style={styles.viewInfoGral} >
              <TouchableOpacity
                  onPress={() => mostrarModal(item)}
                    style={styles.botonInfo}
                  >
                    <MaterialCommunityIcons name='information' color='white' size={50} />
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaGral}>
      <View style={styles.viewGral}>
        <Text style={styles.tituloMisFavoritos}>Mis Favoritos</Text>
        <View style={styles.viewListGral}>
          {pokemones.length === 0 ? (
            <Text style={styles.textSinFavoritos}>
              Agrega a tu lista
            </Text>
            ) : (
            <FlatList
              data={pokemones}
              keyExtractor={item => item.id.toString()}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      </View>
      <Modal isVisible={visibleModal} style={styles.bottomModal}>
          {renderModalInfo()}
        </Modal>
    </SafeAreaView>
  );
}
