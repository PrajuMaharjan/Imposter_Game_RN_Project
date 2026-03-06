import {View,Text,Button,StyleSheet} from 'react-native';

export default function GameSettings({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Game Settings</Text>

            {/* <Button title="Back to Home" onPress={()=>navigation.navigate('Home')}/> */}
        </View>
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