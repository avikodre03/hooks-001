import { useState } from 'react';
import './App.css';
import { questions } from './Components/Questions'

function App() {
  // const Right = { background: "green" }
  // const wrong = { background: "red" }
  const [currentvalue, setCurrentvalue] = useState(0)
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0)
  // const [ansbg, setansbg] = useState("")
  const [clicked, setclicked] = useState(false)

  const handleanswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }
    setclicked(true)
    
    const nextvalue = currentvalue + 1
    if (nextvalue < questions.length) {
      setTimeout(() => {
        setCurrentvalue(nextvalue)
        setclicked(false)
      }, 1000)
      
    }
    else {
      setShowScore(true)
    }

  }
  // const background = (isCorrect) =>{
  //   if (isCorrect) {
  //     setansbg(Right)
  //   }else{
  //     setansbg(wrong)

  //   }

  // }
  return (
    <div className="app">
      {showScore
        ?
        (<div className='maincontainer'>
          <h1 style={{ fontSize: "2.5rem", fontStyle: "italic" }}>🎉 Congratulation 🎉</h1>
          <br />
          <h1>You scored {score} out of {questions.length}</h1>
        </div>)
        : (<>
          <div className='maincontainer'>

            <div className='header'>
              <h1>JS & React Quiz</h1>
              <h2>Current Score : {score}</h2>
            </div>

            <div className='question-section'>
              <h2>Questions {currentvalue + 1} out of {questions.length}</h2>
              <h3> {questions[currentvalue].questionText}</h3>
              {/* {console.log(questions[currentvalue].questionText)} */}
              <div className='answer-section'>

                {questions[currentvalue].answerOptions.map((ele) => {
                  return <button className={`button ${clicked && ele.isCorrect?"correct":"button"}`} onClick={() => {
                    handleanswer(ele.isCorrect)
                  
                    
                  }}>{ele.answerText} </button>


                })}
              </div>

            </div>
          </div>
        </>)}


    </div>
  );
}

export default App;