/**
 * @format
 */

if (__DEV__) {
    require('react-devtools');
}

import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
