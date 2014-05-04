module.exports = {
  def : {
    exec : function (hook, callback) {
      callback("http://ces/js#q=" + hook.command_text + "&t=Emails");
    },
    help : function(callback) {
      callback("Link to emails on CES, Usage !emails @text_to_search")
    }
  }
}