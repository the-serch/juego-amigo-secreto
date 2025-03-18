// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; // Array (habitacion de los amigos)xD

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;

    if (nombreAmigo === '') {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(nombreAmigo);
        console.log(amigos);// para ver en la consola
        limpiarCaja();
        actualizarListaAmigos(); // llamar a la función para actualizar la lista
    }
}
// limpiar caja para ingresar nuevo texto
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function actualizarListaAmigos() {
    // obtener el elemento de la lista:
    let listaAmigos = document.getElementById('listaAmigos');

    // limpiar la lista existente:
    listaAmigos.innerHTML = "";

    // iterar sobre el arreglo amigos:
    for (let i = 0; i < amigos.length; i++) {
        // crear un nuevo elemento de lista (<li>):
        let li = document.createElement('li');
        li.textContent = amigos[i]; // Asignar el nombre del amigo al contenido del <li>

        // agregar el elemento <li> a la lista:
        listaAmigos.appendChild(li);
    }
}
function sortearAmigo() {
    // validar que haya amigos disponibles:
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear. Por favor, añade al menos un amigo.");
        return; // Detener la función si no hay amigos
    }

    // generar un índice aleatorio:
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // obtener el nombre sorteado:
    let nombreSorteado = amigos[indiceAleatorio];

    // mostrar el resultado:
    let resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `<li>El amigo secreto sorteado es: <strong>${nombreSorteado}</strong></li>`;
}