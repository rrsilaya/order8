import React, { Component } from 'react';
import { View, Text, Button, Icon } from 'native-base';
import { TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import Summary from '../summary/Summary';
import Menu from '../menu/Menu';
import Orders from '../orders/Orders';
import FooterTab from '../footerTab/FooterTab';

import { getRestaurants } from './duck';

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

  componentDidMount() {
    if (!this.props.restaurants.length) this.props.getRestaurants();
  }

  render() {
    return (
      <Sections/>
    );
  }
};

const mapStateToProps = state => {
  return ({
    restaurants
  } = state.global);
};

export default connect(mapStateToProps, { getRestaurants })(Wrapper);