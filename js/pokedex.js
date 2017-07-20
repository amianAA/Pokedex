
$(document).ready(function () {
	function addContent(pokemon) {
		forEach(document.createElement

	}

	var idInput;
	var pokemon;

	$("button").click(function(event){
		event.preventDefault();
		idInput = $("input").val();
		$.ajax({
			url:'http://pokeapi.co/api/v2/pokemon/'+ idInput + '/', 
			method: 'GET',
			dataType: 'JSON',
			success: addContent
		}); 
	})

})


