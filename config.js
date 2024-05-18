const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347063614047";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_16_05_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDY1LFxuICAgICAgICA2NixcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODUsXG4gICAgICAgIDk0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4LFxuICAgICAgICAzMixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjIzLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNixcbiAgICAgICAgMjQ1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTc0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTgxLFxuICAgICAgICA0MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDczLFxuICAgICAgICA0MyxcbiAgICAgICAgMTEzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjEyLFxuICAgICAgICA4OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDYzLFxuICAgICAgICA3OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDY2LFxuICAgICAgICAzMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI4LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMzUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjksXG4gICAgICAgIDM0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTExLFxuICAgICAgICA5OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIwLFxuICAgICAgICA2MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjMwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTksXG4gICAgICAgIDMwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDkyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjAyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUxLFxuICAgICAgICA0NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTM2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTgyLFxuICAgICAgICA2NixcbiAgICAgICAgMTc3LFxuICAgICAgICA3NixcbiAgICAgICAgMTM0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIxSTUrQi9ySUlwb3MvL0FyZnJvRERVYWZSeXdtd0g4RHArcEJGK3lmcmlVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNjM2MTQwNDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjlCMEUwQzE2NzNCMUJFMjlFMzM4RTZFRkYxRDczQTYwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjA0ODk3MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ0b2YzREdjdFFaT0ZFTEFyUExpSF9RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk1ZjgxMmQ4LWFjZGUtNDVlNS05ZGY5LWEyZDZhNjI1Mzk1MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNCxcbiAgICAgIDU1LFxuICAgICAgNTYsXG4gICAgICAxNDMsXG4gICAgICAyMixcbiAgICAgIDEwNSxcbiAgICAgIDU3LFxuICAgICAgMjA0LFxuICAgICAgMTAzLFxuICAgICAgNzcsXG4gICAgICAxMzAsXG4gICAgICAxNCxcbiAgICAgIDUsXG4gICAgICA5OCxcbiAgICAgIDExOSxcbiAgICAgIDEwMCxcbiAgICAgIDE4NixcbiAgICAgIDg4LFxuICAgICAgNzAsXG4gICAgICA4MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OCxcbiAgICAgIDI1NCxcbiAgICAgIDEyNyxcbiAgICAgIDMwLFxuICAgICAgMTAzLFxuICAgICAgNjEsXG4gICAgICA2OSxcbiAgICAgIDExMCxcbiAgICAgIDU2LFxuICAgICAgNjYsXG4gICAgICA3OSxcbiAgICAgIDE4MSxcbiAgICAgIDE1OCxcbiAgICAgIDk4LFxuICAgICAgMjcsXG4gICAgICAyMSxcbiAgICAgIDE4LFxuICAgICAgMjA5LFxuICAgICAgMjQ4LFxuICAgICAgMTc2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjE4S0JUUk1WXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDYzNjE0MDQ3OjQ5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDQyODk0NDMwODY1NDk6NDlAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTWljaGFlbCBBZGltb3JhbW1hXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkwwMm5zUXhLaWpzZ1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJEbkV1NHZXWTZLUzNzZXZkNWwvZCtUZzR1cGpjL1lBY01FL3JSZk0yTHhzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjJTN0VFK0dMdi94TVdCN3dNY3kvTElMeHBSK0pTYWJaQVcrRmNuaElrMWs3NFRyaDJ0TnBSQ0tveHVZRmRZUVhkcjk1dHpvRG5yRDMvTFZnZDJpUUNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlp2eG5sUUpkd1ZmR3FvN0c4YXVXWEs0enhoekJaTVRBVHk4YU52eWwrUCswTUVRRlB1ejZoSVp5bk9vcFYyVUwzaGZHZzB5RlB3cDJoS3l0eHdaSWpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNjM2MTQwNDc6NDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTYwNDg5NjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMcC9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxwLy5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
