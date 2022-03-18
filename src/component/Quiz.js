import { useState } from 'react'
import '../App.css'

import { Questions } from '../helper/Questions'

function Quiz(){
    const [currentQuestion,setcurrentQuestion] = useState(0)
    const [optionsChosen,setoptionsChosen] = useState("")
    const [count,setcount]=useState(0)
    const chosenoption=(options)=>{
        setoptionsChosen(options)

    }
        const Nextquetion=()=>{
            setcurrentQuestion(prev=>prev+1)
            
                if (Questions[currentQuestion].answer ===optionsChosen){
                    setcount(prev=>prev+1)
                }else{
                    setcount()                };
        }
            console.log(count)
    
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
                 <button onClick={Nextquetion} >Next </button>
            </div>

            {optionsChosen}
        </div>
    )
}

export default Quiz