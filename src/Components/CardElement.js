import React from "react";
import { useContext } from "react";
import { FlipContext } from "../contexto/FlipContext";
import {ContainerCardElement,
        ContainerCardFront,
        ContainerCardBack} from '../styles/cardElement.styled'

function CardElement({card}){

const {Flip} = useContext(FlipContext)

    return(
            <ContainerCardElement flip={card.flipped}  onClick={()=>{Flip(card)}} id={card.id} >

                <ContainerCardFront >
                    <img className="icon" 
                    src={`assets/images/${card.icon}.png`}
                    alt={card.icon}/>
                </ContainerCardFront>
                <ContainerCardBack >
                    {"</>"}
                </ContainerCardBack>
            </ContainerCardElement>
    )


}
export default CardElement