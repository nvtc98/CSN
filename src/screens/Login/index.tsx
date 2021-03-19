import React, { memo } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { color, commonStyles } from '@common/constants';
import { scale } from '@common/utilities';
import CTextInput from '@common/components/CTextInput';
import { AntDesign } from '@expo/vector-icons';
import CButton from '@common/components/CButton';
import { ActivityIndicator } from 'react-native-paper';
import { useLogin } from './Util';

// @flow
const LoginScreen = ({ navigation }: { navigation: any }) => {
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

          <LoginContainer />

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

const LoginContainer = memo(() => {
  const { onLogin, onChangeText, errorMessage, loading } = useLogin();
  return (
    <>
      <LoginTextInput
        icon="mail"
        onChangeText={(value: string) => onChangeText('username', value)}
      />
      <LoginTextInput
        icon="lock1"
        type="password"
        onChangeText={(value: string) => onChangeText('password', value)}
      />

      <View>
        <Text
          style={{
            color: color.alert,
            fontSize: scale(10),
            position: 'absolute',
            top: scale(8),
            left: 0,
            right: 0,
            textAlign: 'center',
          }}>
          {errorMessage}
        </Text>
        <CButton
          style={{
            width: scale(200),
            height: scale(40),
            backgroundColor: color.primary,
            borderRadius: scale(20),
            marginTop: scale(30),
          }}
          onPress={onLogin}>
          {loading ? (
            <ActivityIndicator color={color.primaryGradient} />
          ) : (
            <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Login</Text>
          )}
        </CButton>
      </View>
    </>
  );
});

const LoginTextInput = memo(
  ({
    icon,
    type,
    onChangeText,
  }: {
    icon: any;
    type?: 'text' | 'password';
    onChangeText: Function;
  }) => {
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
        <CTextInput style={{ width: '85%' }} type={type} onChangeText={onChangeText} />
        <AntDesign name={icon} size={18} color="#789" />
      </View>
    );
  }
);

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
