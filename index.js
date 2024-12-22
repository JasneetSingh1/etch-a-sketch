

const container = document.querySelector('.container');

function createGrid(number){
    
    document.querySelectorAll('.grid').forEach( n => n.remove());
    

    for(let i = 0; i < number * number; i++){
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid');
        const measure = (500 / number);
        gridItem.setAttribute('style', `width:${measure}px; height:${measure}px;`);
        console.log(gridItem);
        container.appendChild(gridItem);
    }
}


const button = document.querySelector('button');

button.addEventListener('click', () => {
    const newGrid = prompt('Insert number to create new grid, limit 100');
    createGrid(parseInt(newGrid));
})