/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import {
  createStackNavigator
} from 'react-navigation'

import LoginScreen from './components/login/LoginScreen'

const RootStack = createStackNavigator({
  Home: {
    screen: LoginScreen
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RootStack />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})
