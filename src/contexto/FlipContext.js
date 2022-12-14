import { createContext, useState } from "react";
import game from "../game/game";
import audio_match from '../audio/audio_matchcard.wav'
import win_game from '../audio/audio_wingame.wav'
import audio_card_flip from '../audio/audio_card-flip.mp3'
import audio_music_game from '../audio/audio_musica-game.mp3'




export const FlipContext = createContext()




export function FlipContextProvider ({children}){

  

    // musicas
    
    let match = new Audio(audio_match)
    let flip = new Audio(audio_card_flip)
    let win = new Audio(win_game)

    //---------


    // states

    const [moves, setMoves] = useState(0)
    const [nomes, setNomes] = useState('')
    const [gameOver, SetGameOver] = useState(false)
    const [cards, setCards] = useState([])
    const [musicGame] = useState(new Audio(audio_music_game))
    const [audio, setAudio] = useState(true)
    const [music, setMusic] = useState(true)
    const [start, Setstart] = useState(true)    
    const [rank, setRank] = useState(false)
    const [storage, setStorage] = useState([])

    // --------


   

    function Flip(card){
        if (game.setCard(card.id)) {
        
            if(audio === false){
                flip.muted = true
            }
                flip.play()
            if (game.secondCard) {
                setMoves(moves + 1)

            if (game.checkMatch()) {
                setTimeout(() => {
                if(audio === false){
                    match.muted = true
                }
                    match.play()
                    }, 500);
                    game.clearCards();

                    if (game.checkGameOver()) {
                        setTimeout(()=>{
                            addObjStorage()
                            resetAttributes()
                      },1000) 

                    }
                } else {
                    setTimeout(() => {
                     setCards([...game.cards])
                        game.unflipCards();
                    }, 1000);
                };
            }
        }
        setCards([...game.cards])
        }


function addObjStorage(){
    const rankObj = {nomes: nomes, moves: moves}
    if(rankObj){
        setStorage([...storage, rankObj])
    }
}

function resetAttributes(){
    if(audio === false){
        win.muted = true
}
    win.play()
    musicGame.pause()
    musicGame.currentTime = 0
    SetGameOver(true)
    setMoves(0)
}

storage.sort(sortTheStorage)

function sortTheStorage (a, b) {
    if(a.moves < b.moves){
        return -1
    }else{
        return true
    }
}

return(

<FlipContext.Provider value={{Flip, gameOver, SetGameOver, cards, setCards, musicGame, audio, setAudio, music, setMusic, start, Setstart, rank, setRank, storage, setStorage, nomes, setNomes}} >
{children}
</FlipContext.Provider>


)

}