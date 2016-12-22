import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Styles } from './HomeScreenStyles';
import { createRouter }  from '@exponent/ex-navigation';
import { Router } from '../Router';

//dispatch actions


export class HomeScreen extends React.Component {
  render() {
    return (
      <Text>React Boilerplate</Text>
    )
  }
}

const mapStateToProps = function(state) {
	return {
	}
}

const mapDispatchToProps = function(dispatch) {
	return { dispatch };
}
export default connect( mapStateToProps, mapDispatchToProps )(HomeScreen);
