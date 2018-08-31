import { getScaleBarInfoFromZoomLevel } from "./ScaleBarModel";

describe("ScaleBar", () => {
  beforeEach(() => {
    jest.mock("Dimensions", () => {
      const Dimensions = require.requireActual("Dimensions");
      Dimensions.get = () => {
        return {
          width: 411.42857142857144,
          height: 683.4285714285714,
          scale: 2.625,
          fontScale: 1
        };
      };
      return Dimensions;
    });
  });

  it("should return the correct info regards to the zoom level", () => {
    const latitude = 48.81879736812265;

    expect(getScaleBarInfoFromZoomLevel(0, latitude)).toEqual({
      scaleBarSize: 38.8068463,
      scaleBarText: "2000km"
    });

    expect(getScaleBarInfoFromZoomLevel(7, latitude)).toEqual({
      scaleBarSize: 124.1819082,
      scaleBarText: "50km"
    });

    expect(getScaleBarInfoFromZoomLevel(7.6276124914962615, latitude)).toEqual({
      scaleBarSize: 191.8618,
      scaleBarText: "50km"
    });

    expect(getScaleBarInfoFromZoomLevel(10.016228977070856, latitude)).toEqual({
      scaleBarSize: 200.9387613,
      scaleBarText: "10km"
    });

    expect(getScaleBarInfoFromZoomLevel(13.578115410144095, latitude)).toEqual({
      scaleBarSize: 237.3003496,
      scaleBarText: "1km"
    });

    expect(getScaleBarInfoFromZoomLevel(15, latitude)).toEqual({
      scaleBarSize: 127.162274,
      scaleBarText: "200m"
    });
  });
});
