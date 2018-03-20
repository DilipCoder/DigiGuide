import React, {Component,} from 'react';
import { StackNavigator, } from 'react-navigation';
import { 
    View, 
    StyleSheet,
    Image,
    TouchableHighlight,
    Text,
    Dimensions
  } from 'react-native';

export default class Splash extends Component {
  static navigationOptions = {
        headerStyle: {
          display:'none'
        },
      };
    render(){
        return(
            <View style = {{ flex: 1}}>
                <View style = {{ flex: 1}}>
                <Image source = {require('./img/splash1.jpg')} style = {splashStyle.Background}/>
                </View>
                <Text style = {splashStyle.Logo}>DiGi - Guide </Text>
                <Text style = {splashStyle.motto}>search the way you never did</Text>
                <TouchableHighlight
                style = {splashStyle.Button}
                onPress = {() => this.props.navigation.navigate('Home')}>
                <Text style = {splashStyle.ButtonText}>Explore >>></Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const splashStyle = StyleSheet.create({
    Background: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        resizeMode: 'cover'
    },
    Logo: {
        position: 'absolute',
        top: 239,
        left: 80,
        fontSize: 50,
        color: 'white'
    },
    motto: {
        position: 'absolute',
        top: 299,
        left: 10,
        fontSize: 50,
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
    },
    Button: {
        position: 'absolute',
        top: 530,
        left: 95,
        borderRadius: 50,
        backgroundColor: '#DE9260',
        opacity: 0.7
    },
    ButtonText: {
        color: 'white',
        fontSize: 30,
        padding: 20,
        marginLeft: 20,
        marginRight: 20,
        textAlign: 'center'
    }
});