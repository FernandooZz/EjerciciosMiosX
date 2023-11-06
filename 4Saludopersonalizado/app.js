const fechaActual = new Date();
const hora = fechaActual.getHours();
const dia = document.querySelector('.dia');
const tarde = document.querySelector('.tarde');
const noche = document.querySelector('.noche');

let ban = false;

if(hora>=0 && hora<=12){
    ban = true;
    dia.classList.add('activo');
} else if(hora>=12 && hora<=18){
    ban = true;
    tarde.classList.add('activo');
} else if(hora>=18 && hora<=23){
    ban = true;
    noche.classList.add('activo');
}