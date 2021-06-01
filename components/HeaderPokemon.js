/**
 * Pagina Header
 * Lizeth Margarita Garcia Arteaga
 * Mayo 2021
 */
import React, { useEffect } from 'react';
import { View,
         Text
} from "react-native";
import Svg, {Path, } from 'react-native-svg';
import { Avatar } from 'react-native-elements';
import { useSelector, 
         useDispatch 
} from 'react-redux';
import { getPokemones } from '../redux/actions';
import styles from './styles/styleHeader'

export default function HeaderPokemon() {

    const { listaPokemones, pokemones } = useSelector(state => state.pokemonesReducer);
    const dispatch = useDispatch();
    const buscarPokemones = () => dispatch(getPokemones());
  
    useEffect(() => {
      buscarPokemones();
    }, []);

    return(
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <View style={styles.informacion}>
                    <View style={styles.contenedoresInformacion} >
                        <Avatar
                            rounded
                            size={110}
                            source={require('../assets/img/avatar.png')}
                        />
                    </View>
                    <View style={styles.contenedoresInformacion} > 
                        <Text style={styles.textoPokemones}>Pokémones</Text>
                        <View style={styles.containerNumeroPokemon}>
                            <Text style={styles.textNumPokemon}>{listaPokemones.length}</Text> 
                        </View>
                    </View>
                </View>
                <Svg
                    height="60%"
                    width="100%"
                    viewBox="0 0 1440 320"
                    style={{ position: 'absolute', top: 130 }}
                >
                    <Path fill={"red"} d={"M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"} />
                </Svg>
            </View>
        </View>
    );
};