export default function Mixer({
  forestSoundButton,
  rainSoundButton,
  coffeeShopSoundButton,
  fireplaceSoundButton,
  forestSound,
  rainSound,
  coffeeShopSound,
  fireplaceSound
}) {
  function playOrPause(sound) {
    if (!sound.paused) {
      sound.pause()
      return
    }

    sound.play()
  }

  function forest() {
    forestSoundButton.classList.toggle('playing')
    rainSoundButton.classList.remove('playing')
    coffeeShopSoundButton.classList.remove('playing')
    fireplaceSoundButton.classList.remove('playing')

    rainSound.pause()
    coffeeShopSound.pause()
    fireplaceSound.pause()

    playOrPause(forestSound)
  }

  function rain() {
    rainSoundButton.classList.toggle('playing')
    forestSoundButton.classList.remove('playing')
    coffeeShopSoundButton.classList.remove('playing')
    fireplaceSoundButton.classList.remove('playing')

    forestSound.pause()
    coffeeShopSound.pause()
    fireplaceSound.pause()

    playOrPause(rainSound)
  }

  function coffeeShop() {
    coffeeShopSoundButton.classList.toggle('playing')
    rainSoundButton.classList.remove('playing')
    forestSoundButton.classList.remove('playing')
    fireplaceSoundButton.classList.remove('playing')

    forestSound.pause()
    rainSound.pause()
    fireplaceSound.pause()

    playOrPause(coffeeShopSound)
  }

  function fireplace() {
    fireplaceSoundButton.classList.toggle('playing')
    coffeeShopSoundButton.classList.remove('playing')
    rainSoundButton.classList.remove('playing')
    forestSoundButton.classList.remove('playing')

    forestSound.pause()
    rainSound.pause()
    coffeeShopSound.pause()

    playOrPause(fireplaceSound)
  }

  return {
    forest,
    rain,
    coffeeShop,
    fireplace
  }
}