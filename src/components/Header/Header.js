import *as React from 'react';
import {Text,View} from 'react-native';
import {headerStyles as styles} from './styles';

class Header extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <Text style = {styles.subtitle}>Which one of Categories</Text>
        <View style = {styles.line}/>
        <Text style = {styles.title}>Categories</Text>
      </View>
    );
  }
}

export default Header;