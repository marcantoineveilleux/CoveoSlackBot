module.exports = {
  def: { 
    exec : function (hook, callback) {
      callback("https://developers.coveo.com/dosearchsite.action#q=" + hook.command_text);
    },
    help : function (callback) {
      callback("Link to developers.coveo.com, Usage : !coveodoc @text_to_search")
    }
  }
}