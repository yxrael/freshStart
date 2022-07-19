import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ajustes } from '../screens/Ajustes';
import { Navigator } from './Navigator';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {

    // const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
        screenOptions={{
            drawerPosition: 'left',
            // drawerType: width >= 768 ? 'permanent' : 'front'
        }}
    >
      <Drawer.Screen name="e-ASEMPRO" component={Navigator} />
      <Drawer.Screen name="Ajustes" component={Ajustes} />
    </Drawer.Navigator>
  );
}