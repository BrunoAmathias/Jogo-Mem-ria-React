import styled from "styled-components";


export const ContainerGameBoard = styled.div `
    max-width: 700px;
    display: grid;
    grid-template: 1fr 1fr 1fr 1fr 1fr / 1fr 1fr 1fr 1fr;
    gap:20px;


    @media(max-width: 700px){
        max-width: 400px;
        grid-template: 1fr 1fr 1fr 1fr 1fr  / 1fr 1fr 1fr 1fr;
        gap: 20px;
    }
`