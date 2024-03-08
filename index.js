function updateClock() {
    var now = new Date();
    var date = now.toLocaleDateString();
    var time = now.toLocaleTimeString();
    document.getElementById('clock').innerHTML = date + ' ' + time;
}

function toggleColor() {
    var body = document.body;
    body.classList.toggle('dark-mode');
}

document.getElementById('color-toggle').addEventListener('click', toggleColor);

updateClock(); // Actualizar reloj al cargar la página
setInterval(updateClock, 1000); // Actualizar reloj cada segundo