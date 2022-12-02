import { useContext } from "react"
import { FlipContext } from "../contexto/FlipContext";
import { useState, Fragment } from "react"
import { useEffect } from "react";
import {ContainerInitGame,
        ContainerTitleGame,
        ContainerName,
        ContainerNameFalse} from '../styles/initgame.styled'

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
    },[music])


function handleStart(e){
    e.preventDefault()


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
    e.preventDefault()

setNomes(e.target.value)

}
return(

(start ?
    <div>
        <ContainerInitGame>
            <ContainerTitleGame>
                Jogo da Memória 
            </ContainerTitleGame>
            {input ? 
            <ContainerName>
                <p>Insira o seu nome</p>
                <form action="">
                    <input onInput={ChangeInput} type="text"/>
                    <button id="btn" onClick={handleStart} >Começar o jogo !</button>

                </form>
            </ContainerName> 
                : 
            <ContainerNameFalse>
                <p>Insira o seu nome</p>
                <form action="">
                    <input onInput={ChangeInput} type="text"/>
                    <p className="text-false">insira um valor maior</p>
                    <button id="btn" onClick={handleStart} >Começar o jogo !</button>
                </form>

            </ContainerNameFalse> 
            }   
           
        </ContainerInitGame>
    </div>: 
<Fragment/>)

)


}
export default InitGame
