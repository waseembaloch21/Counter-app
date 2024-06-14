let h1 = document.getElementById('h1')

let decrease = document.getElementById('decrease')
let reset = document.getElementById('reset')
let increase = document.getElementById('increase')
let count = 0;

increase.onclick = function(){
    count++
    h1.textContent = count   
}

reset.onclick = function(){
    count=0
    h1.textContent = count
}

decrease.onclick = function(){
    count--
    h1.textContent = count
}









