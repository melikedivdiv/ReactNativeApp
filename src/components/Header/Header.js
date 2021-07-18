import *as React from 'react';
import {Text,View} from 'react-native';
import {headerStyles as styles} from './styles';

class Header extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <View style = {styles.line}/>
        <Text style = {styles.title}>Categories</Text>
      </View>
    );
  }
}

export default Header;