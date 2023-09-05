const input = document.querySelector('.contenedor .inputs #nombre-tarea');
const contenedorTareas = document.querySelector('.contenedor .lista-de-tareas');
let index = 0;

document.getElementById('boton-agregar-tarea').addEventListener('click', (e) => {
    
    if(input.value != ''){
        index = index + 1;
        let li = document.createElement('li');
        li.classList.add('tarea')
        li.innerHTML = `
            <p>${input.value}</p>
        `
        contenedorTareas.append(li);
    }
    input.value = '';
});

contenedorTareas.addEventListener('click', (e) => {
    if(e.target.tagName === 'P'){
        e.target.classList.toggle('completada');
    }
});

document.getElementById('btn-limpiar').addEventListener('click', (e) => {
    contenedorTareas.innerHTML = '';
    index = 0;
})