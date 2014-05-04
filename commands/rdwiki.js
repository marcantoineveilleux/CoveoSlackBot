module.exports = {
  def: {
    exec : function (hook, callback) {
      callback("http://ces/js#q=" + hook.command_text + "&t=RDWIKI");
    },
    help : function(callback) {
      callback("Link to rdwiki on CES, Usage !rdwiki @text_to_search")
    }
  }
}