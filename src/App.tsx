import { useState } from 'react'
import './App.css'
import { Habit } from "./components/Habit"

function App() {
  return (
    <div className="App">
      <Habit completed={3} />
      <Habit completed={10} />
    </div>
  )
}

export default App
