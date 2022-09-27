import React from "react";
import CardElement from "./CardElement";

function GameBoard({cards, handleFlip}){
    

    return(

            <div id="gameBoard" >
                {cards.map((card, index)=>
                    <CardElement handleFlip={handleFlip} key={index} card={card} />
                )}
            </div>

    )
}

export default GameBoard