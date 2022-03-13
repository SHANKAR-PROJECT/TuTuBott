   module.exports.config = {
  name: "sendnoti",
  version: "1.0.2",
  hasPermssion: 2,
  credits: "Mirai Team",
  description: "Gửi tin nhắn tới các nhóm(reply vào ảnh/video cần gửi kèm)!",
  commandCategory: "system",
  usages: "[Text]",
  cooldowns: 0
};

module.exports.languages = {
  "vi": {
    "sendSuccess": "Đã gửi tin nhắn đến %1 nhóm!",
    "sendFail": "[!] Không thể gửi thông báo tới %1 nhóm"
  },
  "en": {
    "sendSuccess": "Sent message to %1 thread!",
    "sendFail": "[!] Can't send message to %1 thread"
  }
}

module.exports.run = async ({ api, event, args, getText }) => {
if (event.type == "message_reply") {
const request = global.nodemodule["request"];
const fs = require('fs')
const axios = require('axios')



        var path = __dirname + `/cache/bia.png`;
        var path = __dirname + `/cache/nhac.mp3`;
        var path = __dirname + `/cache/ghiam.mp4`;
        var path = __dirname + `/cache/anh.jpg`;
        var path = __dirname + `/cache/moi.gif`;


var abc = event.messageReply.attachments[0].url;
    let getdata = (await axios.get(`${abc}`, { responseType: 'arraybuffer' })).data;

  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));


  var allThread = global.data.allThreadID || [];
  var count = 1,
    cantSend = [];
  for (const idThread of allThread) {
    if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
    else {
      api.sendMessage({body:"» 𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 𝐀𝐝𝐦𝐢𝐧 «\n\n" + args.join(` `),attachment: fs.createReadStream(path) }, idThread, (error, info) => {
        if (error) cantSend.push(idThread);
      });
      count++;
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
  }
  return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID);

}
else {
  var allThread = global.data.allThreadID || [];
  var count = 1,
    cantSend = [];
  for (const idThread of allThread) {
    if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
    else {
      api.sendMessage({body:"» 𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 𝐀𝐝𝐦𝐢𝐧 «\n\n" + args.join(` `),attachment: event.attachments}, idThread, (error, info) => {
        if (error) cantSend.push(idThread);
      });
      count++;
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
  }
  return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID); }
}