const button = document.getElementById('mode-selector')
const title = document.getElementById('page-title')
const body = document.getElementsByTagName('body')[0]
const footer = document.getElementsByTagName('footer')[0]
const darkModeClas = 'dark-mode'

function changeMode(){
    changeClasses()
    changeText()
}

function changeClasses() {
    button.classList.toggle('dark-mode')
    title.classList.toggle('dark-mode')
    body.classList.toggle('dark-mode')
    footer.classList.toggle('dark-mode')
}

function changeText() {
    const lightMode = "Light Mode"
    const darkMode = "Dark Mode"

    if(body.classList.contains(darkModeClas)) {
        button.innerHTML = lightMode
        title.innerHTML = darkMode + " ON"
        return
    }

    button.innerHTML = darkMode
    title.innerHTML = lightMode + "ON"
}

button.addEventListener('click', changeMode)
