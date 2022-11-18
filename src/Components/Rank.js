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

        
    useEffect(()=>{
        localStorage.setItem(ObjRank, JSON.stringify(storage))
        },[storage])       
       

        
return( 
<>
    <div onClick={ChangeRank} className="icon-ranking">
    <ImStatsBars2/>
    </div>
    { rank ? <div className="rank"> 

    <div onClick={closeRank} className="icon-close">
    <AiOutlineClose/>
    </div>
    {/* ----//// */} 
<div className="rank-name-moves">
    <div className="titulo-rank">
        <h2>Nomes</h2>
    </div>
    <ul>
    {
    storage.map((storage, index ) =>{
        return(
        <li key={index}>{storage.nomes}</li>
        )
    })
    }
</ul>
</div>
<div className="rank-name-moves">
    <div className="titulo-rank">
        <h2>Moves</h2>
    </div>
    <ul>
    {
        storage.map((storage, index)=>{
            return(
            <li key={index}>{storage.moves}</li>
            )
    })
    }
    </ul>
</div>
    </div> : <Fragment/>}
    </>
)
}
export default Rank