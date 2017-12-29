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
  handleOpen = (title, content) => {
    Alert.alert(title, content, [{ text: "OK", onPress: () => {} }]);
  };

  render() {
    const { restaurant, menu } = this.props;

    return (
      <Container>
        <Content>
          <H2 style={styles.header}>{restaurant} Menu</H2>
          <List
            dataArray={menu}
            renderRow={type => (
              <View>
                <Separator bordered>
                  <Text>{type.name}</Text>
                </Separator>
                {type.dish.map(dish => (
                  <ListItem
                    style={styles.list}
                    key={dish.id}
                    onPress={() =>
                      this.handleOpen(
                        dish.name,
                        `Php ${dish.price && dish.price.toFixed(2)}\n\nVariants:\n${!dish.prices
                          ? "None"
                          : dish.prices.map(
                              addon =>
                                `${addon.name} (Php ${addon.price && addon.price.toFixed(
                                  2
                                )})\n`
                            )}`
                      )}
                  >
                    <Body>
                      <Text>{dish.name}</Text>
                    </Body>
                    <Right>
                      <Text note>{dish.price && 'Php ' + dish.price.toFixed(2)}</Text>
                    </Right>
                  </ListItem>
                ))}
              </View>
            )}
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return ({ menu, restaurant } = state.global);
};

export default connect(mapStateToProps)(Menu);
