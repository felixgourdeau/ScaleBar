// @flow

import React, { Component } from "react";

import ScaleBarView from "./ScaleBarView";
import { getScaleBarInfoFromZoomLevel } from "./ScaleBarModel";

type Props = {
  zoom: number,
  latitude: number,
  tile_size: 256 | 512
};

class ScaleBar extends Component<Props> {
  static defaultProps = {
    latitude: 48.81879736812265,
    tile_size: 512
  };

  render() {
    const { scaleBarSize, scaleBarText } = getScaleBarInfoFromZoomLevel(this.props.zoom, this.props.latitude);

    const bottom = 37;
    const left = 15;

    return <ScaleBarView padding_left={left} padding_bottom={bottom} length={scaleBarSize} scale_text={scaleBarText} />;
  }
}

export default ScaleBar;
