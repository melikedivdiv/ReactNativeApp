/**
 * @format
 */

import {View} from 'react-native';
import React from 'react';
import Home from './screens/Home/Home';
import {Provider} from 'react-redux';
import {store} from './config/store';

class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
        <View style={{flex: 1}}>
          <Home />
        </View>
      </Provider>
    );
  }
}

export default App;
