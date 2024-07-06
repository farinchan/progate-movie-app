import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import Home from '../screens/Home'
import Search from '../screens/Search'
import Favorite from '../screens/Favorite'
const Tab = createBottomTabNavigator()
import HomeStackNavigation from './HomeStackNavigation'

const BottomTabNavigation = ():JSX.Element => {
    return (
      <Tab.Navigator>
          <Tab.Screen name='homes' component={HomeStackNavigation} options={{ tabBarIcon:({color})=>(
              <Feather name='home' size={28} color={color}/> 
          ),headerShown:false }}/>
          <Tab.Screen name='Search' component={Search} options={{ tabBarIcon:({color})=>(
              <Feather name='search' size={28} color={color}/> 
          ),headerShown:false }}/>
          <Tab.Screen name='Favorite' component={Favorite} options={{ tabBarIcon:({color})=>(
              <Feather name='heart' size={28} color={color}/> 
          ),headerShown:false }}/>
      </Tab.Navigator>
    )
  }
  export default BottomTabNavigation