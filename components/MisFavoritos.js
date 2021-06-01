/**
 * Pagina Mis Favoritos - Pie Chart
 * Lizeth Margarita Garcia Arteaga
 * Mayo 2021
 */
import React from 'react';
import { Text,
         Dimensions
} from "react-native";
import { useSelector } from 'react-redux';
import { PieChart } from "react-native-chart-kit";
import styles from './styles/styleMisFavoritos'

const screenWidth = Dimensions.get("window").width;

export default function MisFavoritos() {

    let colores = new Map();
    let auxColores = [];
    let auxCantidadColores = [];
    let data = [];
    const { pokemones } = useSelector(state => state.pokemonesReducer);
    const pieChartConfig = {
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
    };

    //Se obtiene un Map con los colores y totales
    if(pokemones.length != 0) {
        for(let i=0; i< pokemones.length; i++) {
            if(colores.has(pokemones[i].color)) {
                let  cantidad = colores.get(pokemones[i].color)+1;
                colores.set(pokemones[i].color, cantidad);
            } else {
                colores.set(pokemones[i].color, 1);
            }
        }
    
        function mapGrupoColores(value, key, map) {
            auxColores.push(key);
            auxCantidadColores.push(value);
        }
    
        colores.forEach(mapGrupoColores);
    
        for(let i=0; i< auxColores.length; i++) { 
            let myObj = new Object();
            myObj.name = auxColores[i];
            myObj.color = auxColores[i];
            myObj.population = auxCantidadColores[i];
            myObj.legendFontColor = '#7F7F7F';
            myObj.legendFontSize = 12;
            data.push(myObj);
        }
    }
    
    //Creacion de Pie Chart
    return(
        <>
            <Text style={styles.numMisFavoritos}>{pokemones.length}</Text>
            <PieChart
                data={data}
                width={screenWidth}
                height={180}
                chartConfig={pieChartConfig}
                accessor={"population"}
                center={[0, 0]}
                absolute
            />
        </>
    );
};