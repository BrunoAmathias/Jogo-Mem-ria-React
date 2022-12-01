import { useContext } from "react"
import { FlipContext } from "../contexto/FlipContext"
import {ImStatsBars2} from "react-icons/im";
import {AiOutlineClose} from "react-icons/ai"
import React, { Fragment } from "react";
import { useEffect } from "react";
import {ContainerIconRanking, 
        ContainerIconClose, 
        ContainerNameMoves,
        ContainerTitleRank,
        ContainerRanking} from '../styles/rank.styled'

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

        

    return( <>
        <ContainerIconRanking onClick={ChangeRank}>
        <ImStatsBars2/>
        </ContainerIconRanking>
       { rank ? 
        <ContainerRanking> 

            <ContainerIconClose onClick={closeRank}>
                <AiOutlineClose/>
            </ContainerIconClose>
            <ContainerNameMoves>
                <ContainerTitleRank> 
                    <h2>Nomes</h2>
                </ContainerTitleRank>
                <ul>
                {
                    storage.map(sto =>{
                        return(
                            <li>{sto.nomes}</li>
                        )
                    })
                }
                </ul>
            </ContainerNameMoves>
            <ContainerNameMoves>
                <ContainerTitleRank> 
                    <h2>Moves</h2>
                </ContainerTitleRank>
                <ul>
                {
                    storage.map(sto =>{
                        return(
                            <li>{sto.moves}</li>
                        )
                    })
                }
                </ul>
            </ContainerNameMoves>
        </ContainerRanking> : <Fragment/>}
        </>
    )
}
export default Rank