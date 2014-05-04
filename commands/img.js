var request = require("request");

module.exports = {
	def : {
		exec : function (hook, callback) {
			request("http://" + hook.command_text.replace(/[^a-zA-Z0-9]+/g, "") + ".jpg.to", function (err, res, body) {
				if (err || res.statusCode != 200) {
					callback("Error " + err);
				} else {
					if (body.length < 1000) {
						callback(body.substring(body.indexOf('src=\"') + 'src=\"'.length, body.lastIndexOf('"')));
					} else {
						callback("Nothing found.");
					}
				}
			});
		},
		help : function (callback) {
			callback("Display an image. Usage !img @image_name");
		}
	}
}
