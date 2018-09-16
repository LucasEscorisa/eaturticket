import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Dimensions, Image} from "react-native";
import SavedTemplate from "../SavedComponents/SavedTemplate";

const { height, width } = Dimensions.get("window");
HEADER_MAX_HEIGHT = 97;

class Saved extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, marginTop: 8}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingTop: 16 }}
        >

          <SavedTemplate />
          <SavedTemplate />
          <SavedTemplate />
          <SavedTemplate />

          
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Saved;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
