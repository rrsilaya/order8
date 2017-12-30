import React, { Component } from 'react';
import {
  Container,
  Content,
  Body,
  Text,
  ListItem,
  Right,
  Radio,
} from 'native-base';
import PullContainer from 'react-native-pull-to-refresh';
import { connect } from 'react-redux';

import { styles } from '../../config/theme';
import { setActiveRestaurant, getRestaurants } from '../wrapper/duck';

class Settings extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Select Restaurant'
  });

  handleRefresh = () => {
    return new Promise(resolve => {
      this.props.getRestaurants();
      while (true) {
        if (!this.props.isGettingRestaurants) return resolve();
      }
    })
  }

  render() {
    const { restaurants, activeRestaurant, setActiveRestaurant } = this.props;

    return (
      <Container>
        <PullContainer onRefresh={this.handleRefresh}>
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
        </PullContainer>
      </Container>
    );
  }
};

const mapStateToProps = state => {
  return ({
    restaurants,
    activeRestaurant,
    isGettingRestaurants
  } = state.global);
}

export default connect(mapStateToProps, { setActiveRestaurant, getRestaurants })(Settings);