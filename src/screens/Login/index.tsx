import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { color } from '@common/constants';

const LoginScreen = () => {
  return (
    <LinearGradient
      colors={[color.primary, color.primaryGradient]}
      style={{ flex: 1 }}
      start={[0, 0.8]}
      end={[1, 0.2]}>
      <Text style={{}}>Sign in with Facebook</Text>
    </LinearGradient>
  );
};

export default memo(LoginScreen);
