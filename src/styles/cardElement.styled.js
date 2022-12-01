import styled from "styled-components";

export const ContainerCardElement = styled.div`
    width: 120px;
    height: 120px;
    position: relative;
    -webkit-transform-style: preserve-3d;
    -webkit-transition: transform .5s;
    transform-style: preserve-3d;
    transition: transform .5s;
    transform: ${props => props.flip ? 'rotateY(180deg)' : ''} ;
`

export const ContainerCardFront = styled.div`
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
    background-color: #101c2c;
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.45);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;

    img{
        width:80px;
        height: 80px;
        max-width: 80px;
        max-height: 80px;
    }
`

export const ContainerCardBack = styled.div`
    color: #101c2c;
    background-color: #05c3ff;
    font-size: 30px;
    cursor: pointer;
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.45);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
`