import {View,Text,StyleSheet,ImageBackground,TouchableOpacity,Animated,Image,ActivityIndicator} from 'react-native';
import {useState,useEffect,useRef} from 'react';
import { useGame } from '../GameContext';
import {getRandomWord,getRandomHint,getCategoryLabel} from './GamePlayFunctions';
import {Accelerometer} from 'expo-haptics';

export default function RoleRevealScreen({navigation}){
    
    return(
        <ImageBackground source={require('../../assets/Images/HomeImage.png')} style={styles.background} resizeMode="cover">

        </ImageBackground>
    );
}

const styles=StyleSheet.create({
    background:{
        flex:1,
    },
});