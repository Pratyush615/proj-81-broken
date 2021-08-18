import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './screens/Profile';
import CreatePost from './screens/CreatePost';
import Feed from './screens/Feed';
import TabNavigator from './navigation/TabNavigator';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default class App extends React.Component{
render(){
  return(
    <AppContainer/>
  )
}
}
const TabNavigator = createBottomTabNavigator({
  Post: {screen:CreatePost},
  Feed: {screen:Feed}
})
const AppContainer = createAppContainer(TabNavigator)