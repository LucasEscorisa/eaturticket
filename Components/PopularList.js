import React, { Component } from "react";
import {
  View,
  Text,
  Stylesheet,
  Image,
  ScrollView,
  Dimensions
} from "react-native";

import Items3 from "./Items3";
const { height, width } = Dimensions.get("window");

class PopularList extends Component {
  render() {
    return (
      <View>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "700",
            marginHorizontal: 32,
            marginTop: 16
          }}
        >
          Populares
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
            <Items3
              width={width}
              weight={1}
              fontFit={24}
              name="Jessica Jones"
              image={require("../assets/JessicaJones.jpg")}
            />
            <Items3
              width={width}
              weight={1}
              fontFit={24}
              name="Nome da série"
              image={require("../assets/home.jpg")}
            />
            <Items3
              width={width}
              weight={1}
              fontFit={24}
              name="Nome da série"
              image={require("../assets/home.jpg")}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default PopularList;
