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
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import SearchBar from "../Components/SearchBar";
import Items from "../Components/Items";
import Items2 from "../Components/Items2";

const { height, width } = Dimensions.get("window");

class Recipes extends Component {
  render() {
    return (
      <SafeAreaView>
      //View to separate the SearchBar from the statusBar
        <View style={{ paddingTop: 8 }}>
          <ScrollView>

            <SearchBar />

            <View
              style={{
                paddingHorizontal: 20,
                marginTop: 12,
                flexDirection: "column",
                flexWrap: "wrap",
                justifyContent: "space-between"
              }}
            >
        
              <Items2 width = {width} image = {require("../assets/home.jpg")}/>

              <Items2 width = {width} image = {require("../assets/home.jpg")}/>

              <Items2 width = {width} image = {require("../assets/home.jpg")}/>

              <Items2 width = {width} image = {require("../assets/home.jpg")}/>

              <Items2 width = {width} image = {require("../assets/home.jpg")}/>

            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

export default Recipes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
