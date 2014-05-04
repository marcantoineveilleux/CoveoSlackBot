module.exports = {
  def: {
    exec : function (hook, callback) {
      callback('Good point, ' + hook.user_name);
    },
    help : function(callback) {
      callback("Agrees with you, Usage : !yes")
    }
  }
}