

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
                            <button onclick="alertasss(${index})" id="Editar" type="button" class="btn btn-warning">Editar</button>
                        </div>
                    </td>
                </tr>
                `;
            });
           
        }


        function Eliminar(index){
            listaPersonas.splice(index, 1);
            mostrarLista();
        }

        function Editar(index){

            listaPersonas.splice(index, 1, { nombre:document.getElementById("nombreEd").value, apellido:document.getElementById("apellidoEd").value ,cedula: document.getElementById("cedulaEd").value , edad:document.getElementById("edadEd").value  });
           mostrarLista();
       }

       function alertasss(id){
       Swal.fire({
        title: 'Ingrese sus datos',
        html: `
            <input id="nombreEd" class="swal2-input" placeholder="Nombre">
            <input id="apellidoEd" class="swal2-input" placeholder="Apellido">
            <input id="cedulaEd" class="swal2-input" placeholder="Cédula">
            <input id="edadEd" class="swal2-input" placeholder="Edad">
        `,
        title: "Quieres Realizar Cambios",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Guardar",
        denyButtonText: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
            Editar(id);
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });}