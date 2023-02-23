
## Desarrollo Web Entorno Cliente

### JavaScript Tetris Game

Práctica de 2º Trimestre - Dessarrollar un juego para aplicar conceptos avanzados, estructura de datos, eventos de teclado y manipulación del DOM.

Guía de desarrollo aplicada:

- ### Setup

Crear un archivo HTML que incluya un elemento **canvas** donde se jugará el juego. También tendrá que incluir un archivo JavaScript para mantener la lógica del juego.

- ### Definir los objetos del juego

El siguiente paso es definir los objetos que se utilizarán en el juego. Se deberán definir un objeto "bloque" que representará las piezas que caen, así como un objeto "tablero" que representará el tablero de juego.

- ### Dibujar el tablero/cuadrícula del juego

Una vez definidos los objetos del juego, se dibuja el tablero de juego en el elemento canvas. Dibujando una cuadrícula de cuadrados que representará el tablero de juego.

- ### Dibujar la pieza en movimiento del jugador

A continuación, se dibuja el bloque que cae en el tablero de juego. Para ello, definimos la forma y la posición del bloque y, a continuación, dibujarlo en el canvas.

- ### Añadir lógica del juego

Ahora que ya están los objetos del juego y las funciones de dibujo, se añade la lógica del juego. Esto implica manejar la entrada del usuario (como las teclas de flecha para mover el bloque) y actualizar el estado del juego (como mover el bloque una fila hacia abajo en cada fotograma).

- ### Añadir una condición de 'Game Over'

Finalmente se agrega una condición que evalua el estado de final de juego, cuando una pieza alcanza la parte superior del trablero.

- ### Ejecutar el juego

Con toda la lógica del juego configurada, se inicia el bucle del juego llamando a la función encargada de actualizar el estado del tablero 'update()' en un intervalo regular (usando setInterval() o requestAnimationFrame()), y manejar la condición 'Game Over' para terminar el juego.