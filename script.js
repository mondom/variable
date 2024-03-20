// let root = document.documentElement;
// const spacingInput = document.querySelector('#spacing')
// const blurInput = document.querySelector('#blur')
// const baseInput = document.querySelector('#base')

// const changeSpacing = () => {
//     root.style.setProperty('--spacing', `${spacingInput.value}px`)
// }
// const changeBlur = () => {
//     root.style.setProperty('--blur', `${blurInput.value}px`)
// }
// const changeColor = () => {
//     root.style.setProperty('--base', `${baseInput.value}`)
// }

const inputs = document.querySelectorAll('.controls input')

function handleUpdate() {
	const suffix = this.dataset.sizing || ''
	
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)

}

inputs.forEach(input => {
	input.addEventListener('change', handleUpdate)
})

inputs.forEach(input => {
	input.addEventListener('mousemove', handleUpdate)
})

// zmiana wartości zmiennych w css z użyciem metody dataset - notatki oraz this
