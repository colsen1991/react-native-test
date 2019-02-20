import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import textReducer, {getText} from './reducers/text'
import TestText from './components/TestText'

const client = axios.create({
  baseURL: 'http://www.mocky.io/v2',
  responseType: 'json'
});

const store = createStore(textReducer, applyMiddleware(axiosMiddleware(client)));

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <TestText/>
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})

