import React from "react";
import { StyleSheet, Button, Text, View, TextInput } from "react-native";
import ButtonTextInput from "./components/buttonTextInput";
import MyActivityIndicatorDatePicker from "./components/ActivityIndicatorDatePicker";
export default class App extends React.Component {
  state = {
    text: ""
  };
  render() {
    return (
      <View style={styles.container}>
        {/* <ButtonTextInput /> */}
        <MyActivityIndicatorDatePicker />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
