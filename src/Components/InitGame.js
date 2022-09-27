import { useState, Fragment } from "react"

function InitGame(){

const [start, Setstart] = useState(true)    

function handleStart(){
    Setstart(false)
}

return(

    (start ?
        <div>
            
        <div id="gameOver">
            <div>
               Jogo da Memória 
            </div>
            <button id="btn" onClick={handleStart} >Começar o jogo !</button>
        </div>
    
    
        </div>: <Fragment/>)

)


}
export default InitGame