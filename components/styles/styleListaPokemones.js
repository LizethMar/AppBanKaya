/**
 * CSS View Lista Pokemones
 * Lizeth Margarita Garcia Arteaga
 * Mayo 2021
 */
 import { StyleSheet} from 'react-native'

export default StyleSheet.create({ 
    containerSafeArea: {
        flex: 1, 
        backgroundColor: '#1E1B26'
    },
    viewSafeArea: {
        flex: 1, 
        marginTop: 0 
    },
    containerLista: {
        paddingLeft: '20%', 
        marginTop: 20, 
        borderBottomWidth: 1, 
        borderBottomColor: 'white'
    },
    viewImg: {
        flexDirection: 'row', 
        flex: 1
    },
    imageList: {
        width: 150, 
        height: 150, 
        borderRadius: 10 
    }, 
    viewText: {
        flex: 1, 
        marginLeft: 12
    },
    titlePokemon: {
        fontSize: 22, 
        paddingRight: 16, 
        color: 'white'
    },
    viewFavorito: {
        marginTop: 14
    },
    separador: {
        backgroundColor: 'black', 
        padding: 20
    },
    tabBar: {
        backgroundColor: 'black'
    }
});