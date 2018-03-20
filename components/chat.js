import React, {Component, } from 'react';
import {StyleSheet,Text, Linking} from 'react-native';
import {Container,Content, Header, Left, Right, Button, Icon, Title, Body} from 'native-base';

export default class ChatApp extends Component {

    webUrl = (url) =>{
        Linking.canOpenURL(url).then(supported => {
        if (!supported) {
         console.log('Can\'t handle url: ' + url);
        } else {
         return Linking.openURL(url);
        }
      }).catch(err => console.error('An error occurred', err));
     }
    render(){
        return(
            <Container>
                <Header>
                <Left>
                <Button
                    transparent
                    onPress={() => this.props.navigation.goBack()}
                    >
                    <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                <Title>Connect</Title>
                </Body>
                <Right />
                </Header>
                <Content>
                <Text style= {aboutStyle.text}>Explore the way , you never did. be in touch with us.</Text>
                 <Text style = {aboutStyle.titles}>A location based connect community app to search travel - partner</Text>
                </Content>
            </Container>
        );
    }
}

const aboutStyle = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        padding: 5,
        paddingLeft: 20
    },
    titles: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
    }
});