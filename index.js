const btn = document.querySelector('#btn');
const color = document.getElementById('color');

btn.addEventListener('click', ()=>{
 let getColor =  `rgb(${getRandomNumber()},${getRandomNumber()}, ${getRandomNumber()})`
 color.textContent = getColor
 document.body.style.backgroundColor = getColor;
})

const getRandomNumber = ()=>{
    return Math.floor(Math.random() * 500)
}