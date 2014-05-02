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

Adding a command is simple. Add a `.js` file within the `command` folder.
Add it to the list of available commands within `slackserver.js`.

You're done!
See the other commands for inspiration.
