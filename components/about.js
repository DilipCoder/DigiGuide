import React, {Component, } from 'react';
import {StyleSheet,Text} from 'react-native';
import {Container,Content, Header, Left, Right, Button, Icon, Title, Body} from 'native-base';

export default class About extends Component {
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
                <Title>About</Title>
                </Body>
                <Right />
                </Header>
                <Content>
                    <Title style = {aboutStyle.title}>AIM:</Title>
                    <Text style = {aboutStyle.text}>DigiGuides brings all those local guides together on an online platform, to address the factor named visibility, the benefit of which is currently taken by privated guides hired by private firms.</Text>
                    <Title style = {aboutStyle.title}>MISSION:</Title>
                    <Text style = {aboutStyle.text}>1. Increasing Income of local guide an Exprience of tourist by location based instant guide.</Text>
                    <Text style = {aboutStyle.text}>2. Decreasing marginal loss  in income of local guide by implementing automated payment portal.</Text>
                    <Text style = {aboutStyle.text}>3. Increasing Quality of service given by guides with the help of digital translator, route planner etc.</Text>
                    <Text style = {aboutStyle.text}>4. Increasing competition by rating methodology aand maintaing delivery of services.</Text>
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
    },
    title: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        fontWeight: '600'
    }
});