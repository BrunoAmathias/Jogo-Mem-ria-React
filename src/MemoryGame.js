import React, { useEffect} from "react";
import GameBoard from "./Components/GameBoard";
import GameOver from "./Components/GameOver";
import game from "./game/game"
import InitGame from "./Components/InitGame";
// import audio_match from './audio/audio_matchcard.wav'
// import win_game from './audio/audio_wingame.wav'
// import audio_music_game from './audio/audio_musica-game.mp3'
// import audio_card_flip from './audio/audio_card-flip.mp3'
import { useContext } from "react";
import { FlipContext } from "./contexto/FlipContext";


function MemoryGame(){
const {cards, setCards} = useContext(FlipContext)
const {gameOver, SetGameOver} = useContext(FlipContext)

useEffect(()=>{

setCards(game.createCardsFromTechs())

},[])

function restart(){
game.clearCards()
setCards(game.createCardsFromTechs())
SetGameOver(false)
}

return(

<div>
    
    <GameBoard cards={cards}/>
   <GameOver show={gameOver} handleRestart={restart}/>
   <InitGame/>
</div>

)


}

export default MemoryGame