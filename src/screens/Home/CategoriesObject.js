import * as React from 'react';
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import {colors} from '../../config/colors'
import {Icon} from '../../components';
import {CategoryObjectStyles as styles } from './styles';

class CategoryObject extends React.Component {
  render() {
    const TouchableComponent =
      Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;
    const categoryName = 'Some category';

      return (
      <TouchableComponent style = {styles.container}>
        <View style = {styles.contentContainer}>
            <View style = {styles.categorySembol}/>
          <Text style = {styles.categoryName}>{categoryName}</Text>

            <Icon name = 'arrow' tintColor = {colors.text_color}/>
        </View>
      </TouchableComponent>
    );
  }
}

export default CategoryObject;
