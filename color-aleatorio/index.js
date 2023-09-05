const boton = document.querySelector('#boton');
// const bodi = document.querySelector('body');
let caracteresHexa = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

boton.addEventListener('click', (e) => {
    let colorAleatorio = '#';
    for(let i = 0; i < 6; i++){
        colorAleatorio = colorAleatorio + caracteresHexa[Math.floor(Math.random() * 15)];
    }
    document.querySelector('#color').innerText = colorAleatorio;
    document.body.style.backgroundColor = colorAleatorio;
    document.querySelector('#color').style.color = colorAleatorio;
});

