import React from 'react'
import { useContext } from 'react';
import { AiFillAudio, AiOutlineAudioMuted } from "react-icons/ai";
import {MdOutlineMusicNote, MdOutlineMusicOff} from "react-icons/md"
import { FlipContext } from '../contexto/FlipContext';
import {ContainerAudio} from '../styles/audio.styled'

function Audio(){

    const {audio, setAudio} = useContext(FlipContext)
    const {music, setMusic} = useContext(FlipContext)
    function changeAudio(){
        setAudio(!audio)
        console.log(audio);
    }

    function changeMusic(){
      setMusic(!music)
      console.log(music);
    }

  return ( 
  <ContainerAudio>
    <div onClick={changeAudio} className='audio'>
       {audio ?<AiFillAudio/> : <AiOutlineAudioMuted/>} 
    </div>
    <div onClick={changeMusic} className='audio'>{ music ? <MdOutlineMusicNote/> : <MdOutlineMusicOff/> }</div>
  </ContainerAudio>
  )
}

export default Audio