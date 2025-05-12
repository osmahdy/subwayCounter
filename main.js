let screen = document.querySelector(`.screen`)
let queue = document.querySelector(`.queue p`)
let incBtn = document.querySelector(`.incBtn`)
let saveBtn = document.querySelector(`.saveBtn`)

let counter = 0;

incBtn.addEventListener('click', (w) => {
    screen.textContent = ++counter;
    addToQueue(counter)
})

saveBtn.addEventListener('click', (w) => {
    screen.textContent = 0;
    counter = 0;
    clearQueue(counter)
})

function addToQueue(e) {
    localStorage.setItem('counter',e)
    queue.textContent = `${queue.textContent} - ${e}`
}
function clearQueue(e) {
    localStorage.setItem('counter', `${e}`)
    queue.textContent = '';
}