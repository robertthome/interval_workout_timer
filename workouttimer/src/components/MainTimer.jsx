import React, { useState, useEffect } from 'react'

function MainTimer() {
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [timerName, setTimerName] = useState(0) //maybe its own component?

  let timer

  // buttons add minutes and seconds to timer
  // create functions for onClick m/s
  // setMinute(minute + 1) etc
  // use setInterval to countdown timer 1000ms
  // store setI into variable and set it to a start btn

  useEffect(() => {})

  return (
    <div>
      <h2>
        {minutes < 10 ? '0' + minutes : minutes}:
        {seconds < 10 ? '0' + seconds : seconds}
      </h2>
      <button>Minutes+</button>
      <button>Seconds+</button>
      <button>Reset</button>
    </div>
  )
}

export default MainTimer
