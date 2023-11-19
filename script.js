let nombre = prompt ("¿Cómo te llamas?")
alert ("¡Hola, " + nombre + "!" + " Bienvenido a nuestra página, esperamos que disfrutes tu visita.")

let aprobe = true
if (aprobe == true) {console.log("Felicidades!!!")}
else {console.log("Hay que hacer el curso de nuevo T.T")}


const variable1 = "Bienvenidos";
const variable2 = " a ";
let variable3 = "nuestra página";
let resultado = variable1 + variable2 + variable3;
console.log(resultado);

function suma (a, b) {return a + b;}
let total = suma (8, 5);
console.log(total);


//queria darle dinamismo a la foto de nosotros.html no me quiere funcionar//
const el = document.getElementById('poster')
const height = el.clientHeight
const width = el.clientWidth

el.addEventListener('mousemove', (evt) => {
    const {layerX, layerY} = evt

    const yRotation = (
        (layerX - width / 2) / width
    ) * 20

    const xRotation = (
        (layerY - height / 2) / height
    ) * 20

    const string = 
    perspective(500px)
    scale(1.1)
    rotateX(${xRotation}deg)
    rotateY(${yRotation}deg)

    el.style.transform = string
})

el.addEventListener('mouseout', () => {
    el.style.transform =
    perspective(500px)
    scale(1)
    rotateX(0)
    rotateY(0)
})