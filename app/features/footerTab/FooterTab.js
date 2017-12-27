import React, { Component } from 'react';
import {
  FooterTab as FootTab,
  Footer,
  Button,
  Icon,
  Text,
} from 'native-base';

class FooterTab extends Component {
  render() {
    const { navigationState, navigation } = this.props;

    return (
      <Footer>
        <FootTab>
          <Button
            vertical
            active={navigationState.index === 0}
            onPress={() => navigation.navigate('summary')}>
            <Icon name="restaurant"/>
            <Text>Summary</Text>
          </Button>
          <Button
            vertical
            active={navigationState.index === 1}
            onPress={() => navigation.navigate('menu')}>
            <Icon name="list-box"/>
            <Text>Menu</Text>
          </Button>
          <Button
            vertical
            active={navigationState.index === 2}
            onPress={() => navigation.navigate('orders')}>
            <Icon name="cart"/>
            <Text>Orders</Text>
          </Button>
        </FootTab>
      </Footer>
    );
  }
}

export default FooterTab;