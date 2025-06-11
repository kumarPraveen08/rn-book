import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import PdfScreen from '../screens/PdfScreen';
import {StatusBar} from 'react-native';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'royalblue'} barStyle={'light-content'} />
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false, navigationBarHidden: true}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Pdf" component={PdfScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
