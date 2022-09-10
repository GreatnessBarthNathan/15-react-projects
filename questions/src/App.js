import React, {useState} from 'react'
import Questions from './questions'
import {data} from './data'

function App() {
  const [questions, setQuestions] = useState(data)

  return (
   <section className="container">
    <div className="wrapper">
      <div className="title">
      <h2>questions and answers about yourself</h2>
    </div> 
    <div className="question-center">
    {
      questions.map((question)=> {
        return <Questions key={question.id} {...question}/>
      })
    }
    </div>
    </div>
    
   </section>
  );
}

export default App;
