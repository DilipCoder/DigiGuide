import React, {Component, } from 'react';
import {StyleSheet,Text, Linking} from 'react-native';
import {Container,Content, Header, Left, Right, Button, Icon, Title, Body} from 'native-base';

export default class Register extends Component {

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
                <Title>Register</Title>
                </Body>
                <Right />
                </Header>
                <Content>
                <Text style= {aboutStyle.text}>Explore the way , you never did. be in touch with us.</Text>
                    <Title style = {aboutStyle.title}>Go to our site</Title>
                    <Button
                    transparent
                    onPress={() => this.webUrl('http://synack.pythonanywhere.com/')}
                    ><Text style= {aboutStyle.text}>http://synack.pythonanywhere.com</Text>
                    </Button>
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
    title: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        fontWeight: '600'
    }
});