import React, { memo } from 'react';
import { View, Text, StyleSheet, Platform, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { color, commonStyles } from '@common/constants';
import { scale } from '@common/utilities';
import CTextInput from 'common/components/CTextInput';

const LoginScreen = () => {
  return (
    <LinearGradient
      colors={[color.primary, color.primaryGradient]}
      style={[commonStyles.center, { flex: 1 }]}
      start={[0, 0.8]}
      end={[1, 0.2]}>
      <View style={styles.container}>
        <Text style={styles.containerLabel}>Sign in to</Text>
        <Text style={[styles.containerLabel, { fontSize: scale(26) }]}>Social Life</Text>

        <TextInput
          placeholder="Email"
          style={{
            width: scale(260),
            borderBottomWidth: scale(1),
            borderBottomColor: '#789',
            ...(Platform.OS === 'web' ? { outlineColor: 'transparent' } : {}),
          }}
        />
      </View>
    </LinearGradient>
  );
};

export default memo(LoginScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    width: scale(300),
    borderRadius: scale(30),
    padding: scale(16),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  containerLabel: {
    fontSize: scale(16),
    color: '#789',
    fontWeight: 'bold',
  },
});
