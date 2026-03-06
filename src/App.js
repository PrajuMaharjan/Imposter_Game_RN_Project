import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

/* Import each screen*/
import HomeScreen from './HomeScreen';
import Settings from './SettingsScreen';
import GameSettings from './GameSettingsScreen';

/* Word Game Screens*/
import Discussion from './WordGame/DiscussionScreen';
import GenreSelect from './WordGame/GenreSelectScreen';
import PlayerEntry from './WordGame/PlayerNamesScreen';
import RoleReveal from './WordGame/RoleRevealScreen';
import Voting from './WordGame/VotingScreen';
import Results from './WordGame/ResultsScreen';

const Stack=createNativeStackNavigator();

export default function App() {
return(
  <NavigationContainer>
  <Stack.Navigator initialRouteName="Home"> 
  <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
  <Stack.Screen name='GameSettings' component={GameSettings} options={{headerTitle:''}}/>
  <Stack.Screen name='Settings' component={Settings} />

  <Stack.Screen name='Discussion' component={Discussion} />
  <Stack.Screen name='Select Genre' component={GenreSelect} />
  <Stack.Screen name='Names' component={PlayerEntry} />
  <Stack.Screen name='Roles' component={RoleReveal} />
  <Stack.Screen name='Vote' component={Voting} />
  <Stack.Screen name='Results' component={Results} />

  </Stack.Navigator>
  </NavigationContainer>
);
}
