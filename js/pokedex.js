$(document).ready(function () {
  var idInput;
  var pokemon;

  function pokemonTipo(pokemon) {
    var acumulador = [];
    for (var i = 0, l = pokemon.types.length; i < l; i++) {
      acumulador.push(' '+pokemon.types[i].type.name);
    }
    return acumulador;
  }

  function addContent(pokemon) {
    var pkType = pokemonTipo(pokemon);
    $('.content').empty();
    $('.content').append(
      '<div class="row">' +
        '<div class="col-2">' +
          '<img class="poke-image" src="' + pokemon.sprites.front_default + '" alt="pokemon image">' +
        '</div>' +
        '<div class="col-5 p-1">' +
          '<h2>' + pokemon.name + '</h2>' +
          '<h4> Tipo: <em>' + pkType + '</em></h4>' +
          '<h5> Peso: <em>' + pokemon.weight + ' Kg</em></h5>' +
        '</div>' +
      '</div>'
    );
    $.ajax({
      url: 'http://pokeapi.co/api/v1/pokemon/' + idInput + '/',
      method: 'GET',
      dataType: 'JSON',
      //resource_uri:
      success: getDescription
    });
  }

  function getDescription(pokemon){
    console.log($.ajax({
      url:'http://pokeapi.co'+pokemon.descriptions[0].resource_uri,
      method: 'GET',
      dataType: 'JSON',
      success: addDescription
    })
  )}
  function addDescription(pokemon){
    $('.content').children('.row').append(
      '<div class="col-5">'+
        '<h5><em>' + pokemon.description + '</em></h5>'+
      '</div>'
    )
  }

  $("button").click(function (event) {
    event.preventDefault();
    idInput = $("input").val();
    $.ajax({
      url: 'http://pokeapi.co/api/v2/pokemon/' + idInput + '/',
      method: 'GET',
      dataType: 'JSON',
      success: addContent
    });
  })
})
