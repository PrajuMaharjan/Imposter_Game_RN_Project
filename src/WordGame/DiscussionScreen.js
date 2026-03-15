import {View,Text,StyleSheet,TouchableOpacity,ImageBackground} from 'react-native';

export default function DiscussionScreen({navigation}){
    const handleAgain=()=>{
        navigation.navigate('Roles');
    };

    return(
        <ImageBackground source={require('../../assets/Images/HomeImage.png')} style={styles.background} resizeMode="cover">
        <View style={styles.container}>
            <Text style={styles.title}>Discuss and Vote.{"\n"} Then Reveal the Imposter</Text>
        <TouchableOpacity style={styles.againBtn} onPress={handleAgain}>
            <Text style={styles.againText}>Play Again</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quitBtn} onPress={()=>navigation.navigate("Home")}>
            <Text style={styles.quitText}>Return To Home</Text>
        </TouchableOpacity>
        </View>
        </ImageBackground>
    );
}

const styles=StyleSheet.create({
    background:{
        flex:1,
    },
    container:{
        flex: 1,
        paddingTop:40,
        padding:20,
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
        marginTop:80,
        marginBottom:50,
    },
    againBtn:{
        backgroundColor:'rgba(255,255,255,0.3)',
        paddingVertical:16,
        borderRadius:12,
        alignItems:'center',
        marginTop:10,
        marginBottom:180,
        borderWidth:2,
        borderColor:'white',
    },
    againText:{
        color:'white',
        fontSize:18,
        fontWeight:'bold',
        letterSpacing:1,
    },
    quitBtn:{
        backgroundColor:'rgba(255,255,255,0.3)',
        paddingVertical:16,
        borderRadius:12,
        alignItems:'center',
        marginTop:10,
        marginBottom:80,
        borderWidth:2,
        borderColor:'white',
    },
    quitText:{
        color:'white',
        fontSize:18,
        fontWeight:'bold',
        letterSpacing:1,
    },
});