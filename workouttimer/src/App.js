import react, { useState } from 'react'
import RoundCounter from './components/RoundCounter'
import MainTimer from './components/MainTimer'
import BreakTimer from './components/BreakTimer'
import './styles/App.css'

function App() {
  const [breakTimer, setBreakTimer] = useState(0)
  const [cooldownTimer, setCooldownTimer] = useState(0)

  return (
    <div className="App">
      <RoundCounter />
      <MainTimer />
      <BreakTimer />
    </div>
  )
}

export default App
