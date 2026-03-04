import {View,Text,Button,StyleSheet} from 'react-native';

export default function HomeScreen({navigation}){
return (
    <View style={styles.container}>
      <Text style={styles.label}>Imposter Game</Text>


      <View style={styles.button}>
      <Button title="Play Game" onPress={()=>navigation.navigate('GameSettings')}/>
      <Button title="Settings" onPress={()=>navigation.navigate('Settings')}/>
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
  },
label:{
    fontSize:24
},
});