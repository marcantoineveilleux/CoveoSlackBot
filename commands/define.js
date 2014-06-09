var request = require("request");

module.exports = {
  def : {
    exec : function (hook, callback) {
      var query = hook.command_text;
      request("http://api.urbandictionary.com/v0/define?term="+encodeURI(query), function (err, res, body) {
        if (err || res.statusCode != 200) {
          callback("Error " + err);
        } else {
          try {
            var data = JSON.parse(body);
            if(data.list != null && data.list.length > 0){
              var result = data.list[0] 
              var text = '*'+result.word+'*: `'+result.example+'` \n '+result.definition;
              callback(text);
            } else {
              callback("No result"); 
            }
          } catch(e) {
            callback("Error " + e.toString()); 
          }
        }
      });
    },
    help : function (callback) {
      callback("Urban dictionary");
    }
  }
}
