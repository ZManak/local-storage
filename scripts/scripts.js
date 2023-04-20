let boton = document.querySelector("button");
boton.addEventListener('click', guardarEnLocal)

const arrObj = [];

function guardarEnLocal (event) {

    event.preventDefault()

    let name = document.querySelector("#nombre").value
    let email = document.querySelector("#email").value
    let mensaje = document.querySelector("#mensaje").value
    let imagen = document.querySelector("#imagen").value

/*const data = [name, email, mensaje, imagen]
localStorage.setItem("data", JSON.stringify(data));*/

localStorage.setItem(
    "data",
    JSON.stringify({
      nombre: name,
      correo: email,
      texto: mensaje,
      img: imagen
    })
  );
    let user = JSON.parse(localStorage.getItem("data"));
    arrObj.push(user);
}

