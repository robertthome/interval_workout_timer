import React, { useState } from 'react'

function RoundCounter(props) {
  const [rounds, setRounds] = useState(0)

  const decrementRound = () => {
    if (rounds > 0) {
      setRounds((prevState) => prevState - 1)
    }
  }

  const incrementRound = () => {
    setRounds((prevState) => prevState + 1)
  }

  return (
    <div>
      <h2>Rounds</h2>
      <button onClick={decrementRound}>-</button>
      <span>{rounds}</span>
      <button onClick={incrementRound}>+</button>
    </div>
  )
}

export default RoundCounter
