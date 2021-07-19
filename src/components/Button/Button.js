import * as React from 'react';
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import {Icon} from '../';
import {ButtonStyles as styles} from './styles';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const TouchableComponent =
       Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;
       
    const {icon, onPress,style} = this.props;

      return (
      <View style = {[styles.container, style]}> 
        <TouchableComponent onPress = {onPress} style = {styles.touchable}>
          <View style = {styles.touchableContent}>
            <Icon name = {icon} tintColor = 'white'/>
          </View>
        </TouchableComponent>
      </View>
    );
  }
}

Button.propTypes = {
    icon: PropTypes.string,
    onPress: PropTypes.func,
    style: PropTypes.any,
}
export default Button;
