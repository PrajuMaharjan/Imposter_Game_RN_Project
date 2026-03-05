import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

/* Import each screen*/
import HomeScreen from './HomeScreen';
import Settings from './Settings';
import GameSettings from './GameSettings';

const Stack=createNativeStackNavigator();

export default function App() {
return(
  <NavigationContainer>
  <Stack.Navigator initialRouteName="Home">
  <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
  <Stack.Screen name='GameSettings' component={GameSettings} options={{headerTitle:''}}/>
  <Stack.Screen name='Settings' component={Settings} />
  </Stack.Navigator>
  </NavigationContainer>
);
}
