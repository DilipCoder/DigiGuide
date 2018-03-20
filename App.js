/**
 * Rajsthan Hackathon 4.0,
 * Digi-Guide,
 * Team : syn-ack,
 * Auther : DilipCoder,
 * Date : 19/03/18
* */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import store from './store';
import Splash from './components/splash';
import HomeScreen from './components/index';

const RootNav = StackNavigator(
  {
    SplashScreen: {
      screen: Splash,
      },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerStyle: {
          display:'none'
        },
      },
    },
  },
  {
    initialRouteName: 'SplashScreen',
  }
);

export default class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <RootNav />
      </Provider>
    );
  }
}
