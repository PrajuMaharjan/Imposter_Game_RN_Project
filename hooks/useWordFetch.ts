import {useState} from "react";
import {useGame} from "@store/GameContext";
import {fetchWordBatch} from "@constants/GamePlayFunctions_WordGame";

type UseWordFetchResult={
    loading:boolean;
    connectionModalVisible:boolean;
    setConnectionModalVisible:(value:boolean)=>void;
    attemptFetch:()=>Promise<boolean>;
    handleRetry:(onSuccess:()=>void)=>Promise<void>;
    handleUseOffline:(onContinue:()=>void)=>void;
};

export function useWordFetch():UseWordFetchResult{
    const {gameState,setGameState,setWordQueue,setIsOffline}=useGame();
    const [loading,setLoading]=useState<boolean>(false);
    const [connectionModalVisible,setConnectionModalVisible]=useState<boolean>(false);

    // Fetch wordBatch or show modal if failed
    const attemptFetch=async():Promise<boolean>=>{
        setLoading(true);
        
        const {words,source}=await fetchWordBatch(gameState.genre,5);
        setWordQueue(words);
        setLoading(false);
        
        if(source==="local"){
            setIsOffline(true);
            return true;
        }
        setIsOffline(false);
        return true;
    };

    const checkQueueOrFetch=async():Promise<boolean>=>{
        if(setWordQueue.length>0) return true;
        return await attemptFetch();
    };
    
    // Checks the connection again(Runs when the Retry button is pressed in the modal)
    const handleRetry = async(onSuccess:()=>void) : Promise<void> => {
        const succeded=await attemptFetch();
        if(succeded){
            setConnectionModalVisible(false);
            onSuccess();
        }
    };

    // Runs the rest of the app in offline mode (Runs when the Continue offline button is pressed)
    const handleUseOffline=(onContinue:()=>void) : void => {
        setConnectionModalVisible(false);
        onContinue();
    };

    return{
        loading,
        connectionModalVisible,
        setConnectionModalVisible,
        attemptFetch:checkQueueOrFetch,
        handleRetry,
        handleUseOffline,
    }
}