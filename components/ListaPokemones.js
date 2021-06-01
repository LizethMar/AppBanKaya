/**
 * Pagina Lista Pokemones
 * Lizeth Margarita Garcia Arteaga
 * Mayo 2021
 */
import { TabView, 
         TabBar 
} from 'react-native-tab-view';
import React, { useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Dimensions,
  useWindowDimensions
} from 'react-native';
import { useSelector, 
         useDispatch 
} from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getPokemones, 
         addPokemones 
} from '../redux/actions';
import styles from './styles/styleListaPokemones'

export default function ListaPokemones(props) {

  const layout = useWindowDimensions();
  //Obtiene los datos de redux de pokemones
  const { listaPokemones, pokemones } = useSelector(state => state.pokemonesReducer);
  const dispatch = useDispatch();
  const buscarPokemones = () => dispatch(getPokemones());
  const addFavoritosList = pokemon => dispatch(addPokemones(pokemon));

  let pokemonesPorColor = new Map();
  let auxColores = [];
  let auxListaPokemones = [];

  useEffect(() => {
    buscarPokemones();
  }, []);

  const handleaddPokemones = pokemon => {
    addFavoritosList(pokemon);
  };

  const ifExists = pokemon => {
    if (pokemones.filter(item => item.id === pokemon.id).length > 0) {
      return true;
    }
    return false;
  };

  for(let i=0; i< listaPokemones.length; i++) {
    if(pokemonesPorColor.has(listaPokemones[i].color)) {
        let tmpPokemon = pokemonesPorColor.get(listaPokemones[i].color);
        tmpPokemon.push(listaPokemones[i]);
        pokemonesPorColor.set(listaPokemones[i].color, tmpPokemon);
    } else {
      let auxPokemones = [];
      pokemonesPorColor.set(listaPokemones[i].color, auxPokemones);
    }
  }

  const mapGrupoColores = (value, key, map) => {
    auxColores.push(key);
  }

  pokemonesPorColor.forEach(mapGrupoColores);

  const getPokemonesPorColor= (color) => {
    auxListaPokemones = pokemonesPorColor.get(auxColores[color]);
  }

  const screenWidth = Dimensions.get("window").width / auxColores.length;  
  const [index, setIndex] = React.useState(0);

  const getRoutes = () => {
    let auxRoutes = []
    for(let i=0; i< auxColores.length; i++) { 
      auxRoutes.push({
        key: 'color'+i,
        title: auxColores[i] 
      })  
    }
    return auxRoutes;
  }

  const [routes] = React.useState(getRoutes());

  //Scene de pokemones
  const ScenePokemonesPorColor = () => {
    getPokemonesPorColor(index);
    return (
      <SafeAreaView style={styles.containerSafeArea}>
        <View style={styles.viewSafeArea}>
          <FlatList
            data={auxListaPokemones}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    )
  };

  //Lista pokemones
  const renderItem = ({ item }) => {
    return (
      <View style={styles.containerLista}>
        <View style={styles.viewImg}>
          <Image
            source={{ uri: item.image_url }}
            resizeMode='stretch'
            style={styles.imageList}
          />
          <View style={styles.viewText}>
            <View>
              <Text style={styles.titlePokemon}>
                {item.title}
              </Text>
            </View>
            <View style={styles.viewFavorito}>
              <TouchableOpacity
                onPress={() =>
                  ifExists(item)
                  ? true
                  : handleaddPokemones(item)
                }
                activeOpacity={0.7}
                style={{
                  flexDirection: 'row',
                  padding: 2,
                  backgroundColor: ifExists(item) ? 'red' : '#2D3038',
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 40,
                  width: 40
                }}
              >
              <MaterialCommunityIcons
                color={ifExists(item) ? 'white' : '#64676D'}
                size={24}
                name={ifExists(item) ? 'cards-heart' : 'content-save'}
              />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  //Base inicial
  return (
    <>
      <Text style={styles.separador}></Text>
      <TabView
          lazy = {true}
          render
          scrollEnabled={true}
          bounces={true}
          navigationState={{ index, routes }}
          renderScene={ScenePokemonesPorColor}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={props => <TabBar {...props} style={styles.tabBar} renderLabel={({route, focused}) => {
            return (
              <View style={{backgroundColor: route.title, width: screenWidth , height:'100%' }} />
            );
          }}/>}
      /> 
    </> 
  );
}