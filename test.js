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
content.append(pixelSpace);

const input = document.querySelector('.input');


form.addEventListener('submit', (e) => {

    e.preventDefault();



    for( i = 1 ; i<=input.value**2 ; i++ ){
        const pixels = document.createElement('div');
        pixels.classList.add('pixels')
        pixelSpace.appendChild(pixels);

        pixelSpace.classList.add('grid');
        pixelSpace.style.gridTemplateColumns = `repeat(${input.value}, 1fr)`
        pixelSpace.style.gridTemplateRows = `repeat(${input.value}, 1fr)`
        

        randomColor.addEventListener('click',() => {

            let r = Math.floor((Math.random() * 250) + 1); 
            let g = Math.floor((Math.random() * 250) + 1); 
            let b = Math.floor((Math.random() * 250) + 1); 
    
            let bgColor = "rgb(" + r + "," + g + "," + b + ")";

            pixelSpace.addEventListener('click' , () => {

                pixels.addEventListener('mouseover', () => {
                    pixels.style.backgroundColor = bgColor;

                    form.addEventListener('click' , () => {
                        pixels.style.backgroundColor = '#ffffff';
                    })
                })

            })

        })

        favColor.addEventListener('click' , () => {

            pixelSpace.addEventListener('click' , () => {

                pixels.addEventListener('mouseover', () => {
                    pixels.style.backgroundColor = favColor.value;
                    
                    form.addEventListener('click' , () => {
                        pixels.style.backgroundColor = '#ffffff';
                    })
                })

            })

        })

        erase.addEventListener('click' , () => {

                pixels.addEventListener('mouseover', () => {
                    pixels.style.backgroundColor = 'rgb(255,255,255)';
                })

        })

        clear.addEventListener('click', () => {
            pixels.style.backgroundColor = 'rgb(255,255,255)';
            
        })
   
    }
})
