module.exports = {
  def: {
    exec : function (hook, callback) {
      callback(hook.user_name + " thinks " + (hook.command_text ? hook.command_text : "gsimard") + " is noice!");
    },
    help : function(callback) {
      callback("That user is noice ! Usage : !noice @user_name");
    }
  }
}