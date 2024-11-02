

function Persona(nombre, apellido, cedula, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.cedula = cedula;
    this.edad = edad;
}

let listaPersonas = [];

function GuardarPersona() {
    listaPersonas.push(new Persona(

        document.getElementById("Nombre").value,
        document.getElementById("Apellido").value,
        document.getElementById("Cedula").value,
        document.getElementById("Edad").value
    ));
    mostrarLista();
}

function mostrarLista() {
    var todo = document.getElementById("llenar");
    todo.innerHTML = "";
    listaPersonas.forEach((pers,index)=> {
        todo.innerHTML += `
         <tr>
                    <td>${pers.nombre}</td>
                    <td>${pers.apellido}</td>
                    <td>${pers.cedula}</td>
                    <td>${pers.edad}</td>
                    <td>
                        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                            <button onclick="Eliminar(${index})" id="Eliminar" type="button" class="btn btn-danger">Eliminar</button >
                            <button onclick="Editar(${index})" id="Editar" type="button" class="btn btn-warning">Editar</button>
                        </div>
                    </td>
                </tr>
                `;
            });
           
        }
