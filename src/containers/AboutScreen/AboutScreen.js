import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

export default class AboutScreen extends React.Component {

  goBack = () => {
    this.props.navigator.pop();
  }

  render() {
    return(
      <View style={Styles.container}>
        <Text>About Page</Text>
        <Text onPress={this.goBack}>Go Back</Text>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  container: {
    paddingTop: 30
  }
})
