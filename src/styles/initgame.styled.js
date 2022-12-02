import styled from "styled-components";

export const ContainerInitGame= styled.div`
   position: absolute;
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top:0;
    left:0;

    button{
        background-color: #ff0;
        border: none;
        cursor: pointer;
        font-size: 20px;
        margin-top: 10px;
        padding: 20px;
        border-radius: 10px;
    }
    form{
        display: flex;
        flex-direction: column;
        p{
            color: red;
        }
    }
    `

export const ContainerTitleGame = styled.div `
    font-size: 50px;

    @media(max-width: 400px) {
     font-size: 30px;
    }
`

export const ContainerName = styled.div `
    text-align: center;
    font-size: 18px;
    input{
        border: none ;
        outline: none;
        padding: 5px;
        margin: 5px 0 5px 0px;
        border-radius: 5px;
        text-align: center;
    }
    
`

export const ContainerNameFalse = styled.div`
    text-align: center;
    font-size: 18px;
    input{
        border: red 1px solid ;
        outline: none;
        padding: 5px;
        margin: 5px 0 5px 0px;
        border-radius: 5px;
        text-align: center;
    }
`