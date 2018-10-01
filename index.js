// @flow

import React, { Component } from "react";

import ScaleBarView from "./src/ScaleBarView";
import { getScaleBarInfoFromZoomLevel } from "./src/ScaleBarModel";

type Props = {
  zoom: number,
  latitude: number,
  bottom: number,
  left: number
};

class ScaleBar extends Component<Props> {
  static defaultProps = {
    latitude: 48.81879736812265,
    bottom: 42,
    left: 10
  };

  render() {
    const {
      scaleBarSizeInMeters,
      scaleBarTextInMeters,
      scaleBarSizeInFeet,
      scaleBarTextInFeet
    } = getScaleBarInfoFromZoomLevel(this.props.zoom, this.props.latitude);

    return (
      <ScaleBarView
        padding_left={this.props.left}
        padding_bottom={this.props.bottom}
        lengthMeter={scaleBarSizeInMeters}
        lengthFeet={scaleBarSizeInFeet}
        scaleTextMeters={scaleBarTextInMeters}
        scaleTextFeet={scaleBarTextInFeet}
      />
    );
  }
}

export default ScaleBar;
