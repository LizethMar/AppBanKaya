/**
 * CSS View Header
 * Lizeth Margarita Garcia Arteaga
 * Mayo 2021
 */
 import { StyleSheet} from 'react-native'

export default StyleSheet.create({ 
    container: {
        height: 150
    },
    containerHeader: {
        backgroundColor: "red", 
        height: 160
    },
    informacion:{
        flex: 1, 
        flexDirection: 'row'
    },
    contenedoresInformacion: {
        width: '50%', 
        height: '100%', 
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerNumeroPokemon : {
        width:'90%',
        height: '40%',
        borderRadius: 200,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        borderColor: 'black',
        borderWidth: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textNumPokemon: {
        color: 'white',
        fontSize: 50,
        fontStyle: 'italic'
    },
    textoPokemones: {
        color: 'white',
        fontSize: 20,
        marginBottom: 10
    }
})