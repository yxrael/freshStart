import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import { Comercios } from '../screens/Comercios';
import { Inicio } from '../screens/Inicio';
import { Tarjeta } from '../screens/Tarjeta';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

export const Navigator = () => {

  return (
    
    // <Stack.Navigator>
    //     <Stack.Screen name="Inicio" component={Inicio} />
    //     <Stack.Screen name="Comercios" component={Comercios} />
    //     <Stack.Screen name="Tarjeta" component={Tarjeta} />
    // </Stack.Navigator>

    <Tab.Navigator>
        <Tab.Screen name="Inicio" component={Inicio} />
        <Tab.Screen name="Comercios" component={Comercios} />
        <Tab.Screen name="Tarjeta" component={Tarjeta} />
    </Tab.Navigator>
    
  )
}
