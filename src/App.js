import { useState } from 'react';
import { Gamecontext } from './helper/context';
import './App.css';

import Menu from './component/Menu';

function App() {
const [gamestate,setgamestate]=useState('menu')

  return (
    <div className="App">
  <h1>Quiz Appp</h1>
  <Gamecontext.Provider value={{gamestate,setgamestate}}>
{ gamestate =='menu'&&  <Menu/>}
</Gamecontext.Provider>
    </div>
  );
}

export default App;
