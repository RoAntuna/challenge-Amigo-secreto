// 1. Crear un array para almacenar los nombres
let amigos = [];

// 2. Implementa una función para agregar amigos
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar al array
    amigos.push(nombre);

    // Actualizar la lista en pantalla
    mostrarLista();

    // Limpiar el input
    input.value = "";
    input.focus();
}

// 3. Implementa una función para actualizar la lista de amigos
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpiar lista antes de actualizar

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = `${i + 1}. ${amigos[i]}`;
        lista.appendChild(li);
    }
}

// 4. Implementa una función para sortear los amigos
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agregue al menos un nombre antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
