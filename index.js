import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StyleProvider } from 'native-base';

import { Provider } from 'react-redux';
import store from './app/config/store';

import getTheme from './native-base-theme/components';
import colors from './native-base-theme/variables/commonColor';
import App from './app/App';

class Order8 extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(colors)}>
        <Provider store={store}>
          <App/>
        </Provider>
      </StyleProvider>
    );
  }
}

AppRegistry.registerComponent('Order8', () => Order8);
