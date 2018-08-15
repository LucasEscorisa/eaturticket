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

HEADER_MAX_HEIGHT = 80;
HEADER_MIN_HEIGHT = 70;
SEARCH_MAX_HEIGHT = 80;
SEARCH_MIN_HEIGHT = 40;

class Recipes extends Component {
  render() {
    return (
      <SafeAreaView>
        <SearchBar />
        <ScrollView style={{ paddingTop: 8 }}>
          <View
            style={{
              paddingHorizontal: 20,

              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "space-between"
            }}
          >
            <Items2 width={width} image={require("../assets/home.jpg")} />
            <Items2 width={width} image={require("../assets/home.jpg")} />
            <Items2 width={width} image={require("../assets/home.jpg")} />
            <Items2 width={width} image={require("../assets/home.jpg")} />
          </View>
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
