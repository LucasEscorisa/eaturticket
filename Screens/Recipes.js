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
import Items3 from "../Components/Items3";
import PopularList from "../Components/PopularList";
import FavoriteList from "../Components/FavoriteList";

const { height, width } = Dimensions.get("window");

class Recipes extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <SearchBar />

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingTop: 16 }}
        >
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
