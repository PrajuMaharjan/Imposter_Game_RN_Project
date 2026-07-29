import {TouchableOpacity,Animated,StyleSheet} from "react-native";
import {useRef} from "react";
import {Ionicons} from "@expo/vector-icons";

type RefreshButtonProps={
    onSpinComplete:()=>void;
};

export default function RefreshButton({onSpinComplete} : RefreshButtonProps){
    const spinValue=useRef(new Animated.Value(0)).current;

    const handlePress=():void=>{
        spinValue.setValue(0);
        Animated.timing(spinValue,{
            toValue:1,
            duration:1000,
            useNativeDriver:true,
        }).start(()=>onSpinComplete());
    };

    const spin=spinValue.interpolate({
        inputRange:[0,1],
        outputRange:['360deg','0deg'],
    });

    return(
        <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Animated.View style={{transform:[{rotate:spin}] }}>
                <Ionicons name="sync" size={26} color={"white"} />
            </Animated.View>
        </TouchableOpacity>
    );
}

const styles=StyleSheet.create({
    button:{
        position:"absolute",
        top:50,
        right:20,
        zIndex:10,
        padding:8,
    },
    icon:{
        fontSize:26,
        color:"white",
        fontWeight:"bold"
    },
});