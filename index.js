
const container = document.querySelector('container');
function createGrid(number){
    
    for(let i = 0; i < number; i++){
        const gridItem = document.createElement('div');
        container.appendChild(gridItem);
    }
}