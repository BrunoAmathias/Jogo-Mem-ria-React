import { useContext } from "react"
import { FlipContext } from "../contexto/FlipContext"
import {ImStatsBars2} from "react-icons/im";
import React, { Fragment } from "react";

import '../styles/gameOver.style.css'

function Rank({local2, moves2}){

    const {rank, setRank} = useContext(FlipContext)
    
    
    
    function ChangeRank(){
        setRank(!rank)
        console.log(rank);
        }
        

    return( <>
        <div className="icon-ranking">
        <ImStatsBars2 onClick={ChangeRank}/>
        </div>
       { rank ? <div className="rank"> 
        <ul>
            <li>Nome</li>
            {
     local2.map((nome)=>{
            return(<li>{nome}</li>)
        })
        }
        </ul>
        <ul>
            <li>Movimentos</li>
            {
          moves2.map((moves)=>{
            return(<li>{moves}</li> )
        })
        }
        </ul>
        </div> : <Fragment/>}
        </>
    )
}
export default Rank