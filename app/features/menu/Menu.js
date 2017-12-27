import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Text
} from 'native-base';

class Menu extends Component {
  render() {
    return (
      <Container>
        <Text>{JSON.stringify(this.props.menu)}</Text>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { menu } = state.global;

  return {
    menu
  };
}

export default connect(mapStateToProps)(Menu);