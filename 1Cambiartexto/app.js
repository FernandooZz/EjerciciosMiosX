/*crea un algoritmo donde tengas un boton y dos parrafos separados por diferentes etiquetas <p> donde primero en pantalla se mostrara el primer parrafo luego al tu dar click al boton este parrafo se actualizara el segundo, si vueles a dar click este volvera al parrafo inicial, luego si das de nuevo vuelve al segundo parrafo y asi sucesivamente*/
const btn = document.querySelector('.boton')
const parrafo1 = document.querySelector('.prrf1')
const parrafo2 = document.querySelector('.prrf2')
let con = 2;

btn.addEventListener('click', function(e){

        console.log(con)

        if(con % 2 === 0){
            parrafo1.classList.remove('activar');
            parrafo1.classList.add('eliminar'); 
            parrafo2.classList.remove('eliminar');
            parrafo2.classList.add('activar');
             
        }else{
            parrafo1.classList.add('activar');
            parrafo1.classList.remove('eliminar'); 
            parrafo2.classList.add('eliminar');
            parrafo2.classList.remove('activar');
        }
        con++;        
}); 





