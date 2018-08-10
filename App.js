import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import Profile from './Screens/Profile';
import Recipes from './Screens/Recipes';
import Saved from './Screens/Saved';

export default createBottomTabNavigator({
  Recipes:{
    screen: Recipes
  },
  Saved:{
    screen: Saved
  },
  Profile:{
    screen: Profile
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
