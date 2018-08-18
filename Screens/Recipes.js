import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Image,
  ScrollView,
  FlatList
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";


import SearchBar from "../Components/SearchBar";
import Items from "../Components/Items";
import Items2 from "../Components/Items2";
import Items3 from "../Components/Items3";
import PopularList from "../Components/PopularList";
import FavoriteList from "../Components/FavoriteList";
import Slider from "../Components/Slider";




const { height, width } = Dimensions.get("window");
const weight = [1, 1.2, 4];
const data = require('../Data/Populares.json');
const data2 = require('../Data/Favorites.json');



class Recipes extends Component {

  _renderItem(item, size){
    
    if (size == 'large'){
      return(
        <View>
  
        <Image 
        style = {{marginRight: 8, borderRadius: 6}} 
        width = {width - 60}
        height = {width  - 140}  
        source={item.image}/>

        <Text 
        style = {{ width: 250, height: 60, fontSize: 24, fontWeight: '600',marginVertical: 4, marginLeft: 4}} 
        numberOfLines = {2}>  
          {item.name} 
        </Text>
  
  
        </View>
      );
    } else if(size == "medium") {
      return(
        <View>
  
  <Image 
        style = {{marginRight: 8, borderRadius: 6}} 
        width = {width - 100}
        height = {width  - 180}  
        source={item.image}/>

        <Text 
        style = {{ width: 250, height: 60, fontSize: 20, fontWeight: '600',marginVertical: 4, marginLeft: 4}} 
        numberOfLines = {2}>  
          {item.name} 
        </Text>
  
  
        </View>
          
  
      );

    }

    
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingTop: 16}}
          
        >
        <Slider />

        
        <FlatList style = {styles.container}
          horizontal 
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({item}) => this._renderItem(item, 'large')}
          
        
        />

        <FlatList style = {styles.container}
          horizontal 
          showsHorizontalScrollIndicator={false}
          data={data2}
          renderItem={({item}) => this._renderItem(item, 'medium')}
          
        
        />
          
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Recipes;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16
  }
});
