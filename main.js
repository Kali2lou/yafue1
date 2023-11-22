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


const catalogo = [
    {
        id: 1,
        title: "Lorem",
        price: 10,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        category: "meat",
        image: "https://sofia.com.bo/wp-content/uploads/2021/06/paleta-cerdo-granel.jpg",
        rating: {
            rate: 3.9,
            count: 120,
        },
    },
    {
        id: 2,
        title: "Lorem",
        price: 10,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        category: "meat",
        image:
            "https://carnessantaana.cl/wp-content/uploads/2019/11/paleta-cerdo-carnes-santa-ana-2-2.png",
        rating: {
            rate: 4.1,
            count: 259,
        },
    },
    {
        id: 3,
        title: "Lorem",
        price: 10,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        category: "meat",
        image: "https://www.stock.com.py/images/thumbs/0185531.jpeg",
        rating: {
            rate: 4.7,
            count: 500,
        },
    },
    {
        id: 4,
        title: "Lorem",
        price: 10,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        category: "meat",
        image: "https://c8.alamy.com/compes/ed00rb/cerdo-crudo-vientre-tajadas-foto-de-estudio-ed00rb.jpg",
        rating: {
            rate: 2.1,
            count: 430,
        },
    },
    {
        id: 5,
        title:
            "Lorem",
        price: 10,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        category: "meat",
        image: "https://www.shutterstock.com/shutterstock/photos/386140060/display_1500/stock-photo-pork-belly-cut-on-the-white-background-isolated-386140060.jpg",
        rating: {
            rate: 4.6,
            count: 400,
        },
    },
    {
        id: 6,
        title: "Lorem",
        price: 10,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        category: "meat",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6VNlaGzUSEpvIqEGGjxtxJ0Kn_dhsdPwEpA&usqp=CAU",
        rating: {
            rate: 3.9,
            count: 70,
        },
    },
    {
        id: 7,
        title: "Lorem",
        price: 10,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        category: "meat",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbLXouIBleZFoS2hJV3k2Tf7mqkv8w3KWq5oyRkRXJjdAXfyfvwn0G-YmEswZW9oDZw60&usqp=CAU",
        rating: {
            rate: 3,
            count: 400,
        },
    },
    {
        id: 8,
        title: "Lorem",
        price: 10,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        category: "meat",
        image: "https://t2.uc.ltmcdn.com/es/posts/1/1/3/como_cocinar_un_lomo_de_cerdo_al_horno_42311_paso_1_600.jpg",
        rating: {
            rate: 1.9,
            count: 100,
        },
    },
    {
        id: 9,
        title: "Lorem",
        price: 10,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        category: "meat",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-WB7KqBFsuL8OlM_0XPN3Y4lmOtxwivsTHg&usqp=CAU",
        rating: {
            rate: 3.3,
            count: 203,
        },
    },
    {
        id: 10,
        title: "Lorem",
        price: 10,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        category: "meat",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN4xVSsw2hmNn6b8TSSG1nVVSinN5BPbtOVYdZqZBu6ihT3BD5uFOB67eo_LDx5Dew2p8&usqp=CAU",
        rating: {
            rate: 2.9,
            count: 470,
        },
    },
    {
        id: 11,
        title:
            "Lorem",
        price: 10,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        category: "meat",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpHhSkA9oThK_4qigBf2h157qHtzH4WybTFOfy0ljupgpC4VV-dfuHKMqdln0xERTgMXM&usqp=CAU",
        rating: {
            rate: 4.8,
            count: 319,
        },
    },
    {
        id: 12,
        title:
            "Lorem",
        price: 10,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        category: "meat",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-YJgXxBvr5vQe3pmFPz2oF5BB51u_f1jLw&usqp=CAU",
        rating: {
            rate: 4.8,
            count: 400,
        },
    },
    {
        id: 13,
        title: "Lorem",
        price: 10,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        category: "meat",
        image: "data:image/jpeg;base64,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",
        rating: {
            rate: 2.9,
            count: 250,
        },
    },
    {
        id: 14,
        title:
            "Lorem",
        price: 10,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        category: "meat",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgLc29kfXHwLeGYc5kNHSDBQQulHYag3OlPQ&usqp=CAU",
        rating: {
            rate: 2.2,
            count: 140,
        },
    },
    {
        id: 15,
        title: "Lorem",
        price: 10,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        category: "meat",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm86CZ7PBU1WvLVsUPOzgi5lb_3Wf_b4VwVQ&usqp=CAU",
        rating: {
            rate: 2.6,
            count: 235,
        },
    },
    {
        id: 16,
        title:
            "Lorem",
        price: 10,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        category: "meat",
        image: "data:image/jpeg;base64,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",
        rating: {
            rate: 2.9,
            count: 340,
        },
    },
    {
        id: 17,
        title: "Lorem",
        price: 10,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        category: "meat",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaRur7UcX21RsbR5sGZGnl4171ibEobQHmozuEBvN5DFW55Xd3xODEKCpLeGK4e5c0DgE&usqp=CAU",
        rating: {
            rate: 3.8,
            count: 679,
        },
    },
    {
        id: 18,
        title: "Lorem",
        price: 10,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        category: "meat",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1LzV6XDP1mDRqOyqWqN27rsVCDZgu4tiwbQ&usqp=CAU",
        rating: {
            rate: 4.7,
            count: 130,
        },
    },
    {
        id: 19,
        title: "Lorem",
        price: 10,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        category: "meat",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST2mEvVoJBOL-ecH7lQWPgouSyXqGiZImGvw&usqp=CAU",
        rating: {
            rate: 4.5,
            count: 146,
        },
    },
    {
        id: 20,
        title: "Lorem",
        price: 10,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        category: "meat",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzyIN0yv_W9OEb6riCNyJKi-5uk3uP854FZotRWxp3damHE5RB5Ya-q3xKHznfihq3Q-c&usqp=CAU",
        rating: {
            rate: 3.6,
            count: 145,
        },
    },
];

