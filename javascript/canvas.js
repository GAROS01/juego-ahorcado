var pantalla = document.querySelector("#ahorcado");
var pincel = pantalla.getContext("2d");


function palos(){
    pincel.fillStyle = "brown"
    pincel.beginPath();
    pincel.moveTo(100,600);
    pincel.lineTo(50,620);
    pincel.lineTo(150,620);
    pincel.fill();
    pincel.fillRect(95,205,10,400);
    pincel.fillRect(95,205,200,10);
    pincel.fillRect(295,205,10,50);
}

function cabeza(){
    pincel.fillStyle = "blue"
    pincel.beginPath();
    pincel.arc(300,295,40,0,2*3.14);
    pincel.fill();
}

function cuerpo(){
    pincel.fillStyle = "orange"
    pincel.fillRect(295,335,10,130);
}

function brazoIzquierdo(){
    pincel.fillStyle = "red"
    pincel.beginPath();
    pincel.moveTo(295,355);
    pincel.lineTo(220,325);
    pincel.lineTo(220,335);
    pincel.lineTo(295,365);
    pincel.fill();
}

function brazoDerecho(){
    pincel.fillStyle = "yellow"
    pincel.beginPath();
    pincel.moveTo(305,355);
    pincel.lineTo(380,325);
    pincel.lineTo(380,335);
    pincel.lineTo(305,365);
    pincel.fill();
}

function piernaIzquierda(){
    pincel.fillStyle = "green"
    pincel.beginPath();
    pincel.moveTo(295,455);
    pincel.lineTo(210,505);
    pincel.lineTo(210,515);
    pincel.lineTo(295,465);
    pincel.fill();
}

function piernaDerecha(){
    pincel.fillStyle = "black"
    pincel.beginPath();
    pincel.moveTo(305,455);
    pincel.lineTo(390,505);
    pincel.lineTo(390,515);
    pincel.lineTo(305,465);
    pincel.fill();
}