import React, { Component } from 'react';
import {
  Container,
  Content,
  Body,
  Text,
  ListItem,
  Right,
  Radio
} from 'native-base'
import { connect } from 'react-redux';

import { styles } from '../../config/theme';
import { setActiveRestaurant } from '../wrapper/duck';

class Settings extends Component {
  static navigationOptions = () => ({
    title: 'Select Restaurant'
  });

  render() {
    const { restaurants, activeRestaurant, setActiveRestaurant } = this.props;

    return (
      <Container>
        <Content>
          {
            restaurants.map(restaurant => (
              <ListItem style={styles.list} key={restaurant.id} onPress={() => setActiveRestaurant(restaurant.id)}>
                <Body><Text>{restaurant.name}</Text></Body>
                <Right>
                  <Radio selected={restaurant.id === activeRestaurant} onPress={() => setActiveRestaurant(restaurant.id)}/>
                </Right>
              </ListItem>
            ))
          }
        </Content>
      </Container>
    );
  }
};

const mapStateToProps = state => {
  return ({
    restaurants,
    activeRestaurant
  } = state.global);
}

export default connect(mapStateToProps, { setActiveRestaurant })(Settings);