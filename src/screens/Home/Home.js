import * as React from 'react';
import {View, ScrollView} from 'react-native';
import Header from '../../components/Header/Header';
import SearchInput from '../../components/Input/SearchInput';
import CategoryObject from './CategoriesObject';
import Button from '../../components/Button/Button';

class Home extends React.Component {
  onSearchButtonTouched = () => {
    console.warn('search button touched');
  };
  OnChangeSearchQuery = text => {
    console.warn('new text = ' + text);
  };

  OnButtonTouched = () =>{
    console.warn("Button has been toched");
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <Header />
          <SearchInput
            placeholer="Kategori adı giriniz"
            onPress={this.onSearchButtonTouched}
            onChangeText={this.OnChangeSearchQuery}
            style={{alignSelf: 'center'}}
          />
          {/* <View style = {styles.line}/> */}
          <CategoryObject />
        </ScrollView>
        <Button icon = 'arrow' onPress = {this.OnButtonTouched}/>
      </View>
    );
  }
}

export default Home;
