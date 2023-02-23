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

// Función para crear matriz
function createMatrix(width, height) {
    
    const matrix = [];

    // Mintras la altura especificada por parámetro no sea 0,
    // añade un nuevo array de longitud especificada por parámetro
    // con todos los valores por defecto a 0
    while(height != 0){
        matrix.push(new Array(width).fill(0))

        height--
    }
}

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

// Función para copiar los valores del tetromino en posesión del jugador en el tablero en su posición específica 
function merge(arena, player){

    // Iterar cada fila de la matriz del jugador
    player.matrix.forEach((row, y) => {

        // Iterar cada valor de la fila del jugador
        row.forEach((value, x) => {

            // Si el valor de la estructura del tetromino es 0, no se renderiza, sino
            // se copia los valores del tetromino en su posición actual al tablero
            if(value !== 0){

                arena[y + player.pos.y][x + player.pos.x] = value;
            }
        })
    })
}

// Desciende la posición de la pieza en 1 manualmente haciendo reset del tiempo de ciclo a 0
function playerDrop(){
    player.pos.y++;
    dropCounter = 0;
}

// Función encargada de actualizar el estado del tablero

let dropCounter = 0; // Acumula la diferencia de tiempo en cada ciclo
let dropInterval = 1000;
let lastTime = 0; // Último registro en tiempo de ciclo anterior

function update(time = 0){ // time almacena el tiempo total transcurrido desde la ejecución del programa

    const diffTime = time - lastTime;
    lastTime = time;

    dropCounter += diffTime;
    if(dropCounter > dropInterval){

        // Movimiento vertical descendente cada 1s
        playerDrop();
    }

    draw();

    // Informa al navegador de un animación en curso, solicitando un render nuevo de la página.
    // Se debe invocar dentro de la misma función callback que recibe por parámetro para que sea recursivo.
    requestAnimationFrame(update);

}

// Creación de tablero/matriz del juego
const arena = createMatrix(12, 20);

// console.log(arena)
// console.table(arena)

// Objeto player (tetromino/matriz en posesión del jugador)
const player = {
    pos: {x: 5, y: 0},
    matrix: matrix,
}

document.addEventListener('keydown', event => {

    console.log(event);
    //
    if(event.keyCode === 37){
        player.pos.x--;
    }
    else if(event.keyCode === 39){
        player.pos.x++;
    }
    else if(event.keyCode === 40){
        playerDrop();
    }
});

update();