import Controls from './controls.js'
import Timer from './timer.js'
import Sounds from './sounds.js'
import Mode from './mode.js'
import {
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
} from './elements.js'
import Mixer from './mixer.js'

const sounds = Sounds()

const mode = Mode({
  lightButton,
  darkButton
})

const mixer = Mixer({
  forestSoundButton,
  rainSoundButton,
  coffeeShopSoundButton,
  fireplaceSoundButton,
  forestSound: sounds.forest,
  rainSound: sounds.rain,
  coffeeShopSound: sounds.coffeeShop,
  fireplaceSound: sounds.fireplace,
  forestSoundVolume,
  rainSoundVolume,
  coffeeShopSoundVolume,
  fireplaceSoundVolume
})

const controls = Controls({
  playButton,
  pauseButton
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  stopControls: controls.stop,
  alarmSound: sounds.alarm
})

playButton.addEventListener('click', () => {
  controls.play()
  timer.play()
  sounds.button.play()
})

pauseButton.addEventListener('click', () => {
  controls.pause()
  timer.pause()
  sounds.button.play()
})

stopButton.addEventListener('click', () => {
  controls.stop()
  timer.stop()
  sounds.button.play()
})

increaseButton.addEventListener('click', () => {
  timer.increase()
  sounds.button.play()
})

decreaseButton.addEventListener('click', () => {
  timer.decrease()
  sounds.button.play()
})

forestSoundButton.addEventListener('click', (event) => {
  if (event.target == forestSoundButton) {
    mixer.forest()
  }
})

rainSoundButton.addEventListener('click', (event) => {
  if (event.target == rainSoundButton) {
    mixer.rain()
  }
})

coffeeShopSoundButton.addEventListener('click', (event) => {
  if (event.target == coffeeShopSoundButton) {
    mixer.coffeeShop()
  }
})

fireplaceSoundButton.addEventListener('click', (event) => {
  if (event.target == fireplaceSoundButton) {
    mixer.fireplace()
  }
})

lightButton.addEventListener('click', () => {
  mode.darkMode()
})

darkButton.addEventListener('click', () => {
  mode.lightMode()
})