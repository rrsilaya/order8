import React, { Component } from 'react';
import { Text } from 'native-base'

class Settings extends Component {
  static navigationOptions = () => ({
    title: 'Settings'
  });

  render() {
    return (
      <Text>Settings</Text>
    );
  }
}

export default Settings;