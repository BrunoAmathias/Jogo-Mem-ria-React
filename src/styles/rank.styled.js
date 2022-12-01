import styled from "styled-components";

export const ContainerIconRanking = styled.div `
    position: absolute;
    top: 40px;
    left: 40px;
    background-color: #05c3ff;
    border-radius: 10px;
    padding: 10px;
    border: 1px solid black;
    cursor: pointer;

   
`

export const ContainerIconClose = styled.div`
    position: absolute;
    top : 15px;
    right: 15px;
    border-radius: 9px;
    padding: 4px;

    svg{
        position: relative;
        top: 0;
        right: 0;
        color: black;
        cursor:pointer
    }
`


export const ContainerRanking = styled.div `
    display: flex;
    position: absolute;
    background-color:#05c3ff;
    top: 100px;
    padding: 4%;
    border-radius: 10px;
    border: 2px solid white;
    transition: all linear 0.2s;

    ul{
        list-style: none;
        font-size: 25px;
        text-align: center;
        border: 1px solid black;
        border-radius: 10px;
        padding: 30px;
    }
    @media(max-width: 430px) {
        
    padding: 30px

    
    ul{
        padding: 20px;
    }
}
`


export const ContainerNameMoves = styled.div `
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 0 20px 0 20px;

    @media (max-width: 430px) {
        
    margin: 0 10px 5px 10px;
    
   
}

`

export const ContainerTitleRank = styled.div`
    margin-bottom: 10px;
    font-size: 25px;
`

