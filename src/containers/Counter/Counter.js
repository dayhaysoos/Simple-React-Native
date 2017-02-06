import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { increment, decrement } from '../../redux/actions/increment-action';

console.log(increment, decrement);

class Counter extends React.Component {

  incrementClick = () => {
  this.props.dispatch( increment('INCREMENT'));
  }

  decrementClick = () => {
  this.props.dispatch( decrement('DECREMENT'));
  }

  goBack = () => {
		this.props.navigator.pop();
	}

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.incrementContainer}>
          <Text style={Styles.decrement} onPress={this.decrementClick}>-</Text>
          <Text style={Styles.value}>{this.props.value}</Text>
          <Text style={Styles.increment} onPress={this.incrementClick}>+</Text>

        </View>
        <View style={Styles.backContainer}>
          <Text style={Styles.back} onPress={this.goBack}>Go Back</Text>
        </View>
      </View>
    )
  }
}


const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  },
  incrementContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  decrement: {
    fontSize: 20,
    paddingRight: 20
  },
  increment: {
    fontSize: 20,
    paddingLeft: 20
  },
  value: {
    fontSize: 20,
    maxWidth: 50
  },
  backContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  back: {
    fontSize: 40
  }
})

const mapStateToProps = function(state) {
	return {
    value: state.incrementer
	}
}

const mapDispatchToProps = function(dispatch) {
	return {
    dispatch,
    increment,
    decrement
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
