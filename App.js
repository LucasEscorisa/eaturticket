import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';

import Profile from './Screens/Profile';
import Recipes from './Screens/Recipes';
import Saved from './Screens/Saved';
import Search from './Screens/Search';
import RecipesList from './Screens/RecipesList';
import RecipeContent from './Screens/RecipeContent';

import {
  createStackNavigator,
} from 'react-navigation';


export default class App extends React.Component{
  render(){
    return(
      
      <BottomTabNavigator />


      
    );
  }
}

const RecipesNavigator = createStackNavigator({
  RecipesHome:{
    screen:Recipes
  },
  RecipesList:{
    screen: RecipesList
  },
  RecipeContent:{
    screen:RecipeContent
  }
})

const BottomTabNavigator = createBottomTabNavigator({
  Recipes:{
    screen: RecipesNavigator,
    navigationOptions:{
      tabBarLabel: 'RECIPES',
      tabBarIcon:({tintColor}) => (
        <Icon name = "ios-basket" color = {tintColor} size = {24} />
      )
    }
  },
  Saved:{
    screen: Saved,
    navigationOptions:{
      tabBarLabel: 'SAVED',
      tabBarIcon:({tintColor}) => (
        <Icon name = "ios-heart" color = {tintColor} size = {24} />
      )
    }
  }, 
  Profile:{
    screen: Profile,
    navigationOptions:{
      tabBarLabel: 'PROFILES',
      tabBarIcon:({tintColor}) => (
        <Icon name = "ios-person" color = {tintColor} size = {24} />
      )
    }
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
