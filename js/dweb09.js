function reproducir() { /* Dentro del script que hemos llamado "reproducir" insertaremos distintos métodos */
    /* alert("Hola Munndo");  alert es una funcion de una ventana emergente con un mensaje */
    /* console.log("Hola Mundo");  Imprime en la consola */
    /* console.log(document.getElementById("miaudio"));  document es una variable que almacena toda la estructura de la pagina */
    /* getElementbyId busca un elemento id en toda la estructura html */
    var miaudio = document.getElementById("miaudio"); /* Declaramos la variable "miaudio" */
    miaudio.play();
}
/* se sigue trabajando con la misma variable basados en el id html de audio */
function pausar() {
    var miaudio = document.getElementById("miaudio");
    miaudio.pause();
}

function detener() {
    var miaudio = document.getElementById("miaudio");
    miaudio.pause();
    miaudio.currentTime = 0;
    /* al no haber una funciòn directa para darle stop, se pausa y se reinicia el tiempo a 0
    dando el mismo resultado */
}

/* estructura de control del if y else aplicado */
function pausarDetener() {
    var miaudio = document.getElementById("miaudio");
    if (miaudio.paused) {
        miaudio.play();
    } else {
        miaudio.pause();
    }
}


