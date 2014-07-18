
module.exports = {
  def: {
    exec : function (hook, callback) {
      callback("" + eval(hook.command_text));
    },
    help : function(callback){
      callback("GODLIKE POWER, Usage !eval @script. PLZ DON'T KILL THE BOT!")
    }
  }
}
