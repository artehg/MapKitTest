/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, NativeModules } from 'react-native';
import MapScreen from './MapScreen';

export default class App extends Component {
  state = {
    showMapComponent: false
  }

  renderMapScreenComponent(){
    return (
      <MapScreen />
    )
  }


  render() {
    if (this.state.showMapComponent){
      return this.renderMapScreenComponent()
    }
    return (
      <View style={styles.container}>
          <View style={styles.button_root}>
            <Button style={{ marginBottom: 15 }} title="Open MapComponent" onPress={() => this.setState({ showMapComponent: true })} />
          </View>
          <View style={styles.button_root}>
            <Button title="Open Native Maps Activity" onPress={() => NativeModules.ActivityStarter.startMapActivity()} />
          </View>
          <Button title="Open Native Example Activity" onPress={() => NativeModules.ActivityStarter.startExampleActivity()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button_root: {
    marginBottom: 20
  }
});
