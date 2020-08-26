// const parrafos = document.getElementsByTagName("p")
// console.log(parrafos)

// const elementosVerdes = document.getElementsByClassName("verde")
// console.log(elementosVerdes)

// const primerElementoBordeRojo = document.querySelector("#borde-rojo")
// console.log(primerElementoBordeRojo)



const claseVerde = document.querySelector(".verde")
claseVerde.classList.remove("verde")
console.log(claseVerde)

const claseRojo = document.querySelector(".rojo")
claseRojo.classList.add("rosa")
console.log(claseRojo)

const claseRosa = document.querySelector(".rosa")
console.log(claseRosa.classList.toggle("rosa"))

const claseAmarillo = document.querySelector(".amarillo")
console.log(claseAmarillo.classList.contains(".rojo"))
