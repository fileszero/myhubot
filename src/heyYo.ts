import * as hubot from "hubot";

function HeyYo(robot: hubot.Robot): void {
    robot.respond(/hey/i, (msg) => {
        msg.reply("Yo");
    });
}

export = HeyYo; // module.exports = HeyYo;になるよ