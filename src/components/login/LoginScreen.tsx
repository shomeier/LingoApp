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

import FBLoginButton from './FBLoginButton'

export default class LoginScreen extends React.Component<{}> {

  render() {
    return (
      <View style={styles.container}>
        <FBLoginButton/>
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
