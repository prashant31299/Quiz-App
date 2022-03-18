import { useState } from 'react';
import { Gamecontext } from './helper/context';
import Quiz from './component/Quiz';
import Menu from './component/Menu';
import './App.css';


function App() {
const [gamestate,setgamestate ]=useState('menu')
const [username,setusername] =useState("")
console.log(gamestate);   
  return (
    <div className="App">
  <h1>Quiz Appp</h1>
  <Gamecontext.Provider value={{gamestate,setgamestate,username,setusername}}>
{ gamestate ==='menu'&&  <Menu/>}
{ gamestate === 'play' && <Quiz/>}
</Gamecontext.Provider>
 </div>
  );
}

export default App;
