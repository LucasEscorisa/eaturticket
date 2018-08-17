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




const { height, width } = Dimensions.get("window");
const weight = [1, 1.2, 4];

let Populares =[ {
  key: 1,
  name : 'Jessica Jones',
  image : require("../assets/JessicaJones.jpg"),
},{
  key: 2,
  name : 'Daredevil',
  image : require("../assets/JessicaJones.jpg"),
},{
  key: 3,
  name: 'The Good Place',
  image : require("../assets/JessicaJones.jpg"),
},{
  key: 4,
  name : 'Orange is the new black sadsad ',
  image : require("../assets/JessicaJones.jpg"),
},{
  key: 5,
  name : 'Samantha',
  image : require("../assets/JessicaJones.jpg"),
}
];

class Recipes extends Component {

  _renderItem(item, size){
    
    if (size == 'large'){
      return(
        <View>
  
        <Image 
        style = {{marginRight: 8, borderRadius: 6}} 
        width = {width - 120}
        height = {width  - 80}  
        source={item.image}/>

        <Text 
        style = {{ width: 50, fontSize: 24, fontWeight: '600',marginVertical: 4, marginLeft: 4}} 
        numberOfLines = {1}>  
          {item.name} 
        </Text>
  
  
        </View>
      );
    } else {
      return(
        <View>
  
        <Image style = {{ width: this.props.width ,height: this.props.width}} width = {width / item.size} height = {width / item.size}  source={item.image}/>
        <Text style = {{fontSize: 10, fontWeight: '600',marginVertical: 8}} fontFit = {item.fontS} >  
          {item.name} 
        </Text>
  
  
        </View>
          
  
      );

    }

    
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <SearchBar />

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingTop: 16}}
          
        >
        
        <FlatList style = {styles.container}
          horizontal 
          showsHorizontalScrollIndicator={false}
          data={Populares}
          renderItem={({item}) => this._renderItem(item, 'large')}
          
        
        />


        
        <PopularList />
        <FavoriteList />
          
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
