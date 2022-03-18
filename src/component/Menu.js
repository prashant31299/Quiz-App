import '../App.css';
import { useContext } from 'react';
import { Gamecontext } from '../helper/context';

function Menu(){

    const {gamestate,setgamestate}=useContext(Gamecontext)

    return (
        <div className="Menu">
            <label> Enter Your Name</label>
            <input type='text' />
            <button onClick={()=>{
                setgamestate('playing ')
            }}>Quiz Start</button>

        </div>
    )
}

export default Menu