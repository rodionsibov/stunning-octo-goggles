window.addEventListener('click', () => {
    let randomColor = Math.floor(Math.random() * 360)
    document.documentElement.style.setProperty('--hue-color', randomColor)
})