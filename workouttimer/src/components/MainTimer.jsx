import React, { useState, useEffect } from 'react'

function MainTimer() {
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [timerName, setTimerName] = useState(0) //maybe its own component?

  let timer

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1)

      if (seconds === 59) {
        setMinutes(minutes + 1)
        setSeconds(0)
      }
    }, 1000)

    return () => clearInterval(timer)
  })

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
