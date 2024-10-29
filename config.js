const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "sXcgBQrR#x3sxmGfcd_Qb26K8wiAJDomg1Qq3QRxsPRkYsr97oPY", //put your session id
ALIVE_IMG: process.env.ALIVE_IMG || "https://photos.app.goo.gl/HAnV2dBsFNcckyRd8",
ALIVE_MSG: process.env.ALIVE_MSG || "*👋 Hello I am Kawee Botz*",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",  //true or false
MODE: process.env.MODE || "public", //private or public
AUTO_VOICE:"true" //true or false
};
