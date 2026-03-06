import {View,Text,Button,StyleSheet} from 'react-native';

export default function Settings({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>

            <Button title="Back To Home" onPress={()=>navigation.navigate('Home')}/>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alighItems:'center',
        backgroundColor:'black',
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'white',
    },
});