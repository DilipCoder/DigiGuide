import React, { Component } from 'react';
import { Image,FlatList, ActivityIndicator, StyleSheet, Linking, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';


class Guide extends Component {
    constructor(props){
        super(props);

        this.state = {

        };
        this.renderItem = this.renderItem.bind(this);
    }

    componentDidMount(){
        this.props.getData();
    }

  render() {
    if (this.props.loading) {
        return (
            <View style={styles.activityIndicatorContainer}>
                <ActivityIndicator animating={true}/>
            </View>
        );
    } else {
    return (
      <Container>
        <Content>
            <FlatList
                ref='listRef'
                data={this.props.data}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index}
             />
        </Content>
     </Container>
        );
    }
}

callNumber = (url) =>{
    Linking.canOpenURL(url).then(supported => {
    if (!supported) {
     console.log('Can\'t handle url: ' + url);
    } else {
     return Linking.openURL(url);
    }
  }).catch(err => console.error('An error occurred', err));
 }

        renderItem({item, index}){
            return (
            <Card>
                <CardItem>
                <Left>
                    <Thumbnail source={require('./img/team01.jpg')} />
                    <Body>
                    <Text>{item.guide_name}</Text>
                    <Text note>{item.address}</Text>
                    </Body>
                </Left>
                </CardItem>
                <CardItem>
                <Left>
                    <Button transparent textStyle={{color: '#87838B'}}>
                    <Icon name="star" />
                    <Text>{item.rating}/5</Text>
                    </Button>
                </Left>
                <Right>
                <Button transparent textStyle={{color: '#87838B'}} onPress={()=> this.callNumber(`tel:+91${item.mob_no}`)}>
                    <Icon name="call" />
                    <Text>{item.mob_no}</Text>
                    </Button>
                </Right>
                </CardItem>
            </Card>
            );
        }
    }

    function mapStateToProps(state, props) {
        return {
            loading: state.dataReducer.loading,
            data: state.dataReducer.data
        }
    }
    function mapDispatchToProps(dispatch) {
        return bindActionCreators(Actions, dispatch);
    }

    export default connect(mapStateToProps, mapDispatchToProps)(Guide);

    const styles = StyleSheet.create({
        activityIndicatorContainer:{
            backgroundColor: "#fff",
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
        },
    });