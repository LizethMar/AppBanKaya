/**
 * Root Navegacion
 * Lizeth Margarita Garcia Arteaga
 * Mayo 2021
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Inicio from '../components/Inicio';
import ListaPokemones from '../components/ListaPokemones';
import FavoritosPokemon from '../components/FavoritosPokemon';

//Se crea la Tab principal
const Tab = createBottomTabNavigator();

//Estilos Tab
const tabBarOptions = {
  showLabel: false,
  inactiveTintColor: '#2D3038',
  activeTintColor: 'red',
  style: {
    height: '10%',
    backgroundColor: '#1E1B26',
  }
};

//Opciones Menu
const screenOptions = (route, color) => {
  let iconName;
  switch (route.name) {
    case 'Inicio':
      iconName = 'home'
      break;
    case 'ListaPokemones':
      iconName = 'view-dashboard';
      break;
    case 'FavoritosPokemon':
      iconName = 'cards-heart';
      break;
    default:
      break;
  }
  return <MaterialCommunityIcons name={iconName} color={color} size={24} />;
};

//Navegacion
const Navegacion = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator 
          initialRouteName='Home'
          tabBarOptions={tabBarOptions}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => screenOptions(route, color)
          })}
        >
        <Tab.Screen name='Inicio' component={Inicio}/>
        <Tab.Screen name='ListaPokemones' component={ListaPokemones} />
        <Tab.Screen name='FavoritosPokemon' component={FavoritosPokemon} />
      </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navegacion;
