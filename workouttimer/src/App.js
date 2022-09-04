import react, { useState } from 'react'
import RoundCounter from './components/RoundCounter'
import MainTimer from './components/MainTimer'
import BreakTimer from './components/BreakTimer'
import CooldownTimer from './components/CooldownTimer'
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <RoundCounter />
      <MainTimer />
      <BreakTimer />
      <CooldownTimer />
    </div>
  )
}

export default App
