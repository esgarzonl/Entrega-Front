let url = 'https://plataforma.visasgomezyasociados.com/API/cityList';

let datos = [];

function crearTabla(obj) {
  var tabla = '<table class="table align-middle mb-10 bg-white"> <thead class="bg-light"> <tr>  <th>Ciudad</th> </tr></thead>';
  for (i = 0; i < obj.length; i++) {
    tabla += '<tr><td><p class="fw-normal mb-1 >' + obj[i].name + '</p></td></tr>';
  }
  tabla += '</table>';
  $('#resultados').hide().html(tabla).show('slow');
}

function ConsumirAPI() {
  $('#cargando').html('Cargando'); //jQuery para el cargando
  $.ajax({
    type: 'GET',
    url: url,
    contentType: 'application/json; charset=utf-8',
    data: $('#formulario').serialize(),
    dataType: 'json', //datos a enviar
    success: function (data) {
      //exito
      console.log(data); //muestra la info en consola del navegador
      $('#cargando').html('API Consumida Correctamente'); //jQuery para el cargando
      crearTabla(data);
    },
    failure: function (data) {
      //error del server
      console.log(data.responseText);
    },
    error: function (data) {
      //error general
      console.log(data.responseText);
    },
  });
}