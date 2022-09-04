import React, { useState } from 'react'

function MainTimer() {
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [timerName, setTimerName] = useState(0) //maybe its own component?

  return (
    <div>
      <h1>Hey there little bear, why the long face?</h1>
      <h3>
        <span>0</span>:00
      </h3>
    </div>
  )
}

export default MainTimer
