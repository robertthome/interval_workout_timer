import React, { useState } from 'react'

function MainTimer() {
  const [timer, setTimer] = useState(0)
  const [timerName, setTimerName] = useState(0) //maybe its own component?

  return (
    <div>
      <h1>Hey there little bear, why the long face?</h1>
    </div>
  )
}

export default MainTimer
