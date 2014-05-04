var request = require("request");

module.exports = {
  def: {
    exec : function (hook, callback) {
      request("http://en.wikipedia.org/w/api.php?format=json&action=opensearch&limit=2&format=json&search=" + hook.command_text, function (err, res, body) {
        if (err) {
          result.text = "Error " + err;
        } else {
          result = JSON.parse(body)[1][0];
          if (result) {
            callback("https://en.wikipedia.org/wiki/" + encodeURIComponent(result));
          } else {
            callback("No wiki article on " + hook.command_text);
          }
        }
      });
    },
    help : function(callback) {
      callback("Get a link to wikipedia about a subject, Usage !wiki @subject")
    },
  }
}