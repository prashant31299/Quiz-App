import { useState } from 'react';
import { Gamecontext } from './helper/context';
import Quiz from './component/Quiz';
import Finish from './component/finish';
import Menu from './component/Menu';
import './App.css';


function App() {
const [gamestate,setgamestate ]=useState('menu')
const [username,setusername] =useState("")
const [score,setscore]= useState(0)
console.log(gamestate);   
  return (
    <div className="App">
  <h1>Quiz Appp</h1>
  <Gamecontext.Provider value={{gamestate,
    setgamestate,
    username,
    setusername,
    score
    ,setscore
    }}>
{ gamestate ==='menu'&&  <Menu/>}
{ gamestate === 'play' && <Quiz/>}
{ gamestate === 'finish' && <Finish/>}
</Gamecontext.Provider>
 </div>
  );
}

export default App;
