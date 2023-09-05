const cita = document.querySelector('.cita');
const autor = document.querySelector('.autor');
const boton = document.querySelector('.boton');

cita.innerText = `"${citas[0].texto}"`;
autor.innerText = citas[0].autor;

const citasAleatorias = () => {
    let numAleatorio = Math.floor(citas.length * Math.random())
    cita.innerText = `"${citas[numAleatorio].texto}"`;
    autor.innerText = citas[numAleatorio].autor;
};
boton.addEventListener('click', citasAleatorias);