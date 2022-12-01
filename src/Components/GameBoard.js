import React from "react";
import CardElement from "./CardElement";
import {ContainerGameBoard} from '../styles/gameboard.styled'

function GameBoard({cards, handleFlip}){
    

    return(

            <ContainerGameBoard>
                
                {cards.map((card, index)=>
                    <CardElement handleFlip={handleFlip} key={index} card={card} />
                )}
            </ContainerGameBoard>

    )
}

export default GameBoard