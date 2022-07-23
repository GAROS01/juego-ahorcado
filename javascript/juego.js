var btnIniciar = document.querySelector("#btnIniciar");
var btnReiniciar = document.querySelector("#btnReiniciar");

var juegoIniciado = false;
var palabraAhorcado;
var indices = [];
var arrayPalabra;
var arrayLetraIngresada = [];
var arrayLetrasCorrectas = [];
var arrayLetrasIncorrectas = [];
var letrasUnicas = [];

// array sin letras repetidas
function sinLetrasRepetidas(){
    for (let i=0;i<palabraAhorcado.length;i++){
        if(!letrasUnicas.includes(palabraAhorcado[i])){
            letrasUnicas.push(palabraAhorcado[i])
        }
    }
}

// selecciona una palabra del array palabras Secretas
function seleccionarPalabra(){
    let indiceArray = Math.floor(Math.random()*palabrasSecretas.length);
    palabraAhorcado = palabrasSecretas[indiceArray];
    palabrasSecretas.splice(indiceArray,1);
    return palabraAhorcado;
}

// Array con la palabra seleccionada, para usar de referencia
function crearArrayPalabra(palabra){
    let separada = palabra.split("");
    arrayPalabra = separada;
}

// Boton Inicio
btnIniciar.addEventListener("click",function(event){
    event.preventDefault();
    pincel.clearRect(0, 0, pantalla.width, pantalla.height);
    iniciarJuego();
})

// Boton Reinicio
btnReiniciar.addEventListener("click",function(event){
    event.preventDefault();
    pincel.clearRect(0, 0, pantalla.width, pantalla.height);
    iniciarJuego();
})

// Inicio del Juego
function iniciarJuego(){
    pincel.clearRect(0, 0, pantalla.width, pantalla.height);
    palos();
    seleccionarPalabra();
    console.log(palabraAhorcado);
    crearArrayPalabra(palabraAhorcado);
    dibujarGuiones();
    sinLetrasRepetidas();
    juegoIniciado = true;
    arrayLetraIngresada = [];
    arrayLetrasCorrectas = [];
    arrayLetrasIncorrectas = [];
}

/* genera un array con los indices de las letras ingresadas 
por los usuarios, esto permite que si hay letras repetidas
dentro de la palabra original pueda dibujar todas
las instancias de esa letra */
function buscarIndices(){
    if (juegoIniciado){
        let indiceBuscado = arrayPalabra.indexOf(arrayLetraIngresada[0]);

        while (indiceBuscado != -1) { 
            indices.push(indiceBuscado);
            indiceBuscado = arrayPalabra.indexOf(arrayLetraIngresada[0], indiceBuscado + 1);
        }
    }
}

//  Dibuja las lineas para poner las letras
function dibujarGuiones(){
    let inicioX = 550;
    let inicioY = 610;
    let contador = 0;
    let nLetras = palabraAhorcado.length;
    while (contador<nLetras){
        pincel.fillStyle = "black";
        pincel.fillRect(inicioX+(40*contador),inicioY,30,4);
        contador++;
    }
}

// posiciona la letra correcta
function dibujarletras(arrOrden){
    let inicioX = 552;
    let inicioY = 600;
        for(let i=0;i<arrOrden.length;i++){
            pincel.fillStyle = "black";
            pincel.font = "40px Roboto";
            pincel.fillText(arrayLetraIngresada[0],inicioX+(40*arrOrden[i]),inicioY);
        }
        indices = [];
}

/* evento para capturar las teclas del usuario, en el cual comprueba si son letras 
y no caracteres especiales o numerosalmacena las letras en uno de dos arrays, de 
acuerdo a si la letra esta o no dentro de la palabra sorteada. */
document.addEventListener("keyup", function(event){
    arrayLetraIngresada = [];
    let letra = event.key.toUpperCase();
    let codigo = letra.charCodeAt();
    if (juegoIniciado){
        if(codigo>64 && codigo<91){
            arrayLetraIngresada.push(letra);
            buscarIndices();
            dibujarletras(indices);
            let comparador = arrayLetrasIncorrectas.length;
            if(arrayPalabra.includes(letra)){
                if(!arrayLetrasCorrectas.includes(letra)){
                    arrayLetrasCorrectas.push(letra)
                }
            }else if(!arrayLetrasIncorrectas.includes(letra)){
                arrayLetrasIncorrectas.push(letra)
            }
            if(comparador<arrayLetrasIncorrectas.length){
                dibujarLetrasErroneas(arrayLetrasIncorrectas) 
            }
            dibujarAhorcado();
        }
    verificarFinGanador();
    verificarFinPerdedor();
    } 
});
// letras incorrectas
function dibujarLetrasErroneas(letrasIncorrectas){
    let inicioX = 500;
    let inicioY = 200;
    pincel.fillStyle = "black";
    pincel.font = "40px Roboto";
    pincel.fillText("Letras Incorrectas " + letrasIncorrectas.toString(),inicioX,inicioY);
}

// veo si termino el juego con resultado positivo
function verificarFinGanador(){
    let palabraOriginalsinLetrasRepetidas = letrasUnicas.sort().toString();
    let letrasErroneasIngresadas = arrayLetrasCorrectas.sort().toString();

    console.log(palabraOriginalsinLetrasRepetidas + "  " + letrasErroneasIngresadas);
    if(palabraOriginalsinLetrasRepetidas===letrasErroneasIngresadas){
        pincel.fillStyle = "green";
        pincel.font = "50px Roboto";
        pincel.fillText("Felicidades, Ganaste!!!",450,400);
        juegoIniciado = false;
        btnReiniciar.focus();
        letrasUnicas = [];
    }
}

// veo si termino el juego con resultado negativo
function verificarFinPerdedor(){
    if(arrayLetrasIncorrectas.length>5){
        pincel.fillStyle = "red";
        pincel.font = "50px Roboto";
        pincel.fillText("Fin del juego!!! era " + palabraAhorcado,450,400);
        juegoIniciado = false;
        btnReiniciar.focus();
        letrasUnicas = [];
    }
}

// dibuja la figura segun los errores
function dibujarAhorcado(){
    let contador = arrayLetrasIncorrectas.length;
    if (contador===1){
        cabeza()
    }else if(contador===2){
        cuerpo()
    }else if(contador===3){
        brazoIzquierdo()
    }else if(contador===4){
        brazoDerecho()
    }else if(contador===5){
        piernaIzquierda()
    }else if(contador===6){
        piernaDerecha()
    }
}
