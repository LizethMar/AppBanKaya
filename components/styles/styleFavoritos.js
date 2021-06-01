/**
 * CSS View Mis Favoritos y obtencion de informacion 
 * Lizeth Margarita Garcia Arteaga
 * Mayo 2021
 */
 import { StyleSheet} from 'react-native'

export default StyleSheet.create({ 
    modalContent: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
        bottomModal: {
        justifyContent: 'flex-end',
        margin: 0
    },
    tituloInfo: {
        fontSize: 20, 
        color: 'gray', 
        marginBottom:20
    },
    closeInfo: {
        marginLeft:'85%'
    },
    viewInfo: {
        flexDirection: 'row', 
        borderBottomWidth: 1
    },
    viewDetalles: {
        width: '50%', 
        height: 100, 
        backgroundColor: 'rgba(53, 53, 53, 0.5)', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    scrollInfo: {
        width: '50%', 
        height: 100, 
        backgroundColor: '#F6CAC6'
    },
    auxViewInfo: {
        width: '50%', 
        height: 30, 
        backgroundColor: 'rgba(53, 53, 53, 0.5)', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    auxViewDetalle: {
        width: '50%', 
        height: 30, 
        backgroundColor: '#F6CAC6', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    auxW: {
        width: '50%', 
        height: 30, 
        backgroundColor: '#F6CAC6', 
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center' 
    },
    auxMovimientos: {
        width: '50%', 
        height: 100, 
        backgroundColor: '#F6CAC6'
    },
    viewEvoluciones: {
        flexDirection: 'row', 
        borderWidth: 2, 
        borderColor: 'red'
    },
    viewImgEvo: {
        width: '50%', 
        height: 200, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    imgEvol: {
        width: 150, 
        height: 150, 
        borderRadius: 10 
    },
    viewStats:{
        width: '50%', 
        height: 150, 
        backgroundColor: 'rgba(53, 53, 53, 0.5)', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    tituloFavoritos: {
        flex: 1, 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    textoTituloFavoritos: {
        fontSize: 22, 
        color: 'white', 
        textAlign: 'center'
    },
    containerSeparador: {
        flex: 1, 
        flexDirection: 'row'
    },
    separador1: {
        width: 50, 
        height: 10, 
        backgroundColor: '#DF0101'
    },
    separador2: {
        width: 50, 
        height: 10, 
        backgroundColor: '#FA5858'
    },
    separador3: {
        width: 50, 
        height: 10, 
        backgroundColor: '#F5A9A9'
    },
    contenedorEvo: {
        flex: 1, 
        flexDirection: 'row', 
        marginTop: 20, 
        marginBottom: 20
    },
    contenedorImg: {
        width: '20%', 
        height: 150
    },
    viewInfoGral:{
        width: '20%', 
        height: 10
    },
    botonInfo: {
        marginTop:10, 
        height: 150, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    safeAreaGral: {
        flex: 1, 
        backgroundColor: '#1E1B26'
    },
    viewGral: {
        flex: 1, 
        paddingHorizontal: 16
    },
    tituloMisFavoritos: {
        color: 'white', 
        fontSize: 22, 
        marginTop:20
    },
    viewListGral:{
        flex: 1, 
        marginTop: 8
    },
    textSinFavoritos: {
        color: '#64676D', 
        fontSize: 18,
         marginTop:10
    }

});