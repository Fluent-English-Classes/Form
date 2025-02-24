
import './App.css'
import questions from './script.js'
import { useState } from 'react'
import Form from './components/Form.jsx'
import image from './assets/logo.jpg'

function App() {
  const [form,setForm]=useState(false)
  const [selectedOption, setSelectedOption] = useState([]);
  const [questionnum,setQuestionnum]=useState(0)
  const colorchange=(index)=>{
    const newselect=[...selectedOption]
    newselect[questionnum]=index
    setSelectedOption(newselect)
  }
  const nextGame=()=>{
    setQuestionnum(questionnum+1)
    if (questionnum===2){
      setForm(true)
    }
    else{
     setSelectedOption([...selectedOption,null])
    }
  }
  const error=()=>{
    alert("Choose a option")
  }
  return (
    <div className='flex flex-col items-center h-full justify-evenly'>
      {form ? <Form selectedOption={selectedOption}/>:
      <>
      <div className={`w-50 h-40 m-2 p-0 flex items-center justify-center `}>
        <img src={image} className='w-30  rounded-full'/>
      </div>
     <div className='text-3xl font-bold text-center p-2 sm:text-4xl sm:p-10'>{questions[questionnum].question}</div>
     <ul className='m-3 text-center p-2  w-full max-w-xl'>
{questions[questionnum].options.map((options,index)=>(
  <li key={index} className={`options ${selectedOption[questionnum]===index?`bg-blue-700 text-white m-[10px]`:null} text-lg sm:text-2xl`}
      onClick={()=>colorchange(index)}>{options}</li>
))}
     </ul>
     <div className='flex items-center justify-center m-0' >
      <button className='customButton m-0'
      onClick={()=> selectedOption[questionnum]!==null?nextGame():error()}>
        Next
      </button>
     </div>
     </>
}
     </div>
  )
}

export default App
