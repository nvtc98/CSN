import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { scale } from './src/utilities';

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Gke Gke</Text>
        <Image
          source={require('./src/assets/IMG_0658.JPG')}
          style={{ width: scale(100), height: scale(100) }}
          resizeMode="contain"
        />
      </View>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
