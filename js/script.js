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
  darkButton
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

forestSoundButton.addEventListener('click', () => {
  mixer.forest()
})

rainSoundButton.addEventListener('click', () => {
  mixer.rain()
})

coffeeShopSoundButton.addEventListener('click', () => {
  mixer.coffeeShop()
})

fireplaceSoundButton.addEventListener('click', () => {
  mixer.fireplace()
})

lightButton.addEventListener('click', () => {
  mode.darkMode()
})

darkButton.addEventListener('click', () => {
  mode.lightMode()
})