import React, { Fragment, useState } from "react";
import { useContext } from "react";
import { FlipContext } from "../contexto/FlipContext";
import '../styles/gameOver.style.css'
import Rank from "./Rank";

function GameOver({show, handleRestart}){

const {jsonlocal, setJsonLocal} = useContext(FlipContext)

let nomesLocal = localStorage.nomes
let movesLocal = localStorage.moves

if(jsonlocal=== true){
    var nomes = JSON.parse(nomesLocal)
    var moves = JSON.parse(movesLocal)
}




return(
    (show ?
    <div>

    <div id="gameOver">
   
        <Rank nomes={nomes} moves={moves} />

        <div className="gameComplete">
            Parabéns, você completou o jogo!
        </div>
        <button id="btn" onClick={handleRestart} >Jogue novamente</button>
    </div>


    </div>: <Fragment/>)
)

}
export default GameOver