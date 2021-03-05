import { StyleSheet } from 'react-native';

const color = {
  primary: '#7babf9', //'#81d4fa',
  primaryGradient: '#8dc2ec',
  secondary: '#FFF',
};

const commonStyles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
});

export { color, commonStyles };
