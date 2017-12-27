import React from 'react';
import { StackNavigator } from 'react-navigation';

import Loader from './features/loader/Loader';
import Wrapper from './features/wrapper/Wrapper';
import Settings from './features/settings/Settings';

import { colors } from './config/theme';

const routes = {
  app: { screen: Wrapper },
  settings: { screen: Settings }
};

const config = {
  navigationOptions: {
    headerStyle: {
      backgroundColor: colors.base
    },
    headerTintColor: colors.white,
    headerPressColorAndroid: 'rgba(255, 255, 255, 0.3)'
  }
};

const App = StackNavigator(routes, config);
export default App;