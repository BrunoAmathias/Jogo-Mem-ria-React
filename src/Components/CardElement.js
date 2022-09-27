import React from "react";
import { useContext } from "react";
import { FlipContext } from "../contexto/FlipContext";

function CardElement({card}){

const {Flip} = useContext(FlipContext)

    return(
            <div  onClick={()=>{Flip(card)}} id={card.id} className={`card ${card.flipped ? 'flip' : ''}`}>

                <div className="card_front">
                    <img className="icon" 
                    src={`assets/images/${card.icon}.png`}
                    alt={card.icon}/>
                </div>
                <div className="card_back">
                    {"</>"}
                </div>
            </div>
    )


}
export default CardElement