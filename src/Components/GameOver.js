import React, { Fragment, useState } from "react";
import { useContext } from "react";
import { FlipContext } from "../contexto/FlipContext";
import '../styles/gameOver.style.css'
import Rank from "./Rank";

function GameOver({show, handleRestart}){

const {jsonlocal, setJsonLocal} = useContext(FlipContext)

let local = localStorage.nomes
let moves = localStorage.moves

if(jsonlocal=== true){
    var local2 = JSON.parse(local)
    var moves2 = JSON.parse(moves)
}




return(
    (show ?
    <div>

    <div id="gameOver">
   
        <Rank local2={local2} moves2={moves2} />

        <div className="gameComplete">
            Parabéns, você completou o jogo!
        </div>
        <button id="btn" onClick={handleRestart} >Jogue novamente</button>
    </div>


    </div>: <Fragment/>)
)

}
export default GameOver