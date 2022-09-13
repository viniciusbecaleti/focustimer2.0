export default function Mode({
  lightButton,
  darkButton
}) {
  function darkMode() {
    document.documentElement.style.setProperty("--text-color", "white")
    document.documentElement.style.setProperty("--button-bg", "#29292E")
    document.documentElement.style.setProperty("--selected-button-bg", "#0A3442")
    document.documentElement.style.setProperty("--body-bg", "#121214")
    document.documentElement.style.setProperty("--button-color", "#C4C4CC")

    lightButton.classList.add('hidden')
    darkButton.classList.remove('hidden')
  }

  function lightMode() {
    document.documentElement.style.setProperty("--text-color", "#323238")
    document.documentElement.style.setProperty("--button-bg", "#E1E1E6")
    document.documentElement.style.setProperty("--selected-button-bg", "#02799D")
    document.documentElement.style.setProperty("--body-bg", "white")
    document.documentElement.style.setProperty("--button-color", "#323238")

    darkButton.classList.add('hidden')
    lightButton.classList.remove('hidden')
  }

  return {
    darkMode,
    lightMode
  }
}