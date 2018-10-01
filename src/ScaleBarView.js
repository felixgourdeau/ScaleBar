// @flow

import React, { Component } from "react";
import { View } from "react-native";

import { LIMIT_SIZE } from "./constants";

import VerticalLine from "./VerticalLine";
import HorizontalLine from "./HorizontalLine";
import ScaleText from "./ScaleText";

type Props = {
  padding_left: number,
  padding_bottom: number,
  lengthMeter: number,
  lengthFeet: number,
  scaleTextMeters: string,
  scaleTextFeet: string
};

export default class ScaleBarView extends Component<Props> {
  render() {
    return (
      <View>
        <ScaleText
          padding_bottom={this.props.padding_bottom + 1}
          padding_left={this.props.padding_left}
          text={this.props.scaleTextMeters}
        />

        <ScaleText
          padding_bottom={this.props.padding_bottom - 14}
          padding_left={this.props.padding_left}
          text={this.props.scaleTextFeet}
        />

        <HorizontalLine
          padding_bottom={this.props.padding_bottom}
          padding_left={this.props.padding_left}
          length={this.props.lengthMeter}
        />

        <VerticalLine
          padding_bottom={this.props.padding_bottom}
          padding_left={this.props.padding_left}
          length={LIMIT_SIZE}
        />
        <VerticalLine
          padding_bottom={this.props.padding_bottom}
          padding_left={this.props.padding_left + this.props.lengthMeter}
          length={LIMIT_SIZE}
        />

        <VerticalLine
          padding_bottom={this.props.padding_bottom - LIMIT_SIZE}
          padding_left={this.props.padding_left}
          length={LIMIT_SIZE}
        />
        <VerticalLine
          padding_bottom={this.props.padding_bottom - LIMIT_SIZE}
          padding_left={this.props.padding_left + this.props.lengthFeet}
          length={LIMIT_SIZE}
        />
      </View>
    );
  }
}
