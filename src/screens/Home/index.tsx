import React, { memo } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { color, commonStyles } from '@common/constants';
import { scale } from '@common/utilities';

interface indexProps {}

const Home = ({}: indexProps) => {
  return (
    <View style={[commonStyles.center, { backgroundColor: color.secondary, flex: 1 }]}>
      <Image
        source={require('@assets/images/google.png')}
        style={{ width: scale(100), height: scale(100) }}
      />
    </View>
  );
};

export default memo(Home);

const styles = StyleSheet.create({});
