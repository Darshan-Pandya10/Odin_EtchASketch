const body = document.body;
const pixelSpace = document.createElement('div');
const form = document.querySelector('form');
const clear = document.querySelector('.clear');
const favColor = document.querySelector('.favcolor');
const randomColor = document.querySelector('.random');
const content = document.querySelector('.content');
const erase = document.querySelector('.erase');


body.classList.add('body');
pixelSpace.classList.add('pixelspace');
content.appendChild(pixelSpace);

const input = document.querySelector('.input');


form.addEventListener('submit', (e) => {

    e.preventDefault();

    // pixelSpace.style.border = "2px solid black";

    for( i = 1 ; i<=input.value ; i++ ){
        const pixels = document.createElement('div');
        pixels.classList.add('pixels')
        pixelSpace.appendChild(pixels);
        
        randomColor.addEventListener('click',() => {

            let r = Math.floor((Math.random() * 250) + 1); 
            let g = Math.floor((Math.random() * 250) + 1); 
            let b = Math.floor((Math.random() * 250) + 1); 
    
            let bgColor = "rgb(" + r + "," + g + "," + b + ")";
    

            pixelSpace.addEventListener('mousemove' , () => {

                pixels.addEventListener('mouseover', () => {
                    pixels.style.backgroundColor = bgColor;
                })
    
            })
        })

        favColor.addEventListener('click' , () => {

            
            pixelSpace.addEventListener('mousemove' , () => {

                pixels.addEventListener('mouseover', () => {
                    pixels.style.backgroundColor = favColor.value;
                })
    
            })

        })

        erase.addEventListener('click' , () => {

            
            pixelSpace.addEventListener('mousemove' , () => {

                pixels.addEventListener('mouseover', () => {
                    pixels.style.backgroundColor = 'rgb(255,255,255)';
                })
    
            })

        })


       
       

        clear.addEventListener('click', () => {
            pixels.style.backgroundColor = 'rgb(255,255,255)';
            
        })

       
    }


})
