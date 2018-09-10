import React, { Component } from 'react'
import { Item, Input,Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet, ImageBackground, View, Text, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class componentName extends Component {
    constructor(props){
        super(props)
        this.state = {
            shakeState:'',
            email:'',
            pass:''
        }
    }


    render() {
        return (
            <ImageBackground resizeMode="cover" source={require('../../assets/bg/bgmain.png')} style={styles.imgBackground}>

                <View style={styles.wrapView}>
                    <Image resizeMode="cover" style={styles.imageLogo} source={require('../../assets/bg/logo1.png')} />
                    <Item rounded style={formStyles.itemStyles}>
                        <Icon  style={formStyles.iconStyles} name='email' />
                        <Input onChangeText={(email) => this.setState({email})} autoCapitalize="none" style={formStyles.inputStyles} />
                    </Item>
                    <Item rounded style={formStyles.itemStyles}>
                        <Icon style={formStyles.iconStyles} name='key-variant' />
                        <Input autoCapitalize="none" style={formStyles.inputStyles} />
                    </Item>

                    <Animatable.View  style={{ width: '100%' }} animation={this.state.shakeState} iterationCount={1} direction="alternate-reverse">

                        <Button  onPress={()=>console.log(this.state)} block warning style={formStyles.buttonStyles}>
                            <Text>LOGINTEST</Text>
                        </Button>
                    </Animatable.View>

                </View>

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    imgBackground:
    {
        width: '100%', height: '100%',
    },
    imageLogo:
    {
        width: '80%',
        height: 100
    },
    wrapView:
    {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
const formStyles = StyleSheet.create({
    itemStyles: {
        borderBottomWidth: 0,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        backgroundColor: 'rgba(17, 17, 17,0.8)',
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 20,
    },
    iconStyles: {
        color: '#FFF',
        fontSize: 25, marginLeft: 20,
    },
    inputStyles: {
        marginLeft: 10,
        color: '#FFF',
        fontSize: 25,
    },
    buttonStyles: {
        marginLeft: 40,
        marginRight: 40,
    }
})