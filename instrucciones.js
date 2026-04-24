let tesoro = Math.floor(Math.random() * 9);
let intentos = 3;


function verificar(posicion) {
    let celdas = document.getElementsByClassName("cell");

    // Evita seguir jugando si ya terminó
    if (intentos === 0) return;

     // Evita repetir clic en misma celda
    if (celdas[posicion].style.pointerEvents === "none") return;

    // se descuenta intento de 1 en 1
    intentos--;



    if (posicion === tesoro) {
        celdas[posicion].style.backgroundColor = "gold";
        celdas[posicion].textContent   ="💎";   
        document.getElementById("mensaje").textContent = "¡Felciidades encontraste el tesoro! ";
        desactivarTodo();
        
    } else {
        celdas[posicion].style.backgroundColor = "gray";
        celdas[posicion].textContent   ="❌";   
        celdas[posicion].style.pointerEvents = "none";

        if (intentos === 0) {
            document.getElementById("mensaje").textContent = "💀 ¡Uy! Lo siento perdiste";
            mostrarTesoro();
            desactivarTodo();
        } else {
            document.getElementById("mensaje").textContent = 
                "Sigue buscando... Intentos restantes: " + intentos;
        }
    }
}

function mostrarTesoro(){
    let celdas = document.getElementsByClassName("cell");
    celdas[tesoro].textContent = "💎";
    celdas[tesoro].style.backgroundColor = "gold";
}

function reiniciarJuego(){
    location.reload();
}