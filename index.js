import React from 'react'
import {AppRegistry} from 'react-native';
import Home from './screens/Home';
import Other from './screens/Other';
import {name as appName} from './app.json';
import {applyMiddleware, createStore} from 'redux'
import textReducer from './reducers/testText'
import axiosMiddleware from 'redux-axios-middleware'
import axios from 'axios'
import {createStackNavigator, createAppContainer} from "react-navigation"
import {Provider} from 'react-redux'

const client = axios.create({
  baseURL: 'http://www.mocky.io/v2',
  responseType: 'json'
});

const store = createStore(textReducer, applyMiddleware(axiosMiddleware(client)));

const AppNavigator = createStackNavigator({
  Home,
  Other
}, {
  initialRouteName: 'Home'
})

const AppContainer = createAppContainer(AppNavigator)

const Root = () => (
  <Provider store={store}>
    <AppContainer/>
  </Provider>
)

AppRegistry.registerComponent(appName, () => Root);
