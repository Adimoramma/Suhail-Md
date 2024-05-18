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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_08_05_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzksXG4gICAgICAgIDg4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExLFxuICAgICAgICA2MCxcbiAgICAgICAgODAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMixcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzLFxuICAgICAgICA2MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ1LFxuICAgICAgICA0MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTcyLFxuICAgICAgICA5MyxcbiAgICAgICAgNixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY1LFxuICAgICAgICA1MixcbiAgICAgICAgNzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc1LFxuICAgICAgICA5MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzksXG4gICAgICAgIDk5LFxuICAgICAgICAwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA0MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0LFxuICAgICAgICA3NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDM1LFxuICAgICAgICA4MixcbiAgICAgICAgMTczLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDk2LFxuICAgICAgICA5MixcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjI4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyNixcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDY0LFxuICAgICAgICA5NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDAsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAzNixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3LFxuICAgICAgICA4MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTIyLFxuICAgICAgICA3MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI5LFxuICAgICAgICA1MixcbiAgICAgICAgMTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODYsXG4gICAgICAgIDc0LFxuICAgICAgICA2NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTU1LFxuICAgICAgICA0NyxcbiAgICAgICAgODAsXG4gICAgICAgIDExLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiM1RibTBURE5ja3cvZFV5THRJYzVCQitLV2ZDN1pkVGRaK2p1TzEvNGhLTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDYzNjE0MDQ3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5QjM2ODFGRTkyM0UwOTk5RjNEODZBQzM1RTJDMjBGNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTYwNDQ5MjFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDYzNjE0MDQ3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4MTlDRjY5MDdEODI3NUUzM0NCQjg0MjdBMjZFMzFFOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTYwNDQ5MjNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWS1NeVVoa1dSTWVScEFqTk9xSmxRQVwiLFxuICBcInBob25lSWRcIjogXCJiZmEzZmU4ZC03YjY3LTRiZDItYjJkNC05ZGZiYTZjMDMzM2VcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM5LFxuICAgICAgMjMyLFxuICAgICAgMTUsXG4gICAgICA3MSxcbiAgICAgIDExOCxcbiAgICAgIDc1LFxuICAgICAgMjE4LFxuICAgICAgMTk5LFxuICAgICAgMyxcbiAgICAgIDc1LFxuICAgICAgMTc3LFxuICAgICAgNjksXG4gICAgICA1MSxcbiAgICAgIDIyNCxcbiAgICAgIDIzNSxcbiAgICAgIDU2LFxuICAgICAgOSxcbiAgICAgIDQxLFxuICAgICAgMTUxLFxuICAgICAgMTQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MCxcbiAgICAgIDEwMSxcbiAgICAgIDIzMSxcbiAgICAgIDIxNCxcbiAgICAgIDQyLFxuICAgICAgNzksXG4gICAgICAyNyxcbiAgICAgIDE4MyxcbiAgICAgIDU3LFxuICAgICAgMTA0LFxuICAgICAgMjQ3LFxuICAgICAgMTY1LFxuICAgICAgMjAyLFxuICAgICAgNjksXG4gICAgICAxMzksXG4gICAgICAxMzcsXG4gICAgICA4LFxuICAgICAgNDEsXG4gICAgICAyMTMsXG4gICAgICAxNzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTFJLRjMxNjdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNjM2MTQwNDc6NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0NDI4OTQ0MzA4NjU0OTo0OEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJNaWNoYWVsIEFkaW1vcmFtbWFcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKSDAybnNROElpanNnWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkRuRXU0dldZNktTM3NldmQ1bC9kK1RnNHVwamMvWUFjTUUvclJmTTJMeHM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibnhZbTNZUS9vb2hUNmZkUnp6d2luV3NjdzNYbHRJaVdwQnZ3cUQwWkFzeS8xNmNuSGxZck5jL24zOW0zNUlQQVM1YW91aWZyaXJnUW9LRmw0T1pZRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSDFLQmgvSUx4ZHVFdnJyZ0Ric3BIdlhELzhLTkZodktWVldkWVlBMkl5SDJtMmR3VXVXM1BLZjUzc0VZM29uM3hvV2kwcFlmd216MzRKb2srRldkQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2MzYxNDA0Nzo0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjA0NDkxNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxwL1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTHAvLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
