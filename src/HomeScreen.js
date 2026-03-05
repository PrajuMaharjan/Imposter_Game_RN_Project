import {View,Text,Button,StyleSheet} from 'react-native';

export default function HomeScreen({navigation}){
return (
    <View style={styles.container}>
      <Text style={styles.title}>Imposter Game</Text>

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
    alignItems:'center',
    backgroundColor:'#fff',
    padding:20,
  },
  button:{
    gap:12,
    width:'100%',
  },
title:{
    fontSize:32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 40,
    letterSpacing: 1,
},
});