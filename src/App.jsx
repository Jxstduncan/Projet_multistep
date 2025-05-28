import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card/Card'
import data from '../abonnement.json'

function App() {
  const [text, setText] = useState('')
   const changeText = (e)=>{
    setText(e.target.value)
    
    
   }
  return (
    <>
      <div className='df'>
        <Card text={text} changeText={changeText} />
      </div>
    </>
  )
}

export default App
