import React, { Component } from 'react';
import {
  Container,
  Text,
  Spinner
} from 'native-base'

import { colors } from '../../config/theme';

class Loader extends Component {
  static navigationOptions = () => ({
    header: null
  });

  render() {
    return (
      <Container style={styles.loader}>
        <Spinner color={colors.white} />
      </Container>
    );
  }
}

const styles = {
  loader: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.base
  }
};

export default Loader;