# install node and watchman
brew install node 
brew install watchman 
# install react native cli
npm install react-native-cli -g

Troubleshooting:
/Volumes/Shorty_JetDrive_1/dev/git/LingoApp/node_modules/react-native/React/../third-party/folly-2016.09.26.00/folly/detail/BitIteratorDetail.h:21:10: fatal error: 'boost/iterator/iterator_adaptor.hpp' file not found
#include <boost/iterator/iterator_adaptor.hpp>
         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
1 error generated.
-> https://github.com/facebook/react-native/issues/14404

Command failed: /usr/libexec/PlistBuddy -c Print:CFBundleIdentifier build/Build/Products/Debug-iphonesimulator/LingoApp.app/Info.plist
Print: Entry, ":CFBundleIdentifier", Does Not Exist
-> https://github.com/facebook/react-native/issues/14423