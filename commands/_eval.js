vm = require('vm');

module.exports = {
  def: {
    exec : function (hook, callback) {
      // See https://api.slack.com/docs/formatting for more information.
      var javascript = hook.command_text
        .replace('&amp', '&')
        .replace('&lt', '<')
        .replace('&gt', '>')

      sandbox = {
      	hook: hook
      }

      var answer;
      try {
      	answer = "" + vm.runInNewContext(javascript, sandbox)
      } catch(e) {
      	answer = "" + e
      }

      callback(answer);      
    },
    help : function(callback){
      callback("GODLIKE POWER, Usage !eval @script. PLZ DON'T KILL THE BOT!")
    }
  }
}