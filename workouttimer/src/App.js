import react, { useState } from 'react'
import RoundCounter from './components/RoundCounter'
import MainTimer from './components/MainTimer'
import './styles/App.css'

function App() {
  const [timer, setTimer] = useState(0)
  const [breakTimer, setBreakTimer] = useState(0)
  const [cooldownTimer, setCooldownTimer] = useState(0)
  const [timerName, setTimerName] = useState(0)
  const [roundName, setRoundName] = useState(0)

  return (
    <div className="App">
      <RoundCounter />
      <MainTimer />
    </div>
  )
}

export default App
