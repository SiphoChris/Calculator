let screen = document.querySelector('#screen-card')
let result = document.querySelector('[result]')

function display(value){
        screen.value += value
}

function clearScreen(){
    screen.value = ""
}

function delette(){
    screen.value = screen.value.slice(0, -1)
}

result.addEventListener('click', () => {
    screen.value = eval(screen.value)
})
