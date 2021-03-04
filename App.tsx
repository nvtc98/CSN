/* eslint-disable flowtype/no-types-missing-file-annotation */
import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { scale, isDesktop } from '@common/utilities';
import { color } from '@common/constants';
import { AntDesign } from '@expo/vector-icons';
import Store from '@redux/store.js';
import Login from '@screens/Login';
import Home from '@screens/Home';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return isDesktop ? (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EFEFEF',
      }}>
      <View style={{ width: 375, height: 812, borderRadius: 12, overflow: 'hidden' }}>
        <NavContainer />
      </View>
    </View>
  ) : (
    <NavContainer />
  );
};

const NavContainer = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer onStateChange={() => {}}>
        <Stack.Navigator headerMode="none" initialRouteName="Login">
          <Stack.Screen name="Tab" component={TabContainer} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const TabContainer = () => {
  const tabOption = (name: any) => ({
    tabBarVisible: false,
    tabBarIcon: ({ focused }: { focused: boolean }) => (
      <View style={styles.tabContainer}>
        <AntDesign
          name={name}
          size={focused ? scale(20) : scale(16)}
          color={color.secondary}
          style={{ opacity: focused ? 1 : 0.6 }}
        />
      </View>
    ),
  });

  return (
    <Tab.Navigator
      shifting
      labeled={false}
      barStyle={styles.footerContainer}
      initialRouteName="Home">
      <Tab.Screen name="Notification" component={Home} options={tabOption('notification')} />
      <Tab.Screen name="Home" component={Home} options={tabOption('home')} />
      <Tab.Screen name="Profile" component={Home} options={tabOption('user')} />
    </Tab.Navigator>
  );
};

export default App;

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: color.primary,
    borderRadius: scale(100),
    overflow: 'hidden',
    position: 'absolute',
    bottom: scale(14),
    left: scale(80),
    right: scale(80),
    height: scale(40),
    justifyContent: 'center',
  },
  tabContainer: {
    width: scale(20),
    height: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
