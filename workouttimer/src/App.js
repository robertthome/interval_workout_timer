import react, { useState } from 'react'
import RoundCounter from './components/RoundCounter'
import './styles/App.css'

function App() {
  // const [rounds, setRounds] = useState(0)
  const [timer, setTimer] = useState(0)
  const [breakTimer, setBreakTimer] = useState(0)
  const [cooldownTimer, setCooldownTimer] = useState(0)
  const [timerName, setTimerName] = useState(0)
  const [roundName, setRoundName] = useState(0)
  // refactor state with useRuducer

  // const decrementRound = () => {
  //   if (rounds > 0) {
  //     setRounds((prevState) => prevState - 1)
  //   }
  // }

  // const incrementRound = () => {
  //   setRounds((prevState) => prevState + 1)
  // }

  return (
    <div className="App">
      <RoundCounter />
    </div>
  )
}

export default App
