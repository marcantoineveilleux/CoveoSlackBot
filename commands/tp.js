module.exports = {
  def: {
    exec : function (hook, callback) {
      callback("http://targetprocess/entity/" + hook.command_text);
    },
    help : function(callback) {
      callback("Display a link to TP. Usage !tp @tp_number");
    }
  }
}