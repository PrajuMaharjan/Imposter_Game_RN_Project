import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View,Text,Button,StyleSheet} from 'react-native';

import Settings from './Settings';
import GameSettings from './GameSettings';

const Stack=createNativeStackNavigator();


export default function App() {

  return (
    <View style={styles.container}>
      /* Label  */
      <Text style={styles.label}>Imposter Game</Text>

      /* Buttons */

      <View style={styles.button}>
      <Button title="Play Game" onPress={()=>}/>

      <Button title="Settings" onPress={()=>}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent:'center',
    padding:20,
  },
  button:{
    gap:10,
  }
});
