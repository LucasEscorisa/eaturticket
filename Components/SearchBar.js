import React, { Component } from "react";
import { View, Text, StyleSheet, Platform, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";


HEADER_MAX_HEIGHT = 97;

class SearchBar extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: "red",
            height: HEADER_MAX_HEIGHT
          }}
        />
        <View
          style={{
            flexDirection: "row",
            zIndex: 1,
            padding: 10,
            backgroundColor: "white",
            marginHorizontal: 20,
            shadowOffset: { width: 0, height: 0 },
            shadowColor: "black",
            shadowOpacity: 0.2,
            elevation: 1,
            marginTop: - 20,
          }}
        >
          <Icon name="ios-search" size={20} style={{ top: 2 }} />
          <TextInput
            underlineColorAndroid="transparent"
            placeholder="Try Simpsons !!"
            placeholderTextColor="grey"
            style={{
              flex: 1,
              fontWeight: "700",
              backgroundColor: "white",
              marginLeft: 10
            }}
          />
        </View>
      </View>
    );
  }
}

export default SearchBar;
