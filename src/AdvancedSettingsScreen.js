import {View,Text,StyleSheet,ImageBackground,TouchableOpacity,Switch,ScrollView} from 'react-native';
import {useState} from 'react';
import {useGame} from './GameContext';

export default function AdvancedSettingsScreen({navigation}){
    const [hintsForImposter,setHintsForImposter]=useState(false);
    const [noImposterMode,setnoImposterMode]=useState(false);
    const [showGenreToImposter,setshowGenreToImposter]=useState(false);
    const {setGameState}=useGame();

    const handleSettingsChange=()=>{
        setGameState(prev=>({
        ...prev,
        gameMode:gameMode,
        hintsForImposter:hintsForImposter,
        showGenreToImposter:showGenreToImposter,
        noImposterMode:noImposterMode,
        }));
        navigation.navigate("GameSettings");
    }
    return(
        <ImageBackground source={require("../assets/HomeImage.png")} style={StyleSheet.background} resizeMode="cover">
        
        {/*Back button*/}
        <TouchableOpacity style={styles.backButton} onPress={()=>navigation.goBack()}>
            <Text style={styles.backArrow}>←</Text> 
        </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.heading}>Advanced Game Settings</Text>
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
        
        </ScrollView>
        </ImageBackground>
    );

}

const styles=StyleSheet.create({
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
    container:{
        padding:20,
    },
    heading:{
        fontSize:25,
        fontWeight:'bold',
        color:'white',
        marginBottom:30,
        marginTop:70,
        textAlign:'center',
  },
});