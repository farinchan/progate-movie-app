import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import HomeStackNavigation from "./HomeStackNavigation";
import FavoriteStackNavigation from "./FavoriteStackNavigation";
import SearchStackNavigation from "./SearchStackNavigation";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = (): JSX.Element => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeStackNavigation}
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="home" size={24} color={color} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchStackNavigation}
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="search" size={24} color={color} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Favorite"
      component={FavoriteStackNavigation}
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="heart" size={24} color={color} />
        ),
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);

export default BottomTabNavigator;
