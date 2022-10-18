import { useContext } from "react"
import { FlipContext } from "../contexto/FlipContext";
import { useState, Fragment } from "react"
import { useEffect } from "react";




function InitGame(){


const {musicGame} = useContext(FlipContext)
const [start, Setstart] = useState(true)    
const {music, setMusic} = useContext(FlipContext)
    

useEffect(()=>{
    if(music === true){
         musicGame.play() 
    }else{
        musicGame.pause() 
    }
    },[music])
  

function handleStart(){
    Setstart(false)
    musicGame.play()   

}

return(

    (start ?
        <div>
            
        <div id="gameInit">
            <div>
               Jogo da Memória 
            </div>
            <button id="btn" onClick={handleStart} >Começar o jogo !</button>
        </div>
    
    
        </div>: <Fragment/>)

)


}
export default InitGame