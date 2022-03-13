const request = require('request');
const fs = require('fs')

module.exports.config = {
  name: "xoa",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Hungcatmoi (fix lại by CHIP) ",
  description: "Xoa đầu người bạn tag",
  commandCategory: "Tình Yêu",
  usages: "[tag người bạn cần xoa đầu]",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs": ""
  }
};

module.exports.run = function({
  api,
  event,
  args,
  client,
  __GLOBAL
}) {
  var out = (msg) => api.sendMessage(msg, event.threadID, event.messageID);
  if (!args.join(" ")) return out("Vui Lòng Tag 1 Người");
  else
  return request('https://tuandz2250api.herokuapp.com/api/xoa.php', (err, response, body) => {
    let picData = JSON.parse(body);
    var mention = Object.keys(event.mentions)[0];
    let getURL = picData.url;
    let ext = getURL.substring(getURL.lastIndexOf(".") + 1);
    let tag = event.mentions[mention].replace("@", "");
    let callback = function() {
      api.sendMessage({
        body: tag + ", 𝐍𝐠𝐨𝐚𝐧 𝐥𝐚̆́𝐦 𝐛𝐞́ 𝐢𝐮𝐮 ><",
        mentions: [{
          tag: tag,
          id: Object.keys(event.mentions)[0]
        }],
        attachment: fs.createReadStream(__dirname + `/cache/xoa.${ext}`)
      }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/xoa.${ext}`), event.messageID);
    };
    request(getURL).pipe(fs.createWriteStream(__dirname + `/cache/xoa.${ext}`)).on("close", callback);
  });
}