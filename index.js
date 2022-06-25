import { AppRegistry, LogBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

//TODO: react-native version issues with 0.68. need to investigate more.
LogBox.ignoreLogs([
    "exported from 'deprecated-react-native-prop-types'.",
])

AppRegistry.registerComponent(appName, () => App);
