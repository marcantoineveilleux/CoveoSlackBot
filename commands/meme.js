var request = require("request");
var _ = require('underscore')

module.exports = {
	def : {
		exec : function (hook, callback) {
			var commandArguments = hook.command_text.split("|");

			getMeme(commandArguments[0].toLowerCase(), function(id, err){
				if(err) {
					callback(err);
				} else {
				  var formParams = {
				    template_id: id,
				    username: "coveoslackbot",
				    password: "tamere",
				    text0: commandArguments[1] + "",
				    text1: commandArguments[2] + ""
			      };
			      request.post('https://api.imgflip.com/caption_image', function(e, r, body) {
			      	var result = JSON.parse(body);
			      	if(result.success == true) {
			      	  callback(result.data.url);
			      	} else {
			          callback("Error with the meme provider.");
			      	}
			      }).form(formParams);
				}
			});

			function getMeme(query, fnCallback) {
			    request.get('https://api.imgflip.com/get_memes', function(e, r, body) {
			      var memes = JSON.parse(body).data.memes;
			      var matches = _.filter(memes, function(meme) {
			        return meme.name.toLowerCase().indexOf(query) >= 0;
			      });
			      if(matches.length == 0) {
			      	fnCallback(-1, "No meme found!");
			      } else {
			        fnCallback(matches[0].id);
			      }     
			    })
			}
		},
		help : function (callback) {
			callback("Creates a meme. Usage !meme @queryForName|@text0|@text1");
		}
	}
}
