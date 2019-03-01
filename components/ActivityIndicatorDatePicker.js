import React from "react";
import {
  ActivityIndicator,
  View,
  Button,
  DatePickerAndroid
} from "react-native";

export default class MyActivityIndicatorDatePicker extends React.Component {
  state = {
    loading: true
  };
  handlePress = () => {
    this.setState({ loading: !this.state.loading });
  };
  openDatePicker = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        // Use `new Date()` for current date.
        // May 25 2020. Month 0 is January.
        date: new Date(2020, 5, 25)
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        //always check this one
        // Selected year, month (0-11), day
        console.log(year, month, day);
      }
    } catch ({ code, message }) {
      console.warn("Cannot open date picker", message);
    }
  };
  render() {
    return (
      <View>
        <ActivityIndicator animating={this.state.loading} size="large" />
        <ActivityIndicator color="red" size="small" />
        <ActivityIndicator size="large" />
        <Button title="toggle me" color="green" onPress={this.handlePress} />
        <Button
          title="open date picker"
          color="blue"
          onPress={this.openDatePicker}
        />
      </View>
    );
  }
}
