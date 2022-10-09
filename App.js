import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Alert } from 'react-native';

import AppHeader from './components/AppHeader';
import PrincipalField from './components/principalField';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.component}>
        <AppHeader />
        <PrincipalField />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  component: {
    flex: 1,
    backgroundColor: '#000030'
  }
})