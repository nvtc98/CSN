import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { color } from '@common/constants';

interface indexProps {}

const Home = ({}: indexProps) => {
  return (
    <View style={{ backgroundColor: color.secondary, flex: 1 }}>
      <Text>Homo hehe</Text>
    </View>
  );
};

export default memo(Home);

const styles = StyleSheet.create({});
