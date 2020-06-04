/* CONSTANTE PARA LEER Y TRABAJAR ARCHIVO JSON CON AJAX */
var i = 0;
const xhttp = new XMLHttpRequest();
xhttp.open('GET', 'js/provider.json', true);
xhttp.send();
    xhttp.onreadystatechange = function(response){
        if(this.readyState == 4 && this.status == 200){
            //console.log(this.responseText);
            datos = JSON.parse(this.responseText);
            if (xhttp.readyState==4 && xhttp.status==200) {
                bton(datos);
                mostrarCurso(i);
            }
        }
    }
function bton(datos){
    datosRecibidos = datos.courses;
     for (var i = 0; i < datosRecibidos.length; i++) {
                   $("#columna").append('<li class="list-group-item"><a href="#" id="boton1" onclick="mostrarCurso('+i+')">'+datosRecibidos[i]['name']+'</a></li>');
                }
}
function mostrarCurso(i)
{
                const divVideo = document.getElementById('video')
                const table = document.createElement('table')
                const tbody = document.createElement('tbody')
                table.innerHTML = `<thead><tr><th colspan="2">${datos.courses[i].name}</th></tr></thead>`
                table.append(tbody)
                for (const capitulo of datos.courses[i].list) {
                  let rowspan = capitulo.videos.length // Cantidad de filas que ocupa un capítulo
                  for (const video of capitulo.videos) {
                    const tr = document.createElement('tr')
                    tbody.append(tr)
                    if (rowspan) {
                      tr.innerHTML = `<td rowspan="${rowspan}">${capitulo.chapter}</td><td>${video.name}</td>`
                      rowspan = 0
                    } else {
                      tr.innerHTML = `<td>${video.name}</td>`
                    }
                  }
                }
                divVideo.innerHTML = '' // Vacía el DIV
                divVideo.append(table)  // Llena el DIV
}