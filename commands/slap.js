module.exports = {
  def: {
    exec : function (hook, callback) {
      callback(":hand: _slaps " + hook.command_text + " with a large trout._ :fish:");
    },
    help : function(callback) {
      callback("Slap someone ! Usage !slap @someone")
    }
  }
}