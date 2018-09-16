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
  FlatList,
} from "react-native";
import {
  createStackNavigator,
} from 'react-navigation';

import * as firebase from 'firebase';

import Icon from "react-native-vector-icons/Ionicons";


import SearchBar from "../Components/SearchBar";
import Items from "../Components/Items";
import Items2 from "../Components/Items2";
import Items3 from "../Components/Items3";
import PopularList from "../Components/PopularList";
import FavoriteList from "../Components/FavoriteList";
import Slider from "../Components/Slider";
import list from '../RecipesComponents/categoryList';
import categoryList from "../RecipesComponents/categoryList";

import Firebase from '../Firebase/firebase';




const { height, width } = Dimensions.get("window");
const weight = [1, 1.2, 4];
const data = require('../Data/Populares.json');
const data2 = require('../Data/Favorites.json');

function ignoreUndefined(data) {
  var dados = data;
  var auxiliar = [];

    for(var i in dados)
      if(dados[i] != undefined)
      auxiliar.push(dados[i]);

    return auxiliar;
}

function readDataBase(ref){
  
  ref.once('value', function (snapshot) {

    //console.log('Receitas', snapshot.val());

    that.setState({
      dataSource: ignoreUndefined(snapshot.val())

    }, function () {

      // Leave it blank!

    });
  })
}

class Recipes extends Component {

  constructor(props){
    super(props);
    this.state = {};
    console.ignoredYellowBox = [
      'Setting a timer'
      ];
  }


  componentDidMount(){

    var that = this;

    var catalogo = firebase.database().ref('Catalogo');
    var receitas = firebase.database().ref('Receitas');

    catalogo.once('value', function(snapshot) {

      that.setState({
        dataSource: ignoreUndefined(snapshot.val())
      }, function(){
        // Leave it blank
      })
    })

  };

  _renderItem(item, size){
    
    if (size == 'large'){

      return(
        
        <View>


        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('RecipesList', {name: 'test'})}}>
        <Image 
        style = {{marginRight: 8, borderRadius: 6}} 
        width = {width - 60}
        height = {width  - 140}  
        source={{uri: item.Imagem}}/>
        </TouchableOpacity>

        <Text 
        style = {{ width: 250, height: 60, fontSize: 24, fontWeight: '600',marginVertical: 4, marginLeft: 4}} 
        numberOfLines = {2}>  
          {item.Titulo} 
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
        source={{uri: item.Imagem}}/>

        <Text 
        style = {{ width: 250, height: 60, fontSize: 20, fontWeight: '600',marginVertical: 4, marginLeft: 4}} 
        numberOfLines = {2}>  
          {item.Titulo} 
        </Text>
  
  
        </View>
          
  
      );
    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, marginTop: 8, backgroundColor: '#FFA500' }}>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingTop: 16}}
          
        >
      
      <Slider />

        <View style={{backgroundColor:'white', paddingVertical:8}}>
        <Text style = {{paddingLeft: 16, fontSize: 36, fontWeight: '800'}}>Favoritos</Text>
        
        <FlatList style = {styles.container}
          horizontal 
          showsHorizontalScrollIndicator={false}
          data={this.state.dataSource}
          keyExtractor = {(item) => item.ID}
          renderItem={({item}) => this._renderItem(item, 'large')}
          
        
        />



        </View>




       
          
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
