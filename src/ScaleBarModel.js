// @flow

import R from "ramda";

import {
  TILE_SIZE_METERS_AT_0_ZOOM,
  SCALE_STEPS_IN_METERS,
  SCALE_TEXT_IN_METERS,
  SCALE_SCREEN_RATIO,
  SCALE_STEPS_IN_FEET,
  SCALE_TEXT_IN_FEET,
  FEET_PER_METER,
  getDimensions
} from "./constants";

const trim = R.curry((precision: number, number: number): number => +Number(number).toFixed(precision));
const trimTo7digits = trim(7);

const getResolutionFromZoomLevel = (zoom: number, latitude: number): number =>
  (TILE_SIZE_METERS_AT_0_ZOOM * Math.cos((latitude * Math.PI) / 180)) / Math.pow(2, zoom);

const getScaleBarSizeInMeters = (scale_step: number, resolution: number): number =>
  trimTo7digits((2 * SCALE_STEPS_IN_METERS[scale_step]) / resolution);

const selectBestScaleStepFromResolution = R.curry(
  (resolution: number, best_scale_step: number, scale: number, current_step: number): number => {
    return getScaleBarSizeInMeters(current_step, resolution) / getDimensions().width < SCALE_SCREEN_RATIO
      ? current_step
      : best_scale_step;
  }
);

const getScaleStepFromResolution = (resolution: number): number => {
  const selectBestScaleStep = selectBestScaleStepFromResolution(resolution);
  return SCALE_STEPS_IN_METERS.reduce(selectBestScaleStep, 0);
};

const getScaleBarSizeInFeet = (scale_step: number, resolution: number): number =>
  trimTo7digits((2 * SCALE_STEPS_IN_FEET[scale_step]) / resolution / FEET_PER_METER);
const getScaleTextIMetersFromScaleStep = (scale_step: number): string => SCALE_TEXT_IN_METERS[scale_step];
const getScaleTextInFeetFromScaleStep = (scale_step: number): string => SCALE_TEXT_IN_FEET[scale_step];

export const getScaleBarInfoFromZoomLevel = (
  zoom: number,
  latitude: number
): {
  scaleBarSizeInMeters: number,
  scaleBarTextInMeters: string,
  scaleBarSizeInFeet: number,
  scaleBarTextInFeet: string
} => {
  const resolution = getResolutionFromZoomLevel(zoom, latitude);
  const scale_step = getScaleStepFromResolution(resolution);

  return {
    scaleBarSizeInMeters: getScaleBarSizeInMeters(scale_step, resolution),
    scaleBarTextInMeters: getScaleTextIMetersFromScaleStep(scale_step),
    scaleBarSizeInFeet: getScaleBarSizeInFeet(scale_step, resolution),
    scaleBarTextInFeet: getScaleTextInFeetFromScaleStep(scale_step)
  };
};
