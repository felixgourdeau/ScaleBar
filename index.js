// @flow

import React, { Component } from "react";

import ScaleBarView from "./src/ScaleBarView";
import { getScaleBarInfoFromZoomLevel } from "./src/ScaleBarModel";

type Props = {
  zoom: number,
  latitude: number,
  tile_size: 256 | 512,
  bottom: number,
  left: number,
};

class ScaleBar extends Component<Props> {
  static defaultProps = {
    bottom: 37,
    left: 15,
    latitude: 48.81879736812265,
    tile_size: 512
  };

  render() {
    const { scaleBarSize, scaleBarText } = getScaleBarInfoFromZoomLevel(this.props.zoom, this.props.latitude);

    return <ScaleBarView padding_left={this.props.left} padding_bottom={this.props.bottom} length={scaleBarSize} scale_text={scaleBarText} />;
  }
}

export default ScaleBar;
