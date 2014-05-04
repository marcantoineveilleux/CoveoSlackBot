module.exports = {
  def: {
    exec : function (hook, callback) {
    callback(hook.user_name + " hurts itself in its confusion!");
    },
    help : function(callback) {
      callback("Pokemon confusion , Usage : !wat")
    }
  }
}