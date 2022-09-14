export default function Mixer({
  forestSoundButton,
  rainSoundButton,
  coffeeShopSoundButton,
  fireplaceSoundButton,
  forestSound,
  rainSound,
  coffeeShopSound,
  fireplaceSound,
  forestSoundVolume,
  rainSoundVolume,
  coffeeShopSoundVolume,
  fireplaceSoundVolume
}) {
  function play(sound, element) {
    if (!sound.paused) {
      sound.pause()
      element.value = 0
      return
    }

    sound.play()
    volume(sound, 0.5, element)
  }

  function stop(sound, element) {
    sound.pause()
    element.value = 0
  }

  function volume(sound, value, element) {
    if (element) {
      element.value = value
    }

    sound.volume = value
  }

  function forest() {
    forestSoundButton.classList.toggle('playing')
    rainSoundButton.classList.remove('playing')
    coffeeShopSoundButton.classList.remove('playing')
    fireplaceSoundButton.classList.remove('playing')

    stop(rainSound, rainSoundVolume)
    stop(coffeeShopSound, coffeeShopSoundVolume)
    stop(fireplaceSound, fireplaceSoundVolume)
    
    play(forestSound, forestSoundVolume)
  }

  function rain() {
    rainSoundButton.classList.toggle('playing')
    forestSoundButton.classList.remove('playing')
    coffeeShopSoundButton.classList.remove('playing')
    fireplaceSoundButton.classList.remove('playing')

    stop(forestSound, forestSoundVolume)
    stop(coffeeShopSound, coffeeShopSoundVolume)
    stop(fireplaceSound, fireplaceSoundVolume)

    play(rainSound, rainSoundVolume)
  }

  function coffeeShop() {
    coffeeShopSoundButton.classList.toggle('playing')
    rainSoundButton.classList.remove('playing')
    forestSoundButton.classList.remove('playing')
    fireplaceSoundButton.classList.remove('playing')

    stop(forestSound, forestSoundVolume)
    stop(rainSound, rainSoundVolume)
    stop(fireplaceSound, fireplaceSoundVolume)

    play(coffeeShopSound, coffeeShopSoundVolume)
  }

  function fireplace() {
    fireplaceSoundButton.classList.toggle('playing')
    coffeeShopSoundButton.classList.remove('playing')
    rainSoundButton.classList.remove('playing')
    forestSoundButton.classList.remove('playing')

    stop(forestSound, forestSoundVolume)
    stop(rainSound, rainSoundVolume)
    stop(coffeeShopSound, coffeeShopSoundVolume)

    play(fireplaceSound, fireplaceSoundVolume)
  }

  forestSoundVolume.addEventListener('change', () => {
    let element = forestSoundVolume
    let value = +element.value
    volume(forestSound, value, element)
  })

  rainSoundVolume.addEventListener('change', () => {
    let element = rainSoundVolume
    let value = +element.value
    volume(rainSound, value, element)
  })

  coffeeShopSoundVolume.addEventListener('change', () => {
    let element = coffeeShopSoundVolume
    let value = +element.value
    volume(coffeeShopSound, value, element)
  })

  fireplaceSoundVolume.addEventListener('change', () => {
    let element = fireplaceSoundVolume
    let value = +element.value
    volume(fireplaceSound, value, element)
  })

  return {
    forest,
    rain,
    coffeeShop,
    fireplace
  }
}