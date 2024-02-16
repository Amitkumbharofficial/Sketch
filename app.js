// const num = prompt('Enter Grid');
let num
const bt = document.querySelector('.btn')

function createGrid() {

    let num = document.querySelector('.in').value || 16;
    document.querySelector('.main').innerHTML = '';

    for (let i = 0; i < num * num; i++) {
        const dv = document.createElement('div');
        dv.style = `height: ${100 / (num)}%; width: ${100 / (num)}%;`;
        dv.className = 'px';
        dv.addEventListener('mouseover', changeClr);
        document.querySelector('.main').appendChild(dv);
    }
}
createGrid();

bt.addEventListener('click',createGrid)

function changeClr(event) {
    event.target.style.backgroundColor = `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`;
}