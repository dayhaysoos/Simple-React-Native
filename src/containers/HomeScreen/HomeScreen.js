import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { createRouter }  from '@exponent/ex-navigation';
import { Router } from '../Router';

//dispatch actions


export class HomeScreen extends React.Component {

  goToAbout = () => {
    this.props.navigator.push(Router.getRoute('about'));
  }

  goToCounter = () => {
    this.props.navigator.push(Router.getRoute('counter'));
  }

  render() {
    console.log(this.props)
    return (
      <View style={Styles.container}>
        <Text>Simple-React-Native</Text>
        <Text onPress={this.goToCounter}>Go to Redux Counter</Text>
        <Text onPress={this.goToAbout}>Go to About</Text>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  container: {
		paddingTop: 30,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

const mapStateToProps = function(state) {
	return {
	}
}

const mapDispatchToProps = function(dispatch) {
	return { dispatch };
}
export default connect( mapStateToProps, mapDispatchToProps )(HomeScreen);
