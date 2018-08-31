# react-native-scale-bar  [![NPM version](https://badge.fury.io/js/react-native-scale-bar.svg)](https://badge.fury.io/js/react-native-scale-bar.svg) [![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](/)



Scale bar for MapView in React Native. Works with Mapbox and Google Map.

![Image](images/screenshot.png)


## Installation

```
npm install --save react-native-scale-bar
```

## Usage

```
<ScaleBar zoom={this.props.zoom_level} latitude={this.state.gpsCoord[1]} tile_size={512} />
```

## Properties

| Prop  | Required  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| zoom | yes | `number` | Pass the zoom level to the component to adjust the scale bar.  |
| date | - | <code>string &#124; date &#124; Moment instance</code> | Specify the display date of DatePicker. `string` type value must match the specified format |
| mode | 'date' | `enum` | The `enum` of `date`, `datetime` and `time` |
| androidMode | 'default' | `enum` | The `enum` of `default`, `calendar` and `spinner` (only Android) |
| format | 'YYYY-MM-DD' | `string` | Specify the display format of the date, which using [moment.js](http://momentjs.com/). The default value change according to the mode. |
| confirmBtnText | '确定' | `string` | Specify the text of confirm btn in ios. |
| cancelBtnText | '取消' | `string` | Specify the text of cancel btn in ios. |
| iconSource | - | <code>{uri: string} &#124; number</code> | Specify the icon. Same as the `source` of Image, always using `require()` |
| minDate | - | <code>string &#124; date</code> | Restricts the range of possible date values. |
| maxDate | - | <code>string &#124; date</code> | Restricts the range of possible date values. |
| duration | 300 | `number` | Specify the animation duration of datepicker.|
| customStyles | - | `object` | The hook of customize datepicker style, same as the native style. `dateTouchBody`, `dateInput`...|
| showIcon | true | `boolean` | Controller whether or not show the icon |
| hideText | false | `boolean` | Controller whether or not show the `dateText` |
| iconComponent | - | `element` | Set the custom icon |
| disabled | false | `boolean` | Controller whether or not disable the picker |
| is24Hour | - | `boolean` | Set the TimePicker is24Hour flag. The default value depend on `format`. Only work in Android |
| allowFontScaling | true | `boolean` | Set to false to disable font scaling for every text component |
| placeholder | '' | `string` | The placeholder show when this.props.date is falsy |
| onDateChange | - | `function` | This is called when the user confirm the picked date or time in the UI. The first and only argument is a date or time string representing the new date and time formatted by [moment.js](http://momentjs.com/) with the given format property. |
| onOpenModal | - | `function` | This is called when the DatePicker Modal open. |
| onCloseModal | - | `function` | This is called when the DatePicker Modal close |
| onPressMask | - | `function` | This is called when clicking the ios modal mask |
| modalOnResponderTerminationRequest | - | `function` | Set the callback for React Native's [Gesture Responder System](https://facebook.github.io/react-native/docs/gesture-responder-system.html#responder-lifecycle)'s call to `onResponderTerminationRequest`. By default this will reject a termination request, but can be overidden in case the View under the Modal is implementing custom gesture responders, and you wish for those to be overidden in certain cases.  |
| TouchableComponent | `TouchableHighlight` | `Component` | Replace the `TouchableHighlight` with a custom `Component`. For example : `TouchableOpacity` |
| getDateStr | - | Function | A function to override how to format the date into a `String` for display, receives a `Date` instance