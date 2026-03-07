import {View,Text,StyleSheet,ImageBackground,TouchableOpacity,Switch} from 'react-native';
import {useState} from 'react';

export default function GameSettings({navigation}){
    const [players,setPlayers]=useState(4);
    const [imposters,setImposters]=useState(4);
    const [gameMode,setGameMode]=useState('Word');

    const handleStart=()=>{
        if(gameMode==='Word'){
            navigation.navigate('GenreSelect_1');
        }else{   
            navigation.navigate('GenreSelect_2');
        }
    }
    return(
<ImageBackground source={require('../assets/HomeImage.png')} style={styles.background} resizeMode="cover">
    <View style={styles.container}>
        <Text style={styles.heading}>Game Settings</Text>
      {/* Number of Players and Imposters Section*/}
      <View style={styles.row}>

        {/* Players box*/}
        <View style={styles.box}>
            <Text style={styles.emoji}>👥</Text>
            <Text style={styles.boxLabel}>How many players?</Text>
            <View style={styles.counter}>
                <TouchableOpacity style={styles.counterButton} onPress={()=>setPlayers(p=>Math.max(2,p-1))}>
                    <Text style={styles.counterButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.counterValue}>{players}</Text>
                <TouchableOpacity style={styles.counterButton} onPress={()=>setPlayers(p=>Math.min(20,p+1))}>
                    <Text style={styles.counterButtonText}>+</Text>        
                </TouchableOpacity>
            </View>
        </View>

        {/* Imposters box*/} 
        <View style={styles.box}>
            <Text style={styles.emoji}>🔪</Text>
            <Text style={styles.boxLabel}>How many imposters?</Text>
            <View style={styles.counter}>
                <TouchableOpacity style={styles.counterButton} onPress={()=>setImposters(i=>Math.max(1,i-1))}>
                    <Text style={styles.counterButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.counterValue}>{imposters}</Text>
                <TouchableOpacity style={styles.counterButton} onPress={()=>setImposters(i=>Math.min(players-1,i+1))}>
                    <Text style={styles.counterButtonText}>+</Text>        
                </TouchableOpacity>
            </View>
        </View>
        </View>

        {/* Game Mode */}
        <View style={styles.row}>
            <TouchableOpacity style={[styles.modeBox,gameMode==='Word' && styles.modeBoxActive]} onPress={()=>setGameMode('Word')}>
                <Text style={styles.emoji}>📝</Text>
                <Text style={[styles.modeText,gameMode==='Word' && styles.modeTextActive]}>Word Game</Text>
                <Text style={styles.modeDescription}>Find out who does not know the word.</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.modeBox,gameMode==='Question' && styles.modeBoxActive]} onPress={()=>setGameMode('Question')}>
                <Text style={styles.emoji}>❓</Text>
                <Text style={[styles.modeText,gameMode==='Question' && styles.modeTextActive]}>Question Game</Text>
                <Text style={styles.modeDescription}>Find out who got a different question.</Text>
            </TouchableOpacity>
        </View>

        {/* Start game button*/}
        <TouchableOpacity style={styles.startButton} onPress={handleStart}>
            <Text style={styles.startButtonText}>START GAME</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
    );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
  },
  container: {
    flex: 1,
    paddingTop:40,
    padding:20,
  },
  heading:{
    fontSize:28,
    fontWeight:'bold',
    color:'white',
    marginBottom:30,
    textAlign:'center',
  },

  row:{
    flexDirection:'row',
    gap:12,
    marginBottom:16,
  },

  box:{
    flex:1,
    backgroundColor:'rgba(255,255,255,0.2)',
    borderRadius:12,
    padding:16,
    alignItems:'center',
  },
  boxLabel:{
    fontSize:143,
    fontWeight:'bold',
    color:'white',
    marginBottom:12,
    textAlign:'center',
  },
  emoji:{
    fontSize:30,
    marginBottom:6,
  },
  counter:{
    flexDirection:'row',
    alignItems:'center',
    gap:16,
  },
  counterButton:{
    backgroundColor:'rgba(255,255,255,0.3)',
    width:32,
    height:32,
    borderRadius:8,
    alignItems:'center',
    justifyContent:'center',
  },
  counterButtonText:{
    color:'white',
    fontSize:
  }
});