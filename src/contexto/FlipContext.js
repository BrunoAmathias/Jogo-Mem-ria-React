import { createContext, useState } from "react";
import game from "../game/game";
import audio_match from '../audio/audio_matchcard.wav'
import win_game from '../audio/audio_wingame.wav'
import audio_music_game from '../audio/audio_musica-game.mp3'
import audio_card_flip from '../audio/audio_card-flip.mp3'



export const FlipContext = createContext()




export function FlipContextProvider ({children}){

    const [gameOver, SetGameOver] = useState(false)
    const [cards, setCards] = useState([])
    const [match, setMatch] = useState({audio_match})

    function Flip(card){
        if (game.setCard(card.id)) {
            
            if (game.secondCard) {
                if (game.checkMatch()) {
                    match.play()
                    game.clearCards();
                    if (game.checkGameOver()) {
                      // GameOver
                        setTimeout(()=>{
                        SetGameOver(true)
                      },1000) 
                    }
                } else {
                    setTimeout(() => {
                     // No match
                     setCards([...game.cards])
                        game.unflipCards();
                    }, 1000);
        
                };
            }
        }
        
        setCards([...game.cards])
        }


return(

<FlipContext.Provider value={{Flip , gameOver, SetGameOver, cards, setCards}} >
{children}
</FlipContext.Provider>


)

}