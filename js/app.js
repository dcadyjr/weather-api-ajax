// var zipCode = prompt("What is your zipcode");

// $.ajax({
// 	method: "GET",
// 	url: "http://pokeapi.co/api/v2/pokemon?limit=60",
// 	success: function(response){
// 		var pokemon = response;
// 		for(var i = 0; i < pokemon.results.length; i++){
// 			var ul = $('<ul>');
// 			ul.append('<li><a href="'+pokemon.results[i].url+'">' + pokemon.results[i].name + '</a></li>')
// 			$('body').append(ul);
// 		}
// 	}
// })

var zipCode = prompt("what's your zip code?");
	var codeNumber = Number(zipCode);
	var cityWeather;
	var temp;
	var tempLow;
	var tempHigh;
	var city;
	var description;
	// console.log(prompt.value);

$.ajax({
	method: "GET",
	url: "http://api.openweathermap.org/data/2.5/weather?zip=" + codeNumber + ",us&appid=052f26926ae9784c2d677ca7bc5dec98&units=imperial",
	success: function(response) {
		cityWeather = response;
		temp = cityWeather.main.temp;
		tempLow = cityWeather.main.temp_min;
		tempHigh = cityWeather.main.temp_max;
		city = cityWeather.name;
		description = cityWeather.weather[0].description;
		// // console.log(weather);	
	}

})