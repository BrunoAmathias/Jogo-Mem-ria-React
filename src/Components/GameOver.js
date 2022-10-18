import React, { Fragment } from "react";

function GameOver({show, handleRestart}){

return(
    (show ?
    <div>
        
    <div id="gameOver">
        <div>
            Parabéns, você completou o jogo!
        </div>
        <button id="btn" onClick={handleRestart} >Jogue novamente</button>
    </div>


    </div>: <Fragment/>)
)

}
export default GameOver