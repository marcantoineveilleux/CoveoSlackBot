var request = require("request");

module.exports = {
	def : {
		exec : function (hook, callback) {
			request("https://www.googleapis.com/youtube/v3/search?key=AIzaSyBDY0V5hCftse3HpUCvOP4O1u-1GrAvjm8&part=id&type=video&q=" + hook.command_text, function (err, res, body) {
				if (err || res.statusCode != 200) {
					callback("Error " + err);
				} else {
                    data = JSON.parse(body);
                    if (data.items.length < 1) {
						callback("Found nothing.");
					} else {
                        callback("http://youtube.com/watch?v=" + data.items[0].id.videoId);
                    }
				}
			});
		},
		help : function (callback) {
			callback("Search for a Youtube Video. Usage !youtube @keywords (e.g. !youtube Coveo Blitz 2014)");
		}
	}
}
