export default function Timer({
  minutesDisplay,
  secondsDisplay,
  stopControls,
  alarmSound
}) {
  let minutes = 25
  let seconds = 0
  let timerTimeout

  update(minutes, seconds)

  function update(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function increase() {
    if (minutes < 60) {
      stop()
      minutes += 5
      update(minutes, 0)
    }
  }

  function decrease() {
    if (minutes > 5) {
      stop()
      minutes -= 5
      update(minutes, 0)
    }
  }

  function play() {
    timerTimeout = setTimeout(() => {
      let minutes = +minutesDisplay.textContent
      let seconds = +secondsDisplay.textContent

      if (minutes <= 0 && seconds <= 0) {
        stop()
        alarmSound.play()
        return
      }

      if (seconds <= 0) {
        minutes -= 1
        seconds = 60
        update(minutes - 1, seconds)
      }

      seconds -= 1

      update(minutes, seconds)

      play()
    }, 1000)
  }

  function pause() {
    clearTimeout(timerTimeout)
  }
  
  function stop() {
    clearTimeout(timerTimeout)
    stopControls()
    update(minutes, seconds)
  }

  return {
    update,
    minutes,
    seconds,
    increase,
    decrease,
    play,
    pause,
    stop
  }
}