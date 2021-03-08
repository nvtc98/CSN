import React, { memo } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { color, commonStyles } from '@common/constants';
import { scale } from '@common/utilities';
import CTextInput from '@common/components/CTextInput';
import { AntDesign } from '@expo/vector-icons';
import CButton from '@common/components/CButton';

// @flow
const LoginScreen = ({ navigation }: { navigation: object }) => {
  return (
    <LinearGradient
      colors={[color.primary, color.primaryGradient]}
      style={{ flex: 1 }}
      start={[0, 0.8]}
      end={[1, 0.2]}>
      <ImageBackground
        style={[commonStyles.center, { flex: 1 }]}
        source={require('@assets/images/Untitled-1.png')}>
        <View style={styles.container}>
          <Text style={styles.containerLabel}>Sign in to</Text>
          <Text style={[styles.containerLabel, { fontSize: scale(26), marginBottom: scale(16) }]}>
            Social Life
          </Text>

          <LoginTextInput icon="mail" />
          <LoginTextInput icon="lock1" type="password" />

          <CButton
            style={{
              width: scale(200),
              height: scale(40),
              backgroundColor: color.primary,
              borderRadius: scale(20),
              marginTop: scale(24),
            }}
            text="Login"
            textStyle={{ color: '#FFF', fontWeight: 'bold' }}
          />

          <View
            style={[
              commonStyles.row,
              commonStyles.spaceBetween,
              { marginTop: scale(20), width: scale(130) },
            ]}>
            <CButton style={[styles.socialButton, { borderColor: '#c6523a' }]}>
              <Image
                source={require('@assets/images/google.png')}
                style={{ width: scale(17), height: scale(17) }}
              />
            </CButton>
            <CButton
              style={[styles.socialButton, { borderColor: '#3B5998' }]}
              iconName="facebook"
              iconType="FontAwesome"
              textStyle={{ fontSize: scale(17), color: '#3B5998' }}
            />
            <CButton
              style={[styles.socialButton, { borderColor: '#000' }]}
              iconName="apple"
              iconType="FontAwesome"
              textStyle={{ fontSize: scale(17), color: '#000' }}
            />
          </View>
          <CButton
            text="Don't have an account? Register"
            textStyle={{ fontSize: scale(11), color: color.primary, marginTop: scale(20) }}
          />
          <CButton
            text="Forgot password"
            textStyle={{ fontSize: scale(11), color: color.primary, marginTop: scale(8) }}
          />
          <CButton
            onPress={() => navigation.navigate('Tab')}
            text="Continue without login"
            textStyle={{ fontSize: scale(11), color: color.primary, marginTop: scale(8) }}
          />
        </View>
      </ImageBackground>
    </LinearGradient>
  );
};

const LoginTextInput = memo(({ icon, type }: { icon: any; type?: 'text' | 'password' }) => {
  return (
    <View
      style={[
        commonStyles.row,
        commonStyles.spaceBetween,
        {
          width: scale(260),
          borderBottomWidth: scale(1),
          borderBottomColor: '#789',
          padding: scale(4),
          marginTop: scale(12),
        },
      ]}>
      <CTextInput style={{ width: '85%' }} type={type} />
      <AntDesign name={icon} size={18} color="#789" />
    </View>
  );
});

export default memo(LoginScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    width: scale(300),
    borderRadius: scale(30),
    paddingHorizontal: scale(16),
    paddingVertical: scale(30),
    marginBottom: '5%',

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
  socialButton: {
    width: scale(34),
    height: scale(34),
    borderRadius: scale(17),
    borderWidth: scale(1),
  },
});
