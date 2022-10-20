import { useContext } from "react"
import { FlipContext } from "../contexto/FlipContext";
import { useState, Fragment } from "react"
import { useEffect } from "react";




function InitGame(){


const {musicGame} = useContext(FlipContext)
const {music, setMusic} = useContext(FlipContext)
const {start, Setstart} = useContext(FlipContext)  
const [nomes, setNomes] = useState()  
   

useEffect(()=>{
    if(music === true){
         musicGame.play() 
    }else{
        musicGame.pause() 
    }
    },[music])
let arrayNomes = []  

function handleStart(){
    Setstart(false)
    if(music === true){
        musicGame.play()
    }
    

    if(localStorage.nomes){
        arrayNomes = JSON.parse(localStorage.getItem('nomes'))
    }

    arrayNomes.push(nomes)
    localStorage.nomes = JSON.stringify(arrayNomes)
}



function ChangeInput(e){

setNomes(e.target.value)

// console.log(e.target.value);
// array.push(e.target.value)
// localStorage.meuArr = JSON.stringify(array)



}
// let a = localStorage.getItem('nome')

return(

    (start ?
        <div>
        
       
            
        <div id="gameInit">
        <div>
            <input onInput={ChangeInput} type="text"/>
        </div>
            <div>
               Jogo da Memória 
            </div>
            <button id="btn" onClick={handleStart} >Começar o jogo !</button>
        </div>
    
    
        </div>: <Fragment/>)

)


}
export default InitGame