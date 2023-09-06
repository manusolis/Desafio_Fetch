function enviarFormulario() {

const Nombre = document.getElementById("username").value;

const Apellido = document.getElementById("lastname").value;

const Nacimiento = document.getElementById("nacimiento").value;



const formData = {
    nombre: Nombre,
    apellido: Apellido,
    fechaNacimiento: Nacimiento
};

fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST' ,
    headers: {
        'Content-Type': 'application/json'
    },

    body: JSON.stringify(formData)
})

.then(response => response.json())
.then(data => {
    console.log(data);
})

.catch(error => {
    console.error('Error', error);
});

}