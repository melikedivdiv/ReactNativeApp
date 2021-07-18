/**
 * @format
 */

import {Text, View} from 'react-native';
import React from 'react';
import Home from './screens/Home';

class App extends React.Component {
  render() {
    return (
      <View style = {{flex:1}}>
        <Home/>
      </View>
    );
  }
}

export default App;
