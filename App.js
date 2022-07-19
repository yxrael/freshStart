import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { Navigator } from './src/navigators/Navigator';
import { MyDrawer } from './src/navigators/Drawer';

export default function App() {

  return (
    <NavigationContainer>
        <MyDrawer />
        {/* <Navigator /> */}
    </NavigationContainer>
    
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
