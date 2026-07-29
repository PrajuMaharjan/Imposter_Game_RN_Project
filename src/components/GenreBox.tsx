import {TouchableOpacity,Text,StyleSheet} from "react-native";

type GenreBoxProps={
    id:string;
    label:string;
    emoji:string;
    isSelected:boolean;
    onPress:()=>void;
    count?:number;
};

export default function GenreBox({label,emoji,isSelected,onPress,count}:GenreBoxProps){
    return(
        <TouchableOpacity style={[styles.box,isSelected && styles.boxSelected]} onPress={onPress}>
            <Text style={[styles.emoji]}>{emoji}</Text>
            <Text style={[styles.boxLabel,isSelected && styles.boxLabelSelected]}>{label}</Text>
            <Text style={styles.count}>
                {count !== undefined ? `${count} words` : `0 words`}
            </Text>
        </TouchableOpacity>
    );
}

const styles=StyleSheet.create({
    box:{
        flex:1,
        backgroundColor:'rgba(255,255,255,0.2)',
        borderRadius:12,
        padding:16,
        alignItems:'center',
        borderWidth:2,
        borderColor:'transparent',
    },
    boxSelected:{
        backgroundColor:'rgba(255,255,255,0.35)',
        borderColor:'green',
    },
    boxLabel:{
        fontSize:11,
        fontWeight:'bold',
        color:'white',
        marginBottom:4,
        textAlign:'center',
    },
    boxLabelSelected:{
        color:'white',
    },
    emoji:{
        fontSize:30,
        marginBottom:6,
    },
    count:{
        fontSize:10,
        color:"rgba(255,255,255,0.6)",
        textAlign:"center",
        marginBottom:8,
    },
});