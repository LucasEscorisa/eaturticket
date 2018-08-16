import React, { Component } from "react";
import {
  View,
  Text,
  Stylesheet,
  Image,
  ScrollView,
  Dimensions
} from "react-native";

const { height, width } = Dimensions.get("window");

class SavedTemplate extends Component {
  render() {
    return (
      <View>
        <View style={{ backgroundColor: "#dddddd", padding: 8, marginTop: 8 }}>
          <Text style={{ fontSize: 24, fontWeight: "700", marginLeft: 8 }}>
            {" "}
            NOME DO PRATO
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "400",
              color: "grey",
              marginLeft: 8
            }}
          >
            {" "}
            NOME DA SÉRIE
          </Text>
        </View>
        <Image
          style={{
            width: width,
            height: width - 100,
            resizeMode: "cover"
          }}
          source={require("../assets/Pancakes.jpg")}
        />
      </View>
    );
  }
}

export default SavedTemplate;
