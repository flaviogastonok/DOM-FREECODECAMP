let lista = document.getElementById('lista');
let nuevoTopping = document.createElement('li');
nuevoTopping.innerText = 'Tomate';
nuevoTopping.classList.add('toppings');
lista.append(nuevoTopping);

let primerElemento = document.getElementById('primer-topping');

lista.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI'){
        console.log(e.target.innerText);
    };
});