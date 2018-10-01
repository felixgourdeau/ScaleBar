export const LINE_SIZE = 1;
export const LINE_COLOR = "rgba(10, 10, 10, 1)";
export const LIMIT_SIZE = 5;
export const SCALE_SCREEN_RATIO = 0.45;

export const FEET_PER_METER = 3.28084;
export const FEET_PER_MILES = 5280;

import { Dimensions } from "react-native";
export const getDimensions = () => Dimensions.get("window");

export const TILE_SIZE_METERS_AT_0_ZOOM = 156543.03;

export const SCALE_STEPS_IN_METERS = [
  5,
  10,
  20,
  50,
  100,
  200,
  500,
  1000,
  2 * 1000,
  5 * 1000,
  10 * 1000,
  20 * 1000,
  50 * 1000,
  100 * 1000,
  200 * 1000,
  500 * 1000,
  1000 * 1000,
  2000 * 1000
];

export const SCALE_TEXT_IN_METERS = [
  "5m",
  "10m",
  "20m",
  "50m",
  "100m",
  "200m",
  "500m",
  "1km",
  "2km",
  "5km",
  "10km",
  "20km",
  "50km",
  "100km",
  "200km",
  "500km",
  "1000km",
  "2000km"
];

export const SCALE_STEPS_IN_FEET = [
  10,
  20,
  50,
  100,
  200,
  500,
  1000,
  0.5 * FEET_PER_MILES,
  1 * FEET_PER_MILES,
  2 * FEET_PER_MILES,
  5 * FEET_PER_MILES,
  10 * FEET_PER_MILES,
  20 * FEET_PER_MILES,
  50 * FEET_PER_MILES,
  100 * FEET_PER_MILES,
  200 * FEET_PER_MILES,
  500 * FEET_PER_MILES,
  1000 * FEET_PER_MILES
];

export const SCALE_TEXT_IN_FEET = [
  "10ft",
  "20ft",
  "50ft",
  "100ft",
  "200ft",
  "500ft",
  "1000ft",
  "0.5mi",
  "1mi",
  "2mi",
  "5mi",
  "10mi",
  "20mi",
  "50mi",
  "100mi",
  "200mi",
  "500mi",
  "1000mi"
];
