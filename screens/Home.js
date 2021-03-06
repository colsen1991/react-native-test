import React, {Component} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import TestText from '../components/TestText'

export default class Home extends Component {
  render () {
    return (
      <View style={styles.container}>
        <TestText textId={'5c6eb3fe3400003900892e79'}/>
        <Button
          title="See the Other Text"
          onPress={() => this.props.navigation.navigate('Other')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})

