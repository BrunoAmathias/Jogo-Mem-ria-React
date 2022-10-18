import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { AiFillAudio, AiOutlineAudioMuted } from "react-icons/ai";
import {MdOutlineMusicNote, MdOutlineMusicOff} from "react-icons/md"
import { FlipContext } from '../contexto/FlipContext';

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

  return ( <div className='container-audio'>
    <div onClick={changeAudio} className='audio'>
       {audio ?<AiFillAudio/> : <AiOutlineAudioMuted/>} 
    </div>
    <div onClick={changeMusic} className='audio'>{ music ? <MdOutlineMusicNote/> : <MdOutlineMusicOff/> }</div>
    </div>
  )
}

export default Audio