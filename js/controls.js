export default function Controls({
  playButton,
  pauseButton
}) {
  function play() {
    playButton.classList.add('hidden')
    pauseButton.classList.remove('hidden')
  }

  function pause() {
    pauseButton.classList.add('hidden')
    playButton.classList.remove('hidden')
  }

  function stop() {
    playButton.classList.remove('hidden')
    pauseButton.classList.add('hidden')
  }

  return {
    play,
    pause,
    stop
  }
}