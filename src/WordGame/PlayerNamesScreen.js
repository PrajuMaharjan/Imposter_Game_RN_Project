import {View,Text,Button,StyleSheet,ImageBackground,TouchableOpacity,ScrollView,TextInput,Alert} from 'react-native';
import {useState} from 'react';
import {useGame} from '../GameContext';

export default function EnterNames({navigation}){
    const {gameState,setGameState}=useGame();
    const initialPlayers=Array.from({length:gameState.players},(_,i)=>({
        id:i+1,
        name:`Player ${i+1}`,
    }));

    const [players,setPlayers]=useState(initialPlayers);
    const [imposters,setImposters](gameState.imposters);
    const [editingId,seteditingId]=useState(null);

    const addPlayer=()=>{
        const newId=players.length>0?Math.max(...players.map(p=>p.id))+1:1;
        setPlayers(prev=>[...prev,{id:newId,name:`Player ${newId}`}]);
    };

    const removePlayer=(id)=>{
        if(players.length<=3){
            Alert.alert('Minimum players reached.','You need atleast 2 players');
            return;
        }
        setPlayers(prev=>prev.filter(p=>p.id!==id));
    };

    const editName=(id,name)=>{
        setPlayers(prev=>prev.map(p=>p.id===id?{...p,name}:p));
    };

    const handlePlay=()=>{
        if(imposters>=players.length){
            Alert.alert('Too many imposters','Must be less than number of total players.')
            return;
        }
        setGameState(prev=>({
            ...prev,
            players:players.length,
            imposters:imposters,
            playerNames:players.map(p=>p.name),
        }));
        navigation.navigate('Roles');
    };

    return(
<ImageBackground source={require('../../assets/HomeImage.png')} style={styles.background} resizeMode="cover">
    
    {/* Back button*/}
    <TouchableOpacity style={styles.backButton} onPress={()=>navigation.goBack()}>
        <Text style={styles.backArrow}>←</Text>
    </TouchableOpacity>

    {/* <View style={styles.container}>
        <Text style={styles.heading}>Player List</Text>
        <View style={styles.countersRow}>
            <View style={styles.counterBox}></View>
        </View> */}
        




        

            {/* Start game button*/}
        <TouchableOpacity style={[styles.startButton,selected.length===0 && styles.startButtonDisabled]} onPress={handleNext}>
            <Text style={styles.startButtonText}>NEXT</Text>
        </TouchableOpacity>
    </View>
    </ImageBackground>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'black',
        justifyContent:'center',
        alignItems:'center',
    },
});