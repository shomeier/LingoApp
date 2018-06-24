import * as React from 'react'
import { View } from 'react-native'
import { LoginButton, GraphRequest, GraphRequestManager} from 'react-native-fbsdk'

export default class FBLoginButton extends React.Component<{}> {

  _responseInfoCallback(error?: any, result?: any) {
    if (error) {
      alert('Error fetching data: ' + error.toString())
    } else {
      console.log('Success fetching data: ' + result.toString())
      console.log('Success fetching data: ' + JSON.stringify(result))
      console.log('Success fetching data: ' + JSON.stringify(result.toString()))
      alert('Success fetching data: ' + result.toString())
    }
  }

  render() {
    const infoRequest = new GraphRequest(
      '/me?locale=en_US&fields=name,email',
      undefined,
      this._responseInfoCallback
    )

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
                new GraphRequestManager().addRequest(infoRequest).start()
              }
            }
          }
          onLogoutFinished={() => alert('User logged out')} />
      </View>
    )
  }
}