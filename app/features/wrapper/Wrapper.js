import React, { Component } from 'react';
import { View, Text, Button, Icon } from 'native-base';
import { TabNavigator } from 'react-navigation';

import Summary from '../summary/Summary';
import Menu from '../menu/Menu';
import Orders from '../orders/Orders';
import FooterTab from '../footerTab/FooterTab';

const routes = {
  summary: { screen: Summary },
  menu: { screen: Menu },
  orders: { screen: Orders }
};

const config = {
  initialRouteName: 'menu',
  tabBarPosition: 'bottom',
  tabBarComponent: props => <FooterTab {...props} />
};

const Sections = TabNavigator(routes, config);

class Wrapper extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Order8',
    headerRight: (
      <Button transparent onPress={() => navigation.navigate('settings')}>
        <Icon name="settings" style={{ color: 'white' }} />
      </Button>
    )
  });

  render() {
    return (
      <Sections/>
    );
  }
};

export default Wrapper;