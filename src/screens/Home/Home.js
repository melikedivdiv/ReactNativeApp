import * as React from 'react';
import {View, ScrollView} from 'react-native';
import Header from '../../components/Header/Header';
import SearchInput from '../../components/Input/SearchInput';
import CategoryObject from './CategoriesObject';
import Button from '../../components/Button/Button';
import PropTypes from 'prop-types';
import {homeStyles as styles } from './styles';
import {connect} from 'react-redux';
import {fetchCategories,changeSearchQuery} from '../../actions/categories';

class Home extends React.Component {
  onSearchButtonTouched = () => {
    console.warn('search button touched');
    this.props.dispatch(fetchCategories('some Query'));
  };
  OnChangeSearchQuery = text => {
    console.warn('new text = ' + text);
    this.props.dispatch(changeSearchQuery(text));
  };

  OnButtonTouched = () =>{
    console.warn("Button has been toched");
    this.props.dispatch(fetchCategories(''));
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
        <Button icon = 'arrow' onPress = {this.OnButtonTouched} style = {styles.Button}/>
      </View>
    );
  }
}

Home.propTypes ={
  dispatch: PropTypes.func,
};
const stateToProps = (state) =>{
  return{};
};
export default connect(stateToProps)(Home);
