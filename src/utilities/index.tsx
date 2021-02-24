import { Dimensions } from 'react-native';

const baseWidth = 375;

// @flow
const scale = (value: number) => {
  return (value * Dimensions.get('window').width) / baseWidth;
};

export { scale };
