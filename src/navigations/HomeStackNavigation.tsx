import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import MovieDetail from '../screens/MovieDetail';
const HomeStackNavigation = () => {

const Stack = createNativeStackNavigator() 
return (
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}  />
        <Stack.Screen name='MovieDetail' component={MovieDetail} />
      </Stack.Navigator>
  );
}

export default HomeStackNavigation