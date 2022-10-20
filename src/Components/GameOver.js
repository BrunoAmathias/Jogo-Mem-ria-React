import React, { Fragment } from "react";
import { useContext } from "react";
import { FlipContext } from "../contexto/FlipContext";

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
        <div>
        <div className="rank"> 
        <ul>
            <li>Nome</li>
            {
     local2.map((nome)=>{
            return(
                   <li>{nome}   </li> 
            )
        })
       }
        </ul>
        <ul>
            <li>Movimentos</li>
            {
          moves2.map((moves)=>{
            return(
                <ul>
                <li>{moves}</li> 
                 </ul>
            )
        })
        
        }
        </ul>
        </div>
      
      
     
       
      
       
    
        </div>

        <div>
            Parabéns, você completou o jogo!
        </div>
        <button id="btn" onClick={handleRestart} >Jogue novamente</button>
    </div>


    </div>: <Fragment/>)
)

}
export default GameOver