const botones = document.querySelector('.botones');
const detener = document.querySelector('.botones .detener');
const iniciar = document.querySelector('.botones .parar-continuar');
let seg = document.querySelector('.display-cronometro .seg');
let min = document.querySelector('.display-cronometro .min');
let horas = document.querySelector('.display-cronometro .horas');
let intervalID;


botones.addEventListener('click' , (e) => {
    if(e.target.tagName === 'BUTTON'){
        if(e.target.innerText === 'Iniciar'){
            cronometro();
            iniciar.style.display = 'none';
            detener.style.display = 'block';
        }
        if(e.target.innerText === 'Reiniciar'){
            clearInterval(intervalID);
            seg.innerText = '00';
            min.innerText = '00';
            horas.innerText = '00';
            detener.style.display = 'none';
            iniciar.style.display = 'block';
        }
        if(e.target.innerText === 'Detener'){
            clearInterval(intervalID);
            detener.style.display = 'none';
            iniciar.style.display = 'block';
        };
    };
});

const cronometro = () => {
    intervalID = setInterval(
        () => {
        Number(seg.innerText) < 9 ? seg.innerText = '0' + (Number(seg.innerText) + 1) : seg.innerText = Number(seg.innerText) + 1;
        if(Number(seg.innerText) == 60){
            seg.innerText = '0'+0;
            min.innerText < 9 ? min.innerText = '0'+(Number(min.innerText) + 1) : min.innerText = Number(min.innerText) + 1;
        }
        if(Number(min.innerText) == 60){
            min.innerText = '0' + 0;
            horas.innerText < 9 ? horas.innerText = '0'+(Number(horas.innerText) + 1) : horas.innerText = Number(horas.innerText) + 1;
        }
        },1000
    )
}