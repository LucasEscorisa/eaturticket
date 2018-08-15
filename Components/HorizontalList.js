import React, { Component } from "react";
import { View, Text, Stylesheet, Image, ScrollView, Dimensions } from "react-native";

import Items3 from "./Items3";
const { height, width } = Dimensions.get("window");

var path = ["../assets/home.jpg", "../assets/home.jpg", "../assets/home.jpg"];
var pathq = "../assets/home.jpg";

console.log(path[0]);
class Items extends Component {


  render() {
    return (
      <View>
        <Text style={{ fontSize: 24, fontWeight: "700", marginHorizontal: 32 }}>
          {this.props.title}
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingTop: 8 }}
        >
          <View
            style={{
              paddingHorizontal: 20,
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between"
            }}
          >
            <Items3 width={width} image={require(pathq)} />
            <Items3 width={width} image={require(pathq)} />
            <Items3 width={width} image={require(pathq)} />
            <Items3 width={width} image={require("../assets/home.jpg")} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Items;
