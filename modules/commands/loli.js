 module.exports.config = {
 name: "loli",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "TuanDz",
 description: "Random ảnh pekora",
 commandCategory: "Random-IMG",
 usages: "loli",
 cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
 const axios = require('axios');
 const request = require('request');
 const fs = require("fs");
 axios.get('https://api-adreno-loli.herokuapp.com/').then(res => {
 let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
 let callback = function () {
					api.sendMessage({
						body: `𝐀̉𝐧𝐡 𝐥𝐨𝐥𝐢 𝐜𝐮̛̣𝐜 𝐜𝐮𝐭𝐞𝐞 😍`,
      attachment: fs.createReadStream(__dirname + `/cache/loli.${ext}`)
     }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/loli.${ext}`), event.messageID);
    };
    request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/loli.${ext}`)).on("close", callback);
   })
}