import '../App.css';
import { useContext } from 'react';
import { Gamecontext } from '../helper/context';

function Menu(){

    const {gamestate,setgamestate,username,setusername}=useContext(Gamecontext)
console.log(username)
    return (
        <div className="Quiz">
            <label> Enter Your Name</label>
            <input type='text' onChange={(event)=>{
                setusername(event.target.value)
            }}/>
            <button onClick={()=>setgamestate('play')}>
            Quiz Start</button>
        </div>
    )
}

export default Menu