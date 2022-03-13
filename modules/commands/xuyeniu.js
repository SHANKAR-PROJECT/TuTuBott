const fs = require("fs");
module.exports.config = {
name: "xuyeniu",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD",
	description: "Sad",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Xuyến iu")==0 || (event.body.indexOf("xuyến iu")==0)) {
		var msg = {
				body: "Xuyến năm bờ wan😍",
				attachment: fs.createReadStream(__dirname + `/noprefix/xuyeniu.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }