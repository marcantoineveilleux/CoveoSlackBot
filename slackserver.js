var express = require("express");
var bodyParser = require('body-parser');
var requireDir = require("require-dir");

var requiredCommands = requireDir("./commands");

var app = express();
app.use(bodyParser());
var port = Number(process.env.PORT || 5000);
app.listen(port, function () {
    console.log("listening on " + port);
});

app.get("/", function (req, res) {
    res.send("Slack bot online");
});

var commands = {
    help : {
        exec : function (hook, callback) {
            if (hook.command_text && commands[hook.command_text]) {
                commands[hook.command_text].help(callback)
            } else {
                callback("Valid commands: " + Object.keys(commands).join(", ") + " . To display help about a particular command type !help @command_name");
            }
        },
        help : function (callback) {
            callback("Display all available commands. Usage : !help, !help @command_name")
        }
    }
};
Object.keys(requiredCommands).forEach(function (requiredCommand) {
    commands[requiredCommand.replace("_", "")] = requiredCommands[requiredCommand].def
});

/*
hook contains the following:

token=QIwCdGmbI9BzuQtgiCbqCaJs
team_id=T0001
channel_id=C2147483705
channel_name=test
timestamp=1355517523.000005
user_id=U2147483697
user_name=Steve
text=googlebot: What is the air-speed velocity of an unladen swallow?
trigger_word=googlebot:
 */
var execute_command = function (hook, callback) {
    if (!hook || !hook.text || !hook.trigger_word) {
        return {
            text : 'Invalid request'
        };
    }

    hook.full_command_text = hook.text.substring(hook.trigger_word.length).trim();
    var index = hook.full_command_text.indexOf(" ");
    if (index !== -1) {
        hook.command_name = hook.full_command_text.substring(0, index)
            hook.command_text = hook.full_command_text.substring(index + 1);
    } else {
        hook.command_name = hook.full_command_text;
    }

    var command = commands[hook.command_name];

    if (command) {
        var result = {};
        command.exec(hook, function (result) {
            if (typeof result == "object") {
                callback(result)
            } else {
                callback({
                    text : result
                });
            }
        }, commands);
    } else {
        callback({
            text : 'Unknown command "' + hook.command_name + '".'
        });
    }
}

app.post('/', function (req, res) {
    hook = req.body;
    try {
        execute_command(hook, function (result) {
            res.json(result);
        });
    } catch (err) {
        console.log(err);
        res.json({
            text : "Error."
        });
    }
});
