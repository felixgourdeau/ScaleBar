// @flow

import React, { Component } from "react";
import { View, Text } from "react-native";

type Props = {
  text: string,
  padding_bottom: number,
  padding_left: number
};

export default class ScaleText extends Component<Props> {
  render() {
    return (
      <View
        style={{
          position: "absolute",
          bottom: this.props.padding_bottom,
          left: this.props.padding_left + 3
        }}
      >
        <Text
          style={{
            fontSize: 10,
            color: "black"
          }}
        >
          {this.props.text}
        </Text>
      </View>
    );
  }
}
