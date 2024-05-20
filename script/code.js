let screen = document.querySelector('#screen-card')
let result = document.querySelector('[result]')

function display(value){
        screen.value += value
}

function clearScreen(){
    screen.value = ""
}

result.addEventListener('click', () => {
    screen.value = eval(screen.value)
})
