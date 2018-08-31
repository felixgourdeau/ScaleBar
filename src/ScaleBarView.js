// @flow

import React, { Component } from "react";
import { Text, View } from "react-native";

import { LIMIT_SIZE } from "./constants";

import VerticalLine from "./VerticalLine";
import HorizontalLine from "./HorizontalLine";

type Props = {
  padding_left: number,
  padding_bottom: number,
  length: number,
  scale_text: string
};

export default class ScaleBarView extends Component<Props> {
  render() {
    return (
      <View>
        <View
          style={{
            position: "absolute",
            bottom: this.props.padding_bottom,
            left: this.props.padding_left + 3
          }}
        >
          <Text>{this.props.scale_text}</Text>
        </View>

        <HorizontalLine
          padding_bottom={this.props.padding_bottom}
          padding_left={this.props.padding_left}
          length={this.props.length}
        />

        <VerticalLine
          padding_bottom={this.props.padding_bottom}
          padding_left={this.props.padding_left}
          length={LIMIT_SIZE}
        />
        <VerticalLine
          padding_bottom={this.props.padding_bottom}
          padding_left={this.props.padding_left + this.props.length}
          length={LIMIT_SIZE}
        />
      </View>
    );
  }
}
