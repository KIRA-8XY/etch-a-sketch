const container = document.querySelector('#container')

function generateGrid(size){
    for (let i=0; i < size; i++){
        for (let j=0;j< size; j++){
            const square = document.createElement('div');
            container.appendChild(square)

            square.addEventListener('mouseenter', ()=>{
                square.classList.add('hovered')
            })
        }
    }
}

generateGrid(16);


const btn = document.querySelector('button');
let howManyDivs;

btn.addEventListener('click', () => {
    const userInput = prompt('How many number of squares per side for the new grid');
    if (userInput === null) return

    const size = Number(userInput)
    if (!Number.isInteger(size) || size < 1 || size > 100){
        alert('Enter a whole number from 1 to 100.');
        return;
    }

    container.replaceChildren();

    generateGrid(size);
})


