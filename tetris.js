const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');

// Global scale up
context.scale(20,20);

const matrix = [

    // Tetromino T
    [0, 0, 0], // Fila extra para poder identificar
    [1, 1, 1], // el centro de la pieza al rotar
    [0, 1, 0],

];

// Función de render general
function draw(){

    // Limpiar/actualizar contenido
    context.fillStyle = '#000';
    context.fillRect(0, 0, canvas.width, canvas.height);

    drawMatrix(player.matrix, player.pos);

}

// Offset :Object {x: int, y: int} agregar valores de posición a las piezas
function drawMatrix(matrix, offset){

    // Iterar la matriz para renderizar los valores
    matrix.forEach((row, y) => {
    
        row.forEach((value, x) => {
    
            // Filas con valor 0 no render
            if(value !== 0){
                 context.fillStyle = 'red';
                 context.fillRect(x + offset.x , y + offset.y, 1, 1);
            }
        })
    });

};

// Función encargada de actualizar el estado del tablero
function update(){
    draw();
    requestAnimationFrame(update);
}

// Objeto player 
const player = {
    pos: {x: 5, y: 5},
    matrix: matrix,
}

update();

