import React, { Component } from 'react';
import {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import params from './src/params' 
import Field from './src/components/Field';
import Flag from './src/components/Flag';
export default class App extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines!</Text>
        <Text style={styles.instructions}>Tamanho da Grade:
          {params.getRowsAmount()}x{params.getColumnsAmount()}
        </Text>
        <Field/>
        <Field opened/>
        <Field opened nearMines={10}/>
        <Field mined opened exploded/>
        <Field flagged/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
});
