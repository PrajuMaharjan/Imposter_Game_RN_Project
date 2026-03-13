import {View,Text,StyleSheet,ImageBackground,TouchableOpacity,Switch,ScrollView} from 'react-native';
import {useState} from 'react';
import {useGame} from './GameContext';

export default function Settings({navigation}){
    const {gameState,setGameState}=useGame();
    const [music,setMusic]=useState(gameState.music);
    const [sound,setSound]=useState(gameState.sound);
    const [haptics,setHaptics]=useState(gameState.haptics);
    const [shakeForNext,setShakeForNext]=useState(gameState.shakeForNext);


    const handleSettingsChange=()=>{
        setGameState(prev=>({
        ...prev,
        music:music,
        sound:sound,
        haptics:haptics,
        shakeForNext:shakeForNext,
        }));
        navigation.navigate("Home");
    }
    return(
        <ImageBackground source={require("../assets/HomeImage.png")} style={styles.background} resizeMode="cover">
            {/*Back button*/}
                <TouchableOpacity style={styles.backButton} onPress={()=>navigation.goBack()}>
                    <Text style={styles.backArrow}>←</Text>
                </TouchableOpacity>

        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}> Settings </Text>
            <View style={styles.box}>

                {/* Music toggle*/}
                <View style={styles.toggleRow}>
                    <View style={styles.toggleInfo}>
                        <Text style={styles.toggleLabel}>Music</Text>
                    </View>
                    <Switch value={music} onValueChange={setMusic} trackColor={{false:'rgba(255,255,255,0.2)',true:'#2196F3'}} thumbColor={'white'}/>
                     </View>
                    <View style={styles.divider}/>

                {/* Sound toggle*/}
                <View style={styles.toggleRow}>
                    <View style={styles.toggleInfo}>
                        <Text style={styles.toggleLabel}>Sound</Text>
                    </View>
                    <Switch value={sound} onValueChange={setSound} trackColor={{false:'rgba(255,255,255,0.2)',true:'#2196F3'}} thumbColor={'white'}/>
                     </View>
                    <View style={styles.divider}/>

                {/* Haptics toggle*/}
                <View style={styles.toggleRow}>
                    <View style={styles.toggleInfo}>
                        <Text style={styles.toggleLabel}>Haptics</Text>
                    </View>
                    <Switch value={haptics} onValueChange={setHaptics} trackColor={{false:'rgba(255,255,255,0.2)',true:'#2196F3'}} thumbColor={'white'}/>
                     </View>
                    <View style={styles.divider}/>

                {/* Shake toggle*/}
                <View style={styles.toggleRow}>
                    <View style={styles.toggleInfo}>
                        <Text style={styles.toggleLabel}>Shake to Move to Next Person</Text>
                    </View>
                    <Switch value={shakeForNext} onValueChange={setShakeForNext} trackColor={{false:'rgba(255,255,255,0.2)',true:'#2196F3'}} thumbColor={'white'}/>
                     </View>
                    <View style={styles.divider}/>

            </View>
            
            {/* Apply changes button*/}
                <TouchableOpacity style={styles.applyButton} onPress={handleSettingsChange}>
                    <Text style={styles.applyButtonText}>Apply Changes</Text>
                </TouchableOpacity>
        </ScrollView>
        </ImageBackground>
    );
}

const styles=StyleSheet.create({
    container:{
        padding:20,
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
    title:{
        fontSize:25,
        fontWeight:'bold',
        color:'white',
        marginBottom:30,
        marginTop:70,
        textAlign:'center',
    },
    background:{
        flex:1,
    },
    box:{
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
    applyButton:{
    backgroundColor:'rgba(255,255,255,0.3)',
    paddingVertical:16,
    borderRadius:12,
    alignItems:'center',
    marginTop:10,
    marginBottom:50,
    borderWidth:2,
    borderColor:'white',
  },
  applyButtonText:{
    color:'white',
    fontSize:18,
    fontWeight:'bold',
    letterSpacing:1,
  },
});