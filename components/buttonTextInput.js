import React from "react";
import { Button, TextInput, View } from "react-native";
export default class ButtonTextInput extends React.Component {
  render() {
    return (
      <View>
        <TextInput
          ref="input"
          // value={this.state.text}
          onChange={text => console.log(text)}
          // placeholder="www.youtube.com"
          defaultValue="I have a default value but no eventhandler"
          multiline={false}
          // keyboardType="numeric"
          onBlur={() => {
            alert("you just blurred");
          }}
        />
        <TextInput
          // value={this.state.t[ext}
          onChangeText={text => {
            console.log(text);
            this.setState({ text });
          }}
          // placeholder="www.youtube.com"
          placeholder="with placeholder and max of 5"
          maxLength={5}
          multiline={false}
          // keyboardType="numeric"
        />
        <TextInput
          // value={this.state.text}
          onChangeText={text => this.setState({ text })}
          // placeholder="www.youtube.com"
          placeholder="multiline"
          multiline={true}
        />
        <Button
          color="red"
          title="blur me"
          onPress={() => {
            this.refs.input.blur();
          }}
        />
        <Button
          color="orange"
          title="focus me"
          onPress={() => {
            this.refs.input.focus();
          }}
        />
        <Button
          color="yellow"
          title="clear me"
          onPress={() => {
            this.refs.input.clear();
          }}
        />

        <Button
          disabled
          title="disabled"
          onPress={() => {
            this.refs.input.clear();
          }}
        />
      </View>
    );
  }
}
