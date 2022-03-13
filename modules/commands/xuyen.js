const fs = require("fs");
module.exports.config = {
name: "xuyen",
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
	if (event.body.indexOf("Xuyn")==0 || (event.body.indexOf("xuýn")==0)) {
		var msg = {
				body: "Iu xuyến lắm chứ j 🤤🤤",
				attachment: fs.createReadStream(__dirname + `/noprefix/xuyen.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}