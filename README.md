[![Build Status](https://travis-ci.org/GuiSim/CoveoSlackBot.svg)](https://travis-ci.org/GuiSim/CoveoSlackBot)

CoveoSlackBot
=============

##Setup

Tiny node.js bot for slack.com used at Coveo

Run it with `node slackserver.js`.

Configure an outgoing webhook. 
* Bind it to the trigger word `!`.
* Point the URL to your node.js server.

That's it! Use `!help` within a public slack.com channel for a list of commands.

##Contributions

Contributions are welcome!

Adding a command is simple. Add a `.js` file within the `commands` folder. It will be automatically loaded and added to the list of available commands.

You're done!
See the other commands for inspiration.

###More informations
Slack bot is using [Express](http://expressjs.com/) as the web application framework and uses [body-parser](https://www.npmjs.com/package/body-parser) to parse requests.

The `hook` object contains the following properties:
```
token=XYZ
team_id=T0001
channel_id=C2147483705
channel_name=test
timestamp=1355517523.000005 asd
user_id=U2147483697
user_name=Steve
text=!noice
trigger_word=!:
```

To emulate a slack event, simply send a `post` to `localhost:5000` with the above x-www-form-urlencoded parameters.
It should return: 
```json
{
    "text": "Steve thinks gsimard is noice!"
}
```
Have fun!


