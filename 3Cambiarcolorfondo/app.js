/*Crea un algoritmo que utilice un arreglo con 10 colores. En la pantalla, muestra estos colores uno por uno al presionar un botón. Al hacer clic, se iterará a través del arreglo, mostrando el primer color. Con cada clic adicional, se avanzará al siguiente color en el arreglo. Una vez que se haya mostrado el décimo color, el contador de clics volverá a 1, lo que permitirá reiniciar el ciclo desde el primer color y continuar sucesivamente. Este algoritmo proporcionará una forma interactiva de explorar los colores del arreglo con cada clic en el botón.*/

const boton = document.querySelector('.boton');
const fondo = document.querySelector('body')

let con = 0;
let colores = ["#2471A3", "#9B59B6", "#F5B041", "#1D8348", "#1B2631", "#5B2C6F", "#F39C12", "#117864", "#5F6A6A", "#3498DB"];


boton.addEventListener("click", () =>{
   con++

   switch (con) {
    case 1:
        fondo.style.backgroundColor = colores[0];
        console.log("1.-",colores[0]);
    break;
    case 2:
        fondo.style.backgroundColor = colores[1];
        console.log("2.-",colores[1]);
    break;
    case 3:
        fondo.style.backgroundColor = colores[2];
        console.log("3.-",colores[2]);
    break;
    case 4:
        fondo.style.backgroundColor = colores[3];
        console.log("4.-",colores[3]);
    break;
    case 5:
        fondo.style.backgroundColor = colores[4];
        console.log("5.-",colores[4]);
    break;
    case 6:
        fondo.style.backgroundColor = colores[5];
        console.log("6.-",colores[5]);
    break;
    case 7:
        fondo.style.backgroundColor = colores[6];
        console.log("7.-",colores[6]);
    break;
    case 8:
        fondo.style.backgroundColor = colores[7];
        console.log("8.-",colores[7]);
    break;
    case 9:
        fondo.style.backgroundColor = colores[8];
        console.log("9.-",colores[8]);
    break;
    case 10:
        fondo.style.backgroundColor = colores[9];
        console.log("10.-",colores[9]);
        con=0;
    break;
    default:
        break;
   }


})


//RESPUESTA MAS RAPIDA CON MENOS CODIGO
/**const boton = document.querySelector('.boton');
const fondo = document.querySelector('body');

let con = 0;
let colores = ["#2471A3", "#9B59B6", "#F5B041", "#1D8348", "#1B2631", "#5B2C6F", "#F39C12", "#117864", "#5F6A6A", "#3498DB"];

boton.addEventListener("click", () => {
   con = (con + 1) % 10; // Reinicia a 0 cuando con alcanza 10
   fondo.style.backgroundColor = colores[con];
   console.log((con + 1) + ".-", colores[con]);
});
**/


