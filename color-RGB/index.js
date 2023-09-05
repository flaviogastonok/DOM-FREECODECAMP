const parrafo = document.querySelectorAll('p');
const contenedorPrincipal = document.querySelector('.contenedorPrincipal');

const inputs = document.querySelectorAll('input');

document.body.style.backgroundColor = `rgb(${inputs[0].value},${inputs[1].value},${inputs[2].value})`;

parrafo.forEach((p) => {
    p.innerText = p.previousElementSibling.value;
})

const cambiarColor = () =>{
    let colorRojo = document.querySelector('#texto-rojo').innerText;
    let colorVerde = document.querySelector('#texto-verde').innerText;
    let colorAzul = document.querySelector('#texto-azul').innerText;
    
    document.body.style.backgroundColor = `rgb(${colorRojo},${colorVerde},${colorAzul})`
}

inputs.forEach((e) => {
    e.addEventListener('change', () => {
        e.nextElementSibling.innerText = e.value;
        cambiarColor();
    });
});
