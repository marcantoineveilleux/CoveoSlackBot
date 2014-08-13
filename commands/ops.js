key = new Buffer("ZGY2MTBiY2ItY2E3NC00MGRhLTk5YzctM2VhZjY2ZmE1NWMy", "base64").toString("ascii")
var postmark = require("postmark")(key);

module.exports = {
  def: {
    exec : function (hook, callback) {
        postmark.send({
            "From": "coveoslackbot@coveo.com", 
            "To": "cloudops@coveo.com", 
            "Subject": "Request from " + hook.user_name, 
            "TextBody": hook.command_text
        });
      callback("Sent email to cloudops@coveo.com.");
    },
    help : function(callback) {
      callback("Send a mail to cloudops@coveo.com. Usage !ops @email_body");
    }
  }
}