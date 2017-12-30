import React, { Component } from "react";
import { connect } from "react-redux";
import { Alert } from "react-native";
import {
  Container,
  Text,
  H2,
  Content,
  List,
  ListItem,
  Separator,
  View,
  Right,
  Body
} from "native-base";

import styles from "./styles";

class Menu extends Component {
  handleOpen = ({ name, price = 0, prices = [], definition = '' }) => {
    price = price.toFixed(2);
    const content = `Php ${price}\n${definition && definition + '\n'}\n`;
    const variants = 'Variants:\n' + prices.length ? prices.map(({ name, price = 0 }) => `${name} (Php ${price.toFixed(2)})`).join('\n') : 'None';

    Alert.alert(name, content + variants, [{ text: "Close", onPress: () => {} }]);
  };

  render() {
    const { restaurant, menu } = this.props;

    return (
      <Container>
        <Content>
          <H2 style={styles.header}>{restaurant} Menu</H2>
          <List>
            {
              menu.map((type, i) => (
                <View key={i}>
                  <Separator bordered><Text>{ type.name }</Text></Separator>

                  {
                    type.dish.map((dish, i) => (
                      <ListItem
                        button
                        style={styles.list}
                        key={dish.id}
                        last={dish.length - 1 === i && i !== 0}
                        first={i === 0}
                        onPress={() => { this.handleOpen(dish) }}
                      >
                        <Body>
                          <Text>{dish.name}</Text>
                          {dish.definition && <Text note>{dish.definition}</Text>}
                        </Body>
                        <Right>
                          <Text note>{dish.price && 'Php ' + dish.price.toFixed(2)}</Text>
                        </Right>
                      </ListItem>
                    ))
                  }
                </View>
              ))
            }
          </List>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return ({ menu, restaurant } = state.global);
};

export default connect(mapStateToProps)(Menu);
