import *as React from 'react';
import {View} from 'react-native';
import Header from '../components/Header/Header';
import Icon from '../components/Icon/Icon';

class Home extends React.Component{
    render(){

        return (
            <View>
                <Header/> 
                <Icon name = 'search'/>
            </View>
        );
    }
}



export default Home;