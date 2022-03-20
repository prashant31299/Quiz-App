import '../App.css'
import { Gamecontext } from '../helper/context';
import { Questions } from '../helper/Questions'

import { useContext } from 'react';


export default function Finish(){
    const {score,setscore,username,setusername,gamestate,setgamestate}=useContext(Gamecontext)

    const restart=()=>{
        setgamestate('menu')
        setscore(0)
    }
    return (
        <div className='finish'>
            <h2 className='username'>{username}</h2>
                <h3>{score} /{Questions.length} <span></span></h3>
                <h1> quiz finish </h1>
                <button onClick={restart}> restart</button>
        </div>
    )
}