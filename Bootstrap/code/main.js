/* tabla(); */

function tabla() {

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
                        <a href="https://s3.amazonaws.com/adsurge-assets/landers/dark_player/fox2.ogg" target="_blank" rel="nofollow" class="btn btn-primary">Ver Pelicula</a>
                    </div>
                </div>
            </div>
  `
    })

    document.getElementById('contenido').innerHTML = html
    localStorage.setItem('Datos', JSON.stringify(Datos))
}