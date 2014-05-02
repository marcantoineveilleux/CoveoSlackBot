var request = require("request");

module.exports = {
	def : {
		exec : function (hook, callback) {
			request("http://api.soundcloud.com/tracks.json?client_id=1e0b91e735c1bc38817dc6e1035883aa&q=" + hook.command_text, function (err, res, body) {
				if (err || res.statusCode != 200) {
					callback("Error " + err);
				} else {
                    data = JSON.parse(body);
                    if (data.length < 1) {
						callback("Found nothing.");
					} else {
                        callback(data[0].permalink_url.replace("http", "https"));
                    }
				}
			});
		},
		help : function (callback) {
			callback("Search for a SoundCloud song. Usage !soundcloud @keywords (e.g. !soundcloud Tiesto Red Lights)");
		}
	}
}
