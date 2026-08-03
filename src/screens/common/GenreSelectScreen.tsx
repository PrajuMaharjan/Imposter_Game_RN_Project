import {View,StyleSheet,ImageBackground,Alert,ScrollView,ActivityIndicator} from 'react-native';
import {useState,useEffect,useRef,useCallback} from 'react';
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {useGame} from "@store/GameContext"
import { RouteProp, useFocusEffect } from '@react-navigation/native';
import GenreBox from '@components/GenreBox';
import BackButton from "@components/BackButton";
import ScreenTitle from "@components/ScreenTitle";
import NextButton from "@components/NextButton";
import ConfirmModal from "@components/ConfirmModal";
import RefreshButton from "@components/RefreshButton";
import {WORD_GENRES,QUESTION_GENRES,Genre} from "@constants/Genres"; 
import {getWordCountByGenre,fetchGenreCounts,GenreCounts} from "@constants/GamePlayFunctions_WordGame";

type RootStackParamList={
  'Select Genre' : {players:number;imposters:number};
  Names:{players:number;imposters:number};
};

type GenreSelectScreenProps={
  navigation:NativeStackNavigationProp<RootStackParamList,"Select Genre">;
  route:RouteProp<RootStackParamList,"Select Genre">;
};

export default function GenreSelect({navigation,route}:GenreSelectScreenProps){
    const {gameState,setGameState}=useGame();

    const genres:Genre[]=gameState.gameMode==="Word" ? WORD_GENRES : QUESTION_GENRES;

    const [selected,setSelected]=useState<string[]>(Array.isArray(gameState.genre) && gameState.genre.length>0 ? gameState.genre:genres.map(g=>g.id));

    const [genreCounts,setGenreCounts]=useState<GenreCounts>(
      Object.fromEntries(genres.map(g=>[g.id,getWordCountByGenre(g.id)]))
    );

    const [fetchingCounts,setFetchingCounts]=useState<boolean>(false);
    const [connectionModalVisible,setConnectionModalVisible]=useState<boolean>(false);

    const selectedRef=useRef(selected);
    useEffect(()=>{selectedRef.current=selected;},[selected]);

    useFocusEffect(
      useCallback(()=>{
        return ()=>{
          setGameState(prev=>({...prev,genre:selectedRef.current}));
        };
      },[])
    );

    const toggleGenre=(id:string):void=>{
        setSelected(prev=>prev.includes(id)?prev.filter(g=>g!==id):[...prev,id]);
    };

    const handleNext=():void=>{
        if(selected.length===0){
            Alert.alert('No genre selected.','Please select at least one genre to continue');
            return;
        }
    
        selectedRef.current=selected;
        setGameState(prev=>({...prev,genre:selected}));
        navigation.navigate('Names',{ players:route.params?.players,
                                      imposters:route.params?.imposters      
        });
    };

    const handleRefreshComplete=async():Promise<void>=>{
      setFetchingCounts(true);
      const {counts,source}=await fetchGenreCounts();
      setFetchingCounts(false);

      if(source === "local"){
        setConnectionModalVisible(true);
      }else{
        setGenreCounts(counts);
      }
    };

    const getCount=(genreId:string):number=>{
      return genreCounts[genreId] ?? 0;
    };

    const rows:Genre[][]=[];
    for (let i=0;i<genres.length;i+=2){
      rows.push(genres.slice(i,i+1));
    }

    return(
      <ImageBackground source={require('../../../assets/Images/HomeImage.png')} style={styles.background} resizeMode="cover">
    
        {/* Back button*/}
        <BackButton onPress={()=>navigation.goBack()} />

        <RefreshButton onSpinComplete={handleRefreshComplete} />

        {fetchingCounts && (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color="white" />
          </View>
        )}

        <View style={styles.container}>
            <ScreenTitle style={styles.heading} label="Select Genres" />

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {rows.map((row,rowIndex)=>(
                    <View key={rowIndex} style={styles.row}>
                        {row.map(genre=>(
                          <GenreBox key={genre.id}
                                    id={genre.id}
                                    label={genre.label}
                                    emoji={genre.emoji}
                                    isSelected={selected.includes(genre.id)}
                                    onPress={()=>toggleGenre(genre.id)}
                                    count={getCount(genre.id)}
                          />
                        ))}
                    </View>
                ))}
            </ScrollView>

            {/* Start game button*/}
            <NextButton style={styles.startButton}
                        label="NEXT"
                        onPress={handleNext}
                        disabled={selected.length===0}
            />

        </View>

        {/* Modal for connection failed scenario */}
        <ConfirmModal visible={connectionModalVisible}
                      title="Connection to server failed"
                      body="Could not fetch updated word count from the server. Please check your connection and try again"
                      onDismiss={()=>setConnectionModalVisible(false)}
                      buttons={[
                        {label:'Try Again',onPress:async()=>{setConnectionModalVisible(false); await handleRefreshComplete(); },style:"default"},
                        {label:"OK",onPress:()=>setConnectionModalVisible(false),style:"cancel"}
                      ]}
        />
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
  },
  container: {
    flex: 1,
    paddingTop:40,
    padding:20,
  },
  heading:{
    fontSize:28,
    marginBottom:30,
    marginTop:100,
  },

  row:{
    flexDirection:'row',
    gap:12,
    marginBottom:16,
  },
  scrollContent:{
    paddingBottom:20,
  },
  startButton:{
    borderRadius:8,
    marginBottom:50,
  },
  loadingOverlay:{
    ...StyleSheet.absoluteFillObject,
    backgroundColor:'rgba(0,0,0,0.5)',
    justifyContent:'center',
    alignItems:'center',
    zIndex:20,
  },
});