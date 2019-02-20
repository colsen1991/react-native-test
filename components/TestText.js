import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import {getText} from '../reducers/text'

class TestText extends Component {
  componentDidMount () {
    this.props.getText()
  }

  render () {
    return (
      <View>
        <Text style={styles.text}>{this.props.loading ? 'Loading...' : this.props.text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center'
  }
})

const mapStateToProps = state => ({text: state.text, loading: state.loading});

const mapDispatchToProps = {getText};

export default connect(mapStateToProps, mapDispatchToProps)(TestText);
