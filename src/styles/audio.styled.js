import styled from "styled-components";

export const ContainerAudio = styled.div `
    position: absolute;
    top: 30px;
    right: 30px;
    display: flex;

    div{
    margin-left: 20px;
    background-color: #05c3ff;
    padding: 20px;
    border-radius: 20px;
    border: 0.2px solid black;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.45);
    cursor: pointer;
    }

    @media(max-width: 700px){
        div{
            padding: 10px;
            border-radius: 10px;
        }
    }
`