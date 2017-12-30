import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StyleProvider, Root } from 'native-base';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './app/config/store';

import getTheme from './native-base-theme/components';
import colors from './native-base-theme/variables/commonColor';
import App from './app/App';
import Loader from './app/features/loader/Loader';

class Order8 extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(colors)}>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={<Loader/>}>
            <Root>
              <App/>
            </Root>
          </PersistGate>
        </Provider>
      </StyleProvider>
    );
  }
}

AppRegistry.registerComponent('Order8', () => Order8);
