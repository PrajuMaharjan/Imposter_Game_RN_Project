import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

/* Import each screen*/
import HomeScreen from './HomeScreen';
import Settings from './SettingsScreen';
import GameSettings from './GameSettingsScreen';

/* Word Game Screens*/
import Discussion_1 from './WordGame/DiscussionScreen';
import GenreSelect_1 from './WordGame/GenreSelectScreen';
import PlayerEntry_1 from './WordGame/PlayerNamesScreen';
import RoleReveal_1 from './WordGame/RoleRevealScreen';
import Voting_1 from './WordGame/VotingScreen';
import Results_1 from './WordGame/ResultsScreen';

/* Question Game Screens*/
import Discussion_2 from './QuestionGame/DiscussionScreen';
import GenreSelect_2 from './QuestionGame/GenreSelectScreen';
import PlayerEntry_2 from './QuestionGame/PlayerNamesScreen';
import RoleReveal_2 from './QuestionGame/RoleRevealScreen';
import Voting_2 from './QuestionGame/VotingScreen';
import Results_2 from './QuestionGame/ResultsScreen';

const Stack=createNativeStackNavigator();

export default function App() {
return(
  <NavigationContainer>
  <Stack.Navigator initialRouteName="Home"> 
  <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
  <Stack.Screen name='GameSettings' component={GameSettings}/>
  <Stack.Screen name='Settings' component={Settings} />

  <Stack.Screen name='Discussion' component={Discussion_1} />
  <Stack.Screen name='Select Genre' component={GenreSelect_1} />
  <Stack.Screen name='Names' component={PlayerEntry_1} />
  <Stack.Screen name='Roles' component={RoleReveal_1} />
  <Stack.Screen name='Vote' component={Voting_1} />
  <Stack.Screen name='Results' component={Results_1} />

  <Stack.Screen name='Discussion' component={Discussion_2} />
  <Stack.Screen name='Select Genre' component={GenreSelect_2} />
  <Stack.Screen name='Names' component={PlayerEntry_2} />
  <Stack.Screen name='Roles' component={RoleReveal_2} />
  <Stack.Screen name='Vote' component={Voting_2} />
  <Stack.Screen name='Results' component={Results_2} />

  </Stack.Navigator>
  </NavigationContainer>
);
}
