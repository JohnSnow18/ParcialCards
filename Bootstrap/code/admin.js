
let Datos = JSON.parse(localStorage.getItem('Datos')) || []

refrestList()


let { pelicula, titulo, descripcion } = contenido;

function guardar() {

    Datos.push({
        pelicula: pelicula.value,
        titulo: titulo.value,
        descripcion: descripcion.value,
        /*         direccion: direccion.value,
                celular: celular.value */

    })

    updateChange();

    clearTable();

    refrestList();
}
function clearTable() {
    id.value = " ";
    pelicula.value = " ";
    titulo.value = " ";
    descripcion.value = " ";
    /*    direccion.value= " ";
       celular.value= " "; */
    //Focus first field
    pelicula.focus()
}

function refrestList() {

    let html = ""
    Datos.map((value, i) => {
        html += `<tr>
            <div class="col s3" style="width: 220; height: 320;">
            <div class="card">
                <div class="card-image waves-effect ">
                    <img class="activator" src=${value.pelicula} width="220" height="320"></div>
                    <div class="card-content">
                        <span class="card-title activator black-text ">Sinopsis<i class="material-icons right">more_vert</i></span>
                    </div>

                    <div class="card-reveal blue lighten-5" >
                        <span class="card-title black-text ">${value.titulo}<i class="material-icons right">close</i></span>
                        <span class="black-text "><p>${value.descripcion}</p></span>
                        <a href="#" target="_blank" rel="nofollow" class="btn btn-primary">Ver Pelicula</a><br>
                        <button type="button" class="btn btn-primary" onClick="editar('${i}')">Editar</button><br>
                        <button type="button" class="btn btn-primary" onClick="eliminar(${i})">Eliminar</button>
                    </div>
                </div>
            </div>
  `
    })

    document.getElementById('cuerpoTable').innerHTML = html
}

function eliminar(i) {
    Datos.splice(i, 1)
    updateChange();
    refrestList();
}

function editar(i) {
    //Id
    id.value = i;
    //view Data in Form
    pelicula.value = Datos[i].pelicula;
    titulo.value = Datos[i].titulo;
    descripcion.value = Datos[i].descripcion;
    /*   direccion.value = Datos[i].direccion;
      celular.value = Datos[i].celular; */
}
function actualizar() {
    //Pos Array localStorage
    let i = id.value;
    //Update Params In localStorage
    Datos[i].pelicula = pelicula.value;
    Datos[i].titulo = titulo.value;
    Datos[i].descripcion = descripcion.value;
    /*     Datos[i].direccion = direccion.value;
        Datos[i].celular = celular.value; */
    //Update Changes
    updateChange();
    //Refresh List
    refrestList();
}
function updateChange() {
    localStorage.setItem('Datos', JSON.stringify(Datos))
}