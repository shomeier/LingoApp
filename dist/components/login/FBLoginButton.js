"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const react_native_fbsdk_1 = require("react-native-fbsdk");
class FBLoginButton extends React.Component {
    _responseInfoCallback(error, result) {
        if (error) {
            alert('Error fetching data: ' + error.toString());
        }
        else {
            console.log('Success fetching data: ' + result.toString());
            console.log('Success fetching data: ' + JSON.stringify(result));
            console.log('Success fetching data: ' + JSON.stringify(result.toString()));
            alert('Success fetching data: ' + result.toString());
        }
    }
    render() {
        const infoRequest = new react_native_fbsdk_1.GraphRequest('/me?locale=en_US&fields=name,email', undefined, this._responseInfoCallback);
        return (React.createElement(react_native_1.View, null,
            React.createElement(react_native_fbsdk_1.LoginButton, { readPermissions: ['email'], onLoginFinished: (error, result) => {
                    if (error) {
                        console.log('Login failed with error: ' + error.message);
                        alert('Login failed with error: ' + error);
                    }
                    else if (result.isCancelled) {
                        console.log('Login was cancelled');
                        alert('Login was cancelled');
                    }
                    else {
                        console.log('Result ' + result);
                        console.log('Result2 ' + JSON.stringify(result));
                        console.log('Login was successful with permissions: ' + result.grantedPermissions);
                        alert('Login was successful with permissions: ' + result.grantedPermissions);
                        new react_native_fbsdk_1.GraphRequestManager().addRequest(infoRequest).start();
                    }
                }, onLogoutFinished: () => alert('User logged out') })));
    }
}
exports.default = FBLoginButton;
//# sourceMappingURL=FBLoginButton.js.map