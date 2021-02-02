let down = document.getElementById('down')
let up = document.getElementById('up')
let one = document.getElementById('one')
let two = document.getElementById('two')


down.addEventListener('click', go_down)
up.addEventListener('click', go_up)


function go_down() {

    let distance = one.offsetTop + two.offsetTop
    scrollBy({ top: distance, behavior: "smooth" })
}

function go_up() {
    let distance = -(one.offsetTop + two.offsetTop)
    scrollBy({ top: distance, behavior: "smooth" })
}