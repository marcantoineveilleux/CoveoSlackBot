var request = require("request");

module.exports = {
	def : {
		exec : function (hook, callback) {
			request("http://api.openweathermap.org/data/2.5/forecast/daily?cnt=5&q=" + hook.command_text, function (err, res, body) {
				if (err || res.statusCode != 200) {
					callback("Error " + err);
				} else {
                    data = JSON.parse(body);
                    if (data.cod != "200") {
						callback(data.message);
					} else {
                        var weathers = [];
                        data.list.forEach(function(weather){
                            weathers.push(new Date(weather.dt*1000).toDateString() + ": " + (weather.temp.day - 273).toFixed(2) + " °C, " + weather.weather[0].main);
                        });
                        
                        callback("Weather in " + data.city.name + ", " + data.city.country + " for the next 5 days\n " + weathers.join("\n"));
                    }
				}
			});
		},
		help : function (callback) {
			callback("Display the current weather somewhere. Usage !weather @city (e.g. !weather Paris)");
		}
	}
}
