const boton = document.querySelector('.boton');
let fondo = document.querySelector('body');
let parrafo = document.querySelector('.con_parrafo')
let con = 2;


boton.addEventListener("click", () =>{

    if(con % 2 === 0){
        fondo.classList.add('fondo_black');
        parrafo.classList.add('parrafo_white');
    } else{
        fondo.classList.remove('fondo_black');
        parrafo.classList.remove('parrafo_white');
    }
    con++;
});