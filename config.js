const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PKphhTqK#2kuHRYqPVFR92AgimK10B8Lr_l_i2wj08QAkTtGvodU",
ALIVE_IMG: process.env.ALIVE_IMG || "https://www.vecteezy.com/free-photos/alone-boy",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello I'm alive now",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
SUDO_NB: process.env.SUDO_NB || "94717937870",
OWNER_NAME: process.env.OWNER_NAME || "no name",
BOT_NAME: process.env.BOT_NAME || "I'm alone",
AUTO_VOICE: process.env.AUTO_VOICE || "false"

};

