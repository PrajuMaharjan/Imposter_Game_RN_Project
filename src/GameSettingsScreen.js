import {View,Text,StyleSheet,ImageBackground,TouchableOpacity,Switch,ScrollView} from 'react-native';
import {useState} from 'react';
import {useGame} from './GameContext';

export default function GameSettings({navigation}){
    const [players,setPlayers]=useState(4);
    const [imposters,setImposters]=useState(1);
    const [gameMode,setGameMode]=useState('Word');
    const [advancedOpen,setAdvancedOpen]=useState(false);
    const [hintsForImposter,setHintsForImposter]=useState(false);
    const [noImposterMode,setnoImposterMode]=useState(false);
    const [showGenreToImposter,setshowGenreToImposter]=useState(false);
    const {setGameState}=useGame();

    const handleStart=()=>{
      setGameState(prev=>({
        ...prev,
        players:players,
        imposters:imposters,
        gameMode:gameMode,
        hintsForImposter:hintsForImposter,
        showGenreToImposter:showGenreToImposter,
        noImposterMode:noImposterMode,
      }));
        if(gameMode==='Word'){
            navigation.navigate('Select Genre');
        }else{   
            navigation.navigate('Select Genre-2');
        }
    }
    return(
<ImageBackground source={require('../assets/HomeImage.png')} style={styles.background} resizeMode="cover">
    
    {/* Back button*/}
    <TouchableOpacity style={styles.backButton} onPress={()=>navigation.goBack()}>
        <Text style={styles.backArrow}>←</Text>
    </TouchableOpacity>

    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Game Settings</Text>
      {/* Number of Players and Imposters Section*/}
      <View style={styles.row}>

        {/* Players box*/}
        <View style={styles.box}>
            <Text style={styles.emoji}>👥</Text>
            <Text style={styles.boxLabel}>How many players?</Text>
            <View style={styles.counter}>
                <TouchableOpacity style={styles.counterButton} onPress={()=>setPlayers(p=>Math.max(3,p-1))}>
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
                <TouchableOpacity style={styles.counterButton} onPress={()=>setImposters(i=>Math.min(players-2,i+1))}>
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

        {/* Advanced Settings*/}
        <TouchableOpacity style={styles.advancedHeader} onPress={()=>setAdvancedOpen(prev=>!prev)}>
          <Text style={styles.advancedHeaderText}>⚙️ Advanced Settings</Text>
          <Text style={styles.advancedArrow}>{advancedOpen ? '▲' : '▼'}</Text>
        </TouchableOpacity>

        {advancedOpen && (
          <View style={styles.advancedBox}>
            {gameMode==='Word' ? (
              <>
              {/* Toggle hints for imposter*/}
              <View style={styles.toggleRow}>
                <View style={styles.toggleInfo}>
                  <Text style={styles.toggleLabel}>Show Hints For Imposter?</Text>
                </View>
                <Switch value={hintsForImposter} onValueChange={setHintsForImposter} trackColor={{false:'rgba(255,255,255,0.2)',true:'#2196F3'}} thumbColor={'white'}/>
                </View>
                <View style={styles.divider}/>

              {/*Toggle to show or hide genre from imposter*/}
              <View style={styles.toggleRow}>
                <View style={styles.toggleInfo}>
                  <Text style={styles.toggleLabel}>Show Genre To Imposter?</Text>
                </View>
                <Switch value={showGenreToImposter} onValueChange={setshowGenreToImposter} trackColor={{false:'rgba(255,255,255,0.2)',true:'#2196F3'}} thumbColor={'white'}/>
                </View>
                <View style={styles.divider}/>
                {/*Toggle for No Imposter Mode*/}
                <View style={styles.toggleRow}>
                <View style={styles.toggleInfo}>
                  <Text style={styles.toggleLabel}>No Imposter Mode</Text>
                </View>
                <Switch value={noImposterMode} onValueChange={setnoImposterMode} trackColor={{false:'rgba(255,255,255,0.2)',true:'#2196F3'}} thumbColor={'white'}/>
                </View>
                </>
            ):(
              <Text style={styles.emptyAdvanced}>No advanced Settings yet for Questions Game</Text>
            )}
            </View>
          )}

        {/* Start game button*/}
        <TouchableOpacity style={styles.startButton} onPress={handleStart}>
            <Text style={styles.startButtonText}>NEXT</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
    );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
  },
  backButton:{
    position:'absolute',
    top:20,
    left:20,
    zIndex:10,
    padding:8,
  },  
  backArrow:{
    fontSize:28,
    color:'white',
    fontWeight:'bold',
  },
  container: {
    padding:20,
  },
  heading:{
    fontSize:28,
    fontWeight:'bold',
    color:'white',
    marginBottom:30,
    marginTop:50,
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
    fontSize:11,
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
    fontSize:20,
    fontWeight:'bold',
  },
  counterValue:{
    fontSize:22,
    fontWeight:'bold',
    color:'white',
    minWidth:36,
    textAlign:'center',
  },
  modeBox:{
    flex:1,
    backgroundColor:'rgba(255,255,255,0.2)',
    borderRadius:12,
    padding:16,alignItems:'center',
    borderWidth:2,
    borderColor:'transparent',
  },
  modeBoxActive:{
    borderColor:'white',
    backgroundColor:'rgba(255,255,255,0.4)',
  },
  modeText:{
    fontSize:15,
    fontWeight:'bold',
    color:'rgba(255,255,255,0.7)',
    marginBottom:4,
  },
  modeTextActive:{
    color:'white',
  },
  modeDescription:{
    fontSize:11,
    color:'rgba(255,255,255,0.7)',
    textAlign:'center',
  },
  advancedHeader:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'rgba(255,255,255,0.2)',
    borderRadius:12,
    padding:14,
    marginBottom:8,    
  },
  advancedHeaderText:{
    color:'white',
    fontSize:15,
    fontWeight:'bold',
  },
  advancedArrow:{
    color:'white',
    fontSize:12,
  },
  advancedBox:{
    backgroundColor:'rgba(255,255,255,0.15)',
    borderRadius:12,
    padding:14,
    marginBottom:16,
  },
  toggleInfo:{
    flex:1,
    paddingRight:12,
  },
  toggleRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical:8,
  },
  toggleLabel:{
    color:'white',
    fontSize:13,
    fontWeight:'bold',
    marginBottom:2,
  },
  divider:{
    height:1,
    backgroundColor:'rgba(255,255,255,0.15)',
  },
  emptyAdvanced:{
    color:'rgba(255,255,255,0.5)',
    fontSize:13,
    textAlign:'center',
    paddingVertical:8,
    color:'white',
  },
  startButton:{
    backgroundColor:'rgba(255,255,255,0.3)',
    paddingVertical:16,
    borderRadius:12,
    alignItems:'center',
    marginTop:10,
    marginBottom:50,
    borderWidth:2,
    borderColor:'white',
  },
  startButtonText:{
    color:'white',
    fontSize:18,
    fontWeight:'bold',
    letterSpacing:1,
  },
});