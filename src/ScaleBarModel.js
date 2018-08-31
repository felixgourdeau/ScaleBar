// @flow

import R from "ramda";

import { Dimensions } from "react-native";

import {
  TILE_SIZE_METERS_AT_0_ZOOM,
  SCALE_STEPS_IN_METERS,
  SCALE_TEXT_IN_METERS,
  SCALE_SCREEN_RATIO
} from "./constants";

export const getDimensions = () => Dimensions.get("window");

const trim = R.curry((precision: number, number: number): number => +Number(number).toFixed(precision));
const trimTo7digits = trim(7);

const getResolutionFromZoomLevel = (zoom: number, latitude: number): number =>
  (TILE_SIZE_METERS_AT_0_ZOOM * Math.cos((latitude * Math.PI) / 180)) / Math.pow(2, zoom);

const getScaleBarSize = (scale_step: number, resolution: number): number =>
  trimTo7digits((2 * SCALE_STEPS_IN_METERS[scale_step]) / resolution);

const selectBestScaleStepFromResolution = R.curry(
  (resolution: number, best_scale_step: number, scale: number, current_step: number): number => {
    return getScaleBarSize(current_step, resolution) / getDimensions().width < SCALE_SCREEN_RATIO
      ? current_step
      : best_scale_step;
  }
);

const getScaleStepFromResolution = (resolution: number): number => {
  const selectBestScaleStep = selectBestScaleStepFromResolution(resolution);
  return SCALE_STEPS_IN_METERS.reduce(selectBestScaleStep, 0);
};

const getScaleTextFromScaleStep = (scale_step: number): string => SCALE_TEXT_IN_METERS[scale_step];

export const getScaleBarInfoFromZoomLevel = (
  zoom: number,
  latitude: number
): {
  scaleBarSize: number,
  scaleBarText: string
} => {
  const resolution = getResolutionFromZoomLevel(zoom, latitude);
  const scale_step = getScaleStepFromResolution(resolution);

  return {
    scaleBarSize: getScaleBarSize(scale_step, resolution),
    scaleBarText: getScaleTextFromScaleStep(scale_step)
  };
};
