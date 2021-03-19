import { StyleSheet } from 'react-native';

const color = {
  primary: '#7babf9', //'#81d4fa',
  primaryGradient: '#8dc2ec',
  secondary: '#FFF',
  alert: '#cc3300',
};

const commonStyles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
});

const configs = {
  serverBaseUrl: 'https://couple-life.herokuapp.com/',
};

export { color, commonStyles, configs };
