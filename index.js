

const container = document.querySelector('.container');
const button = document.querySelector('button');

function createGrid(number){
    document.querySelectorAll('.grid').forEach( n => n.remove());
    
    for(let i = 0; i < number * number; i++){
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid');
        const measure = (500 / number);
        gridItem.setAttribute('style', `width:${measure}px; height:${measure}px;`);
        container.appendChild(gridItem);
    }

    sketch()
}


button.addEventListener('click', () => {
    const newGrid = prompt('Insert number to create new grid, limit 100');
    createGrid(parseInt(newGrid));
    
})


function sketch(){
    const grid = document.querySelectorAll('.grid');

    grid.forEach(function(elem){
        elem.addEventListener('mouseenter', function(){
            elem.style.backgroundColor = 'black';
        })
    })
}

sketch()