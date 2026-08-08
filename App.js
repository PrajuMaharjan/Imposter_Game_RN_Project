import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {ImageBackground,View} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useEffect,useCallback,useState } from 'react';
import { Asset } from 'expo-asset';

/* Import Game Context */
import { GameProvider } from './store/GameContext';

/* Import the screens that come before division into two seperate gamemodes*/
import HomeScreen from './src/screens/general/HomeScreen';
import Settings from './src/screens/general/SettingsScreen';
import GameSettings from './src/screens/general/GameSettingsScreen';
import ComingSoonScreen from './src/screens/general/ComingSoonScreen';

// Import the common screens used by both gamemodes
import Advanced_Settings from './src/screens/common/AdvancedSettingsScreen';
import GenreSelectScreen from './src/screens/common/GenreSelectScreen';
import PlayerNamesScreen from './src/screens/common/PlayerNamesScreen';
import DiscussionScreen from './src/screens/common/DiscussionScreen';
import VotingScreen from './src/screens/common/VotingScreen';
import ResultsScreen from './src/screens/common/ResultsScreen';
import ImposterRevealScreen from './src/screens/common/ImposterRevealScreen';

/* Import the screen unique to Word Game gamemode*/
import RoleRevealScreen from './src/screens/WordGame/RoleRevealScreen';


/* Import the screen unique to Question Game gamemode*/
import AllPlayersScreen from './src/screens/QuestionGame/AllPlayersScreen';
import QuestionScreen from './src/screens/QuestionGame/QuestionScreen';
import QuestionRevealScreen from './src/screens/QuestionGame/QuestionRevealScreen';

SplashScreen.preventAutoHideAsync();

const Stack=createNativeStackNavigator();

export default function App() {
  const [appReady,setAppReady]=useState(false);

  useEffect(()=>{
    async function prepare(){
      try{
        //Loading background image
        await Asset.loadAsync(require('./assets/Images/HomeImage.png'));
      }catch(e){
        console.warn(e);
      }finally{
        setAppReady(true);
      }
    }
    prepare();
  },[]);

  const onLayoutRootView=useCallback(async()=>{
    if(appReady){
      await SplashScreen.hideAsync();
    }
  },[appReady]);

  if(!appReady) return null;

  return(
    <View style={{flex:1}} onLayout={onLayoutRootView}>
      <ImageBackground source={require('./assets/Images/HomeImage.png')} style={{flex:1}} resizeMode='cover'>
        <GameProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{contentStyle:{backgroundColor:'black'},}}>

            {/* General Screens */}
            <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name='GameSettings' component={GameSettings} options={{headerShown:false}}/>
            <Stack.Screen name='Settings' component={Settings} options={{headerShown:false}}/>
            <Stack.Screen name='ComingSoon' component={ComingSoonScreen} options={{headerShown:false}}/>

            {/* Common Screens */}
            <Stack.Screen name='Advanced Settings' component={Advanced_Settings} options={{headerShown:false}} />
            <Stack.Screen name='Select Genre' component={GenreSelectScreen} options={{headerShown:false}} />
            <Stack.Screen name='Names' component={PlayerNamesScreen} options={{headerShown:false}}/>  
            <Stack.Screen name='Discussion' component={DiscussionScreen} options={{headerShown:false}}/>
            <Stack.Screen name='Vote' component={VotingScreen} options={{headerShown:false}}/>
            <Stack.Screen name='Results' component={ResultsScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Imposter" component={ImposterRevealScreen} options={{headerShown:false}}/>
            
            {/* Screens unique to Word Game */}
            <Stack.Screen name='Roles' component={RoleRevealScreen} options={{headerShown:false}}/>

            {/* Screens unique to Question Game */}
            <Stack.Screen name='All Players' component={AllPlayersScreen} options={{headerShown:false}}/>
            <Stack.Screen name='Question' component={QuestionScreen} options={{headerShown:false}}/>
            <Stack.Screen name='Question Reveal' component={QuestionRevealScreen} options={{headerShown:false}}/>

            </Stack.Navigator>
          </NavigationContainer>
        </GameProvider>
      </ImageBackground>
    </View>
  );
}
