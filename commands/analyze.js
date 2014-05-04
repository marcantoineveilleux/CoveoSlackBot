var request = require('request');
var sentiment = require('sentiment');

module.exports = {
    def: {
        exec: function(hook, callback) {
            var result = sentiment(hook.command_text);
            
            var emotion = ':grin:';
            if(result.score === 0) {
                emotion = ':neutral_face:';
            } else if (result.score < 0) {
                emotion = ':cry:';
                if (result.score > -2) {
                    emotion = ':disappointed:';
                }
            } else if (result.score < 2) {
                emotion = ':smiley:';
            }

            callback(emotion);
        },
        help: function(callback) {
            callback('Display an emoji according to the emotion of the text. Usage !analyze @text. (e.g. !analyze This is awesome dude!');
        }
    }
}
