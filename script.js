let root = document.documentElement;
const spacingInput = document.querySelector('#spacing')
const blurInput = document.querySelector('#blur')
const baseInput = document.querySelector('#base')

const changeSpacing = () => {
    root.style.setProperty('--spacing', `${spacingInput.value}px`)
}
const changeBlur = () => {
    root.style.setProperty('--blur', `${blurInput.value}px`)
}
const changeColor = () => {
    root.style.setProperty('--base', `${baseInput.value}`)
}

