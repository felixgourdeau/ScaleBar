// @flow

import React, { Component } from "react";
import { View } from "react-native";

import { LINE_SIZE, LINE_COLOR } from "./constants";

type Props = {
  padding_left: number,
  padding_bottom: number,
  length: number
};

export default class VerticalLine extends Component<Props> {
  render() {
    return (
      <View
        style={{
          bottom: this.props.padding_bottom,
          left: this.props.padding_left,
          height: this.props.length,
          position: "absolute",
          width: LINE_SIZE,
          backgroundColor: LINE_COLOR
        }}
      />
    );
  }
}
