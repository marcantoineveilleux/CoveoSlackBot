var request = require("request");

module.exports = {
	def : {
		exec : function (hook, callback) {
			request("http://api.openweathermap.org/data/2.5/weather?q=" + hook.command_text, function (err, res, body) {
				if (err || res.statusCode != 200) {
					callback("Error " + err);
				} else {
                    data = JSON.parse(body);
                    if (data.cod != "200") {
						callback(data.message);
					} else {
                        callback("Weather in " + data.name + ", " + data.sys.country + ": " + (data.main.temp - 273).toFixed(2) + " °C, " + data.weather[0].main);
                    }
				}
			});
		},
		help : function (callback) {
			callback("Display the current weather somewhere. Usage !weather @city (e.g. !weather Paris)");
		}
	}
}
