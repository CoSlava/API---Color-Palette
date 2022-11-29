const select = document.getElementById('select')
const colorSelector = document.getElementById('color-selector')

document.getElementById("get-color-scheme-btn").addEventListener('click', ()=>{
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorSelector.value.replace('#','')}&format=json&mode=${select.value}&count=5`)
    .then(res => res.json())
    .then(data => {
        document.getElementById("colors-palete").innerHTML = 
            `<img src="${data.image.bare}">`
    })
})