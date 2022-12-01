import styled from "styled-components";

export const ContainerGameOver = styled.div `
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top:0;
    left:0;

    div{
        font-size: 50px;
    }
    button{
        padding: 20px;
        font-size: 20px;
        background-color: yellow;
        border: none;
        border-radius:10px;
        margin-top:10px;
        cursor: pointer;
    }
    @media(max-width: 780px) {
        div{
            font-size: 25px;
        }
    
}
`