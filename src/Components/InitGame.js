import { useContext } from "react"
import { FlipContext } from "../contexto/FlipContext";
import { useState, Fragment } from "react"
import { useEffect } from "react";

import '../styles/initGame.style.css'




function InitGame(){


const {musicGame} = useContext(FlipContext)
const {music} = useContext(FlipContext)
const {start, Setstart} = useContext(FlipContext)  
const {nomes, setNomes} = useContext(FlipContext)
const [input, setInput]  = useState(true)
   

useEffect(()=>{
    if(music === true){
         musicGame.play() 
    }else{
        musicGame.pause() 
    }
    // eslint-disable-next-line
    },[music])


function handleStart(){

    if(nomes.length > 2){
    Setstart(false)

    if(music === true){
        musicGame.play()
    }

    if(input === false){
        setInput(true)
    }
    
   
    }else{
    setInput(false)
}
}



function ChangeInput(e){

setNomes(e.target.value)

}
return(

    (start ?
        <div>
        
       
            
        <div id="gameInit">
      
            <div>
               Jogo da Memória 
            </div>
            {input ? <div className="container-nome">
                <p>Insira o seu nome</p>
            <input onInput={ChangeInput} type="text"/>
            </div> : <div className="container-nome-false">
                <p>Insira o seu nome</p>
            <input onInput={ChangeInput} type="text"/>
                <p className="text-false">insira um valor maior</p>
            </div> }

            <button id="btn" onClick={handleStart} >Começar o jogo !</button>
        </div>
    
    
        </div>: <Fragment/>)

)


}
export default InitGame