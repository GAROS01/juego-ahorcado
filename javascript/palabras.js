var inputPalabra = document.querySelector("#inputPalabra");
var btnAgregar = document.querySelector("#btnAgregar");

let palabrasSecretas = ["ORACLE", "CHALLENGE", "ALURA", "PROGRAMACION", "TECLADO", "MOUSE", "LAPTOP"];

//-permite al usuario agregar sus propias palabras
btnAgregar.addEventListener("click",function(event){
    event.preventDefault();
    palabrasSecretas.push(inputPalabra.value.toUpperCase());
    inputPalabra.value = "";
    inputPalabra.focus();

    console.log(palabrasSecretas);
})
