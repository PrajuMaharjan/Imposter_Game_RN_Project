import {View,Text,StyleSheet,ImageBackground,TouchableOpacity,Animated,Image,ActivityIndicator} from 'react-native';
import {useState,useEffect,useRef} from 'react';
import { useGame } from '../GameContext';
import {getRandomWord,getRandomHint,getCategoryLabel} from './GamePlayFunctions';
import RNShake from 'react-native-shake';

export default function RoleRevealScreen({navigation}){
    
    return(
    );
}

const styles=StyleSheet.create({
    container:{
        // flex:1,
        // justifyContent:'center',
        // alignItems:'center',
        // backgroundColor:'white',
    },
    title:{
        // fontSize:24,
        // fontWeight:'bold',
        // color:'black',
        // justifyContent:'center',
        // alignItems:'center',
    },
});