// tarjeta almacena el div de nuestro html 
let tarjeta = document.getElementById("card-ejemplo");

catalogo.map((producto) => {

    // a nuestra variable tarjeta lo que vamos a hacer es insertarle a travez del innerHTML el codigo que se encuentra entre los backsticks
    tarjeta.innerHTML += `
    <div class="col-md-5 mb-5">
        <div class="card h-100 text-center p-4" key= ${producto.id} >
            <img src= ${producto.image} className="card-img-top" alt= ${producto.title} height="250px" />
            <div class="card-body">
                <h5 class="card-title mb-0"> ${producto.title.substring(0,40)}...</h5>
                <p class="card-title mb-0"> ${producto.description.substring(0,50)}...</p>
                <p class="card-text lead fw-bold">$ ${producto.price} </p>
            </div>
            <a href="#" class="btn btn-outline-dark"> Añadir al Carrito </a>
        </div>
    </div> 
    `
});


// //queria darle dinamismo a la foto de nosotros.html no me quiere funcionar//
// const elementos = document.querySelectorAll('.poster-img');
//  elementos.forEach((el) => {
//  const height = el.clientHeight;
//  const width = el.clientWidth;

//  el.addEventListener('mousemove', (evt) => {
//      const {layerX, layerY} = evt;

//     //rotacion horizontal//
//     const yRotation = (
//        (layerX - width / 2) / width
//      ) * 20;
//      //rotacion vertical//
//     const xRotation = (
//         (layerY - height / 2) / height
//     ) * 20;

//     //cadena de texto//
//      const string = `
//      perspective(500px)
//     scale(1.1)
//     rotateX(${xRotation}deg)
//      rotateY(${yRotation}deg)`;

//     el.style.transform = string;
//  });

// //cuando el cursor sale del elemento resetea las animaciones//
// el.addEventListener('mouseout', () => {
//     el.style.transform =`
//     perspective(500px)
//     scale(1)
//     rotateX(0)
//   rotateY(0)`;
// });
//  });