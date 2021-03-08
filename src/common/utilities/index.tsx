import { Dimensions } from 'react-native';

const baseWidth = 375;
let screenSize = Dimensions.get('window');

const isDesktop = screenSize.height < screenSize.width && screenSize.height > 812;

const scale = (value: number) => {
  return (value * screenSize.width) / baseWidth;
};

const setScreenSize = (value: object) => {
  screenSize = { ...screenSize, ...value };
};

// @flow
if (isDesktop) {
  setScreenSize({ width: 375 });
}

export { scale, setScreenSize, screenSize, isDesktop };
