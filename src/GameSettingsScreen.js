import {View,Text,StyleSheet,ImageBackground,TouchableOpacity,Switch} from 'react-native';

export default function GameSettings({navigation}){
    const [players,setplayers]=useState(4);
    const [imposters,setImposters]=useState(4);
    const [timeLimitOn,setTimeLimitOn]=useState(false);
    const [timeLimit,setTimeLimit]=UseState(120);
    const [gameMode,setGameMode]=useState('Word');

    const handleStart=()=>{
        if(gameMode==='Word'){
        //     navigation.navigate(GenreSelect_1);
        // }else{
        //     navigation.navigate(GenreSelect_2);
        }
    }
    return(
<ImageBackground source={require('../assets/HomeImage.png')} style={styles.background} resideMode="cover">
    <View style={styles.container}>
      
    </View>
    </ImageBackground>
    );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    backgroundColor:'red',
  },
  container: {
    flex: 1,
    alignItems:'center',
    padding:20,
  },
  title:{
    fontSize:32,
    fontWeight: 'bold',
    color: 'white',
    marginTop:200,
    letterSpacing: 1,
},
  buttonContainer:{
    gap:12,
    width:'100%',
    alignItems:'center',
    position:'absolute',
    bottom:180,
  },
  button:{
    backgroundColor:'blue',
    paddingVertical:14,
    paddingHorizontal:20,
    width:'80%',
    borderRadius:20,
    alignItems:'center',
  },
  buttonText:{
  color:'white',
  fontSize:20,
  fontWeight:'bold',
  },

});