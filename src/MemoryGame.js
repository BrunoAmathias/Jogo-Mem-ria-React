import React, { useEffect} from "react";
import GameBoard from "./Components/GameBoard";
import GameOver from "./Components/GameOver";
import game from "./game/game"
import InitGame from "./Components/InitGame";
import Audio from "./Components/Audio";
import { useContext } from "react";
import { FlipContext } from "./contexto/FlipContext";
const ObjRank = 'ObjRank'

function MemoryGame(){

const {cards, setCards} = useContext(FlipContext)
const {gameOver, SetGameOver} = useContext(FlipContext)
const {Setstart} = useContext(FlipContext)  
const {setRank} = useContext(FlipContext)
const {setStorage} = useContext(FlipContext)



useEffect(()=>{
   const arraysStorage = JSON.parse(localStorage.getItem(ObjRank)) 
   if(arraysStorage){
       setStorage(arraysStorage)
   }
   // eslint-disable-next-line
   },[])





   
  
   


useEffect(()=>{

   setCards(game.createCardsFromTechs())
   // eslint-disable-next-line
},[])

function restart(){
   game.clearCards()
   setCards(game.createCardsFromTechs())
   SetGameOver(false)
   Setstart(true)
   setRank(false)
}





return(

<div>
   <GameBoard cards={cards}/>
   <Audio/>
   <GameOver gameOver={gameOver} handleRestart={restart}/>
   <InitGame/>
</div>

)



}

export default MemoryGame