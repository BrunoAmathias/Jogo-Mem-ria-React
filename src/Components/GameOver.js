import React, { Fragment } from "react";
import Rank from "./Rank";
import {ContainerGameOver} from '../styles/gameOver.styled'


function GameOver({gameOver, handleRestart}){








return(
    (gameOver ?
    <div>

    <ContainerGameOver>
   
        <Rank gameOver={gameOver}/>

        <div className="gameComplete">
            Parabéns, você completou o jogo!
        </div>
        <button id="btn" onClick={handleRestart} >Jogue novamente</button>
    </ContainerGameOver>


    </div>: <Fragment/>)
)

}
export default GameOver