import React, { Fragment } from "react";
import '../styles/gameOver.style.css'
import Rank from "./Rank";


function GameOver({gameOver, handleRestart}){








return(
    (gameOver ?
    <div>

    <div id="gameOver">
   
        <Rank gameOver={gameOver}/>

        <div className="gameComplete">
            Parabéns, você completou o jogo!
        </div>
        <button id="btn" onClick={handleRestart} >Jogue novamente</button>
    </div>


    </div>: <Fragment/>)
)

}
export default GameOver