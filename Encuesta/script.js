let votosMatematicas = 0;
let votosEspanol = 0;
let votosIngles = 0;
let totalVotos = 0;

function votar(opcion) {
    if (opcion === "matematicas") {
        votosMatematicas++;
        document.getElementById("votos-matematicas").innerText = votosMatematicas;
    } 
    else if (opcion === "espanol") {
        votosEspanol++;
        document.getElementById("votos-espanol").innerText = votosEspanol;
    } 
    else if (opcion === "ingles") {
        votosIngles++;
        document.getElementById("votos-ingles").innerText = votosIngles;
    }

    totalVotos++;

    alert("¡Gracias por tu voto!");

    if (totalVotos % 5 === 0) {
        console.log("Total de votos acumulados: " + totalVotos);
    }
}