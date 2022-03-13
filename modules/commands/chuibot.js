module.exports.config = {
name: "chửi bot",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Dũng UwU",
	description: "Chửi bot",
	commandCategory: "NoPrefix",
	usages: "noprefix",
	cooldowns: 5,
	dependencies: {
        "fs-extra": ""
    }
};
module.exports.handleEvent = async({ api, event, Users }) => {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID, senderID } = event;
	var tag = (await Users.getData(senderID)).name;
	let output = "Aishh, chớt tịt. Con lơn này nữa ";
	let varinput = [ "bot", "Bot", "Bot ngu", "bot ngu", "Bot đểu", "bot đểu","ê bot","Ê bot", "botngu" ];
	for (const input of varinput) {
		if (event.body.indexOf(input)==0 && event.body.length == input.length) {
		var job = ['aishh, chớt tịt cậu đang nói cái quái qỉ dì dị hả',
                       'tui đêyy',
                       'Kêu gì tui ban bây giờ á',
                       'tui đang ngủ gọi gọi cái gì',
                       'yêu không mà gọi',
                       'donate đi rồi nói tiếp',
                       'gọi quàiiiii',
                       'cút cút cút cút'];
             api.sendMessage(job[Math.floor(Math.random() * job.length)] + ' '  , threadID, messageID);
		}
	}
	}
	module.exports.run = function({}) {
}