const playButton = document.querySelector('[data-button="play"]')
const pauseButton = document.querySelector('[data-button="pause"]')
const stopButton = document.querySelector('[data-button="stop"]')
const minutesDisplay = document.querySelector('[data-timer="minutes"]')
const secondsDisplay = document.querySelector('[data-timer="seconds"]')
const increaseButton = document.querySelector('[data-button="increase"]')
const decreaseButton = document.querySelector('[data-button="decrease"]')
const forestSoundButton = document.querySelector('[data-sound="forest"]')
const rainSoundButton = document.querySelector('[data-sound="rain"]')
const coffeeShopSoundButton = document.querySelector('[data-sound="coffee-shop"]')
const fireplaceSoundButton = document.querySelector('[data-sound="fireplace"]')
const lightButton = document.querySelector('[data-button="light"]')
const darkButton = document.querySelector('[data-button="dark"]')
const forestSoundVolume = document.querySelector('[data-volume="forest"]')
const rainSoundVolume = document.querySelector('[data-volume="rain"]')
const coffeeShopSoundVolume = document.querySelector('[data-volume="coffee-shop"]')
const fireplaceSoundVolume = document.querySelector('[data-volume="fireplace"]')

export {
  playButton,
  pauseButton,
  stopButton,
  minutesDisplay,
  secondsDisplay,
  increaseButton,
  decreaseButton,
  forestSoundButton,
  rainSoundButton,
  coffeeShopSoundButton,
  fireplaceSoundButton,
  lightButton,
  darkButton,
  forestSoundVolume,
  rainSoundVolume,
  coffeeShopSoundVolume,
  fireplaceSoundVolume
}