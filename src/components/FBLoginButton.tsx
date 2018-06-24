import * as React from 'react'
import { View } from 'react-native'
import { LoginButton } from 'react-native-fbsdk'

export default class FBLoginButton extends React.Component<{}> {
  render() {
    return (
      <View>
        <LoginButton
          readPermissions={['email']}
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log('Login failed with error: ' + error.message)
                alert('Login failed with error: ' + error)
              } else if (result.isCancelled) {
                console.log('Login was cancelled')
                alert('Login was cancelled')
              } else {
                console.log('Result ' + result)
                console.log('Result2 ' + JSON.stringify(result))
                console.log('Login was successful with permissions: ' + result.grantedPermissions)
                alert('Login was successful with permissions: ' + result.grantedPermissions)
              }
            }
          }
          onLogoutFinished={() => alert('User logged out')} />
      </View>
    )
  }
}