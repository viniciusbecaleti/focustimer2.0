export default function Sounds() {
  const button = new Audio('../sounds/botao.wav')
  const coffeeShop = new Audio('../sounds/cafeteria.wav')
  const rain = new Audio('../sounds/chuva.wav')
  const forest = new Audio('../sounds/floresta.wav')
  const fireplace = new Audio('../sounds/lareira.wav')
  const alarm = new Audio('../sounds/alarme.mp3')

  coffeeShop.loop = true
  rain.loop = true
  forest.loop = true
  fireplace.loop = true

  return {
    button,
    coffeeShop,
    rain,
    forest,
    fireplace,
    alarm
  }
}