# react-native-iphone-util

iPhone utilities for React Native apps


## Installation

```sh
yarn add react-native-iphone-util
```

## Usage


| **Method**           | **Parameter** | **Return**                                                                                                                                                                                    |
|----------------------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| _getStatusBarHeight_ | safe (whether you want for get safe area height or not) | The height of the status bar: `44` for safe iPhone¹, `30` for unsafe iPhone¹, `20` for other iOS devices and `StatusBar.currentHeight` for Android. |
| _getBottomSpace_     |                                                         | The height of the bottom to fit the safe area: `34` for iPhone¹ and `0` for other devices.                                                          |

**NOTE**

- ¹ For iPhone with version higher than iPhone X


## Acknowledgements

- [react-native-iphone-x-helper](https://github.com/ptelad/react-native-iphone-x-helper)


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.


## License

MIT
