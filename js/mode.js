export default function Mode({
  lightButton,
  darkButton
}) {
  function darkMode() {
    document.body.classList.add('dark')
    lightButton.classList.add('hidden')
    darkButton.classList.remove('hidden')
  }

  function lightMode() {
    document.body.classList.remove('dark')
    darkButton.classList.add('hidden')
    lightButton.classList.remove('hidden')
  }

  return {
    darkMode,
    lightMode
  }
}