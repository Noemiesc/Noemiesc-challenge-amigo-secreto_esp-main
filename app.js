// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
//  Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    //Validamos que el campo no este vacio  

    if (nombreAmigo ===""){
        alert ("Inserta un nombre por favor");
        return;

    }
//Agregamos el nombre al array
    amigos.push(nombreAmigo);

//Actualizamos la lista visual
    actualizarLista();

    //Limpiar los ca pos de  entrada
    inputAmigo.value = "";
    inputAmigo.focus();

}

function actualizarLista(){
    const listaAmigosUL = document.getElementById("listaAmigos")
    listaAmigosUL.innerHTML ="";

    amigos.forEach(amigo => {
        const li =document.createElement("li");
        li.textContent= amigo;
        listaAmigosUL.appendChild(li);

    });
}
function sortearAmigo(){
    if (amigos.length === 0){
        alert("No hay ningun amigo para sortear, agrega un nombre");
        return
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    const resultadoUL = document.getElementById("resultado");
    resultadoUL.innerHTML = `<li>${amigoSorteado}</li>`;

  
}

document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById("btnAdicionar").addEventListener("click", agregarAmigo)
    document.getElementById("btnSortear").addEventListener("click", sortearAmigo);
    
});
