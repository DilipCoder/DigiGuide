import React, { Component } from 'react';
import { View,Button, Container, Header, Tab, Tabs, TabHeading, Icon, Text, Left, Right, Body, Title } from 'native-base';
import { StatusBar } from "react-native";
import { StackNavigator,DrawerNavigator } from 'react-navigation';

import Guide from './guide';
import ChatApp from './chat';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            display: 'none'
          },
      };
  render() {
    return (
      <Container>
        <Header hasTabs>
        <Left>
        <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
        </Left>
        <Body>
        <Title>Home</Title>
        </Body>
        <Right>
            <Icon name="search" style = {{color:'white'}}/>
        </Right>
        </Header>
        <Tabs>
          <Tab heading={ <TabHeading><Text>Guide</Text></TabHeading>}>
            <Guide />
          </Tab>
          <Tab heading={ <TabHeading><Text>Connect</Text></TabHeading>}>
            <ChatApp />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}