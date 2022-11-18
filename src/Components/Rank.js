import { useContext } from "react"
import { FlipContext } from "../contexto/FlipContext"
import {ImStatsBars2} from "react-icons/im";
import {AiOutlineClose} from "react-icons/ai"
import React, { Fragment } from "react";
import '../styles/gameOver.style.css'
import { useEffect } from "react";
const ObjRank ='ObjRank'


function Rank(){

    const {rank, setRank} = useContext(FlipContext)
    const {storage} = useContext(FlipContext)
    
    function closeRank(){
        setRank(false)
    }
    
    function ChangeRank(){
        setRank(!rank)
        console.log(rank);
        }

        

    return( <>
        <div onClick={ChangeRank} className="icon-ranking">
        <ImStatsBars2/>
        </div>
       { rank ? <div className="rank"> 

        <div onClick={closeRank} className="icon-close">
        <AiOutlineClose/>
        </div>
        <ul>
            <li>Nome</li>
            {
     nomes.map((nome)=>{
            return(<li>{nome}</li>)
        })
        }
        </ul>
        <ul>
            <li>Movimentos</li>
            {
          moves.map((moves)=>{
            return(<li>{moves}</li> )
        })
        }
        </ul>
        </div> : <Fragment/>}
        </>
    )
}
export default Rank