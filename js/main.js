'use strict'

//gruppo di immagini
const imgs = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp' ]
//container HTML
const slider = document.querySelector('.slider')
//posizione immagini
let active = 0;

//variabile che ci permette di interpolare le immagini nel file HTML
let imageGroupContent = '';


//Ciclo 
for(let i = 0; i < imgs.length; i++){
    console.log(imgs[i]);

    imageGroupContent += `<div class="image-group"><img src="img/${imgs[i]}" alt=""></div>`
}

slider.innerHTML += imageGroupContent;  
document.querySelector('.image-group').classList.add('show')


const up = document.querySelector('.up')
const down = document.querySelector('.down')
const items = document.querySelectorAll('.image-group')
console.log(items)

//Interattività 
up.addEventListener('click', function(){
    if(active > 0)
    items[active].classList.remove('show'); 
    active--;
    items[active].classList.add('show');
})

down.addEventListener('click', function(){
    if(active < items.length - 1)
    items[active].classList.remove('show'); 
    active++;
    items[active].classList.add('show');
    console.log(active)
})
 
