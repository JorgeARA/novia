const preguntaBtn = document.querySelector('#preguntaBtn');
const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const mensajeDiv = document.querySelector('#mensaje');
const nombreInput = document.getElementById('nombreInput');

preguntaBtn.addEventListener('click', function () {
    const nombre = nombreInput.value;

    if (nombre) {
        mensajeDiv.textContent = `¡Hola ${nombre}! ¿Quieres ser mi novia?`;
        preguntaBtn.style.display = 'none'; // Oculta el botón de pregunta
        yesBtn.style.display = 'inline-block'; // Muestra el botón de "Sí"
        noBtn.style.display = 'inline-block'; // Muestra el botón de "No"
    } else {
        alert('Por favor, introduce tu nombre.');
    }
});

yesBtn.addEventListener('click', function () {
    mensajeDiv.textContent = '¡Sabía que ibas a decir que sí! Oh yeahh';
});

noBtn.addEventListener('mouseover', function () {
    const randomX = Math.random() * 60;
    const randomY = Math.random() * 60;
    noBtn.style.setProperty('transform', `translate(${randomX}vw, ${randomY}vh)`);
});
