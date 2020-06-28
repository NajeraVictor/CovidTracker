import React from 'react';
import MainView from './component/MainView'
import { StyleSheet, Text, View, TextInput, ActivityIndicator} from 'react-native';

import store from './redux/store'
import { Provider } from 'react-redux'

export default function App() {

  return (
    <Provider store={store}>
      <MainView />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#000',
  },
});
