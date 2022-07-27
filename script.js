const body = document.body;
const pixelSpace = document.createElement('div');
const form = document.querySelector('form');
const clear = document.querySelector('.clear')


body.classList.add('body');
pixelSpace.classList.add('pixelspace');
body.appendChild(pixelSpace);

const input = document.querySelector('.input');


form.addEventListener('submit', (e) => {

    e.preventDefault();

    for( i = 1 ; i<=input.value ; i++ ){
        const pixels = document.createElement('div');
        pixels.classList.add('pixels')
        pixelSpace.appendChild(pixels);
        
        let r = Math.floor((Math.random() * 250) + 1); 
        let g = Math.floor((Math.random() * 250) + 1); 
        let b = Math.floor((Math.random() * 250) + 1); 

        let bgColor = "rgb(" + r + "," + g + "," + b + ")";

        pixelSpace.addEventListener('mousemove' , () => {

            pixels.addEventListener('mouseover', () => {
                pixels.style.backgroundColor = bgColor;
            })

        })

        clear.addEventListener('click', () => {
            pixels.style.backgroundColor = 'rgb(255,255,255)';
            
        })

       
    }


})
