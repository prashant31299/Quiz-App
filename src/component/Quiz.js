import { useState } from 'react'
import '../App.css'
import { Questions } from '../helper/Questions'
import { useContext } from 'react';
import { Gamecontext } from '../helper/context';


function Quiz(){
    
    const [currentQuestion,setcurrentQuestion] = useState(0)
    const [optionsChosen,setoptionsChosen] = useState("")
    
    const {score,setscore,gamestate,setgamestate}=useContext(Gamecontext)

    const chosenoption=(options)=>{
        setoptionsChosen(options)

    };
        const Nextquetion=()=>{
            
            if (Questions[currentQuestion].answer ===optionsChosen){
                setscore(score + 1)
            }          
        
        
        setcurrentQuestion(prev=>prev+1)
        console.log(score)
        }

        
        function finishquiz(){
            if (Questions[currentQuestion].answer ===optionsChosen){
                setscore(score + 1)
            }          
        
            setgamestate('finish')
        }
    
    return (
        <div className='Quiz'>
            <h2>Quiz Component this is componrt for Quiz</h2>
            <h4>{Questions[currentQuestion].prompt}</h4>
            <div className='questions'>
                <button
                onClick={()=>{
                    chosenoption("OptionA")

                }}>{Questions[currentQuestion].OptionA}</button>

                <button onClick={()=>{
                    chosenoption("OptionB")
                 }} >{Questions[currentQuestion].OptionB}</button>

                <button onClick={()=>{
                    chosenoption("OptionC")
                 }}>{Questions[currentQuestion].OptionC}</button>

                <button onClick={()=>{
                    chosenoption("OptionD")
                }}>{Questions[currentQuestion].OptionD}</button>
                    
                    {currentQuestion==Questions.length-1 ?
                  <button onClick={finishquiz} >finish </button>
                 :   <button onClick={Nextquetion} >Next </button>
                    }
            </div>

        </div>
    )
}

export default Quiz