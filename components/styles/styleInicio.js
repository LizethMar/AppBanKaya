/**
 * CSS View Inicio
 * Lizeth Margarita Garcia Arteaga
 * Mayo 2021
 */
import { StyleSheet,
         Dimensions
} from 'react-native'

//Dimension de pantalla
const { height } = Dimensions.get('window');
const box_count = 3;
const box_height = height / box_count;

export default StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column'
    },
    imgBackground: {
      width: '100%',
      height: '100%',
      flex: 1,
      alignSelf: 'stretch'
    },
    contenedorPokemones: {
      width: '100%',
      height: '100%',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    box1: {
      height: box_height,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    box2: {
      height: box_height - 100
    },
    box3: {
      height: box_height + 100,
      width: '90%',
      backgroundColor: 'rgba(53, 53, 53, 0.5)',
      borderRadius: 5
    },
    textoAtrapados: {
      color: 'white',
      textAlign: 'center',
      fontSize: 20,
      marginTop: 10
    }
});