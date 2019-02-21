import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default class Other extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is some other text...</Text>
        <Button
          title="See the Original Text"
          onPress={() => this.props.navigation.navigate('Home')}
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
  },
  text: {
    fontSize: 30,
    textAlign: 'center'
  }
})

