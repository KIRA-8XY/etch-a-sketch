const container = document.querySelector('#container')

for (let i=0; i < 16; i++){
    for (let j=0;j< 16; j++){
        const square = document.createElement('div');
        container.appendChild(square)

        square.addEventListener('mouseenter', ()=>{
            square.classList.add('hovered')
        })
    }
}

const btn = document.querySelector('button');
let howManyDivs;

btn.addEventListener('click', () => {
    const userInput = prompt('How many number of squares per side for the new grid');
    if (userInput !== null){
        howManyDivs = userInput;
    }
})

