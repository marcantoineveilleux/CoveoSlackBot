var request = require("request");

module.exports = {
	def : {
		exec : function (hook, callback) {
			request("http://labs.bible.org/api/?formatting=plain&passage=" + hook.command_text, function (err, res, body) {
				if (err || res.statusCode != 200) {
					callback("Error " + err);
				} else {
					if (body.length === 0) {
						callback("No passage found.");
					} else {
						callback(body);
					}
				}
			});
		},
		help : function (callback) {
			callback("Display a Bible passage. Usage !bible @passage. (e.g. !bible John 20:30");
		}
	}
}
