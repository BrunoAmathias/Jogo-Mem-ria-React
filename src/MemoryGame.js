import React, { useEffect} from "react";
import GameBoard from "./Components/GameBoard";
import GameOver from "./Components/GameOver";
import game from "./game/game"
import InitGame from "./Components/InitGame";
import Audio from "./Components/Audio";
import { useContext } from "react";
import { FlipContext } from "./contexto/FlipContext";


function MemoryGame(){

const {cards, setCards} = useContext(FlipContext)
const {gameOver, SetGameOver} = useContext(FlipContext)
const {Setstart} = useContext(FlipContext)  
const {setRank} = useContext(FlipContext)




useEffect(()=>{

setCards(game.createCardsFromTechs())

},[setCards])

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
   <GameOver show={gameOver} handleRestart={restart}/>
   <InitGame/>
</div>

)


}

export default MemoryGame