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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_53_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzQsXG4gICAgICAgIDQ1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjksXG4gICAgICAgIDgwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDksXG4gICAgICAgIDgsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDMsXG4gICAgICAgIDYyLFxuICAgICAgICAxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgODEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAzMixcbiAgICAgICAgNjUsXG4gICAgICAgIDM4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAzMyxcbiAgICAgICAgMixcbiAgICAgICAgODgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODAsXG4gICAgICAgIDIsXG4gICAgICAgIDcxLFxuICAgICAgICA5NixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDY0LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDM4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTcwLFxuICAgICAgICA3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAzMixcbiAgICAgICAgMTg5LFxuICAgICAgICA0LFxuICAgICAgICA1NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNCxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTEzLFxuICAgICAgICA2NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDksXG4gICAgICAgIDI3LFxuICAgICAgICA5MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTU2LFxuICAgICAgICA2MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTIsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDYsXG4gICAgICAgIDgyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDgzLFxuICAgICAgICA5OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUyLFxuICAgICAgICAzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTcwLFxuICAgICAgICA2MyxcbiAgICAgICAgNzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDExNixcbiAgICAgICAgOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI4LFxuICAgICAgICAyMSxcbiAgICAgICAgNDksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJYN2RCdlFVZFQ2SXdyNm9uMXRHNjZsVlBmWVlZTzhaRWlYRVoyc200MGZNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzQ3NjAwOTUxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQzU0RDFDMDFDMENDQzk4ODIwM0FDODNBMjg2NTlENzFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNTQ1NjExXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDc2MDA5NTE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFNzZCMkREMTE1QTJDRDIyNTY0QjIzOEJEQzg3NzUzQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI1NDU2MTFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0NzYwMDk1MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjYyMTNBMUNFN0Q0QzIxNTM1RDRENjU5RDNFRjRCODQzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjU0NTYxM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzQ3NjAwOTUxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjYxRkY5RDMwRUYwMjk5NUQ1QzUxNDQ1NjAwNDM4QkFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNTQ1NjEzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInAwQk03YmpyUWo2ZGNWUFRTY1JvSEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWFhMzc0OGItNWFhMy00YTgxLTk4MGQtZWE5MzYzMjFjOGM2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMCxcbiAgICAgIDE5LFxuICAgICAgMTYzLFxuICAgICAgMjQ3LFxuICAgICAgNjEsXG4gICAgICAyMTEsXG4gICAgICAyMDgsXG4gICAgICAyMDIsXG4gICAgICA1MSxcbiAgICAgIDQsXG4gICAgICA3NSxcbiAgICAgIDE5NixcbiAgICAgIDIxNCxcbiAgICAgIDg5LFxuICAgICAgMjUsXG4gICAgICAyMDcsXG4gICAgICAyMjYsXG4gICAgICAxNDksXG4gICAgICAxMixcbiAgICAgIDE5MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjIsXG4gICAgICAyMTksXG4gICAgICA1MixcbiAgICAgIDE4MixcbiAgICAgIDM4LFxuICAgICAgMTY1LFxuICAgICAgMzQsXG4gICAgICAxNzMsXG4gICAgICAxMyxcbiAgICAgIDI0MSxcbiAgICAgIDE5MyxcbiAgICAgIDE2MCxcbiAgICAgIDExNixcbiAgICAgIDYwLFxuICAgICAgNSxcbiAgICAgIDE3OSxcbiAgICAgIDIyOSxcbiAgICAgIDI0NCxcbiAgICAgIDE1MyxcbiAgICAgIDI1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNSFNUTE5aMlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDc2MDA5NTE3OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxNzU0NDYyMzQzMzU2OjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQWJkdWwgUmFobWFuXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3Y5dXU0RkVNYnJyN1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrSTVUOWZ2cVRsanVBNHBRdG9JODNrelBJV2dIcTA2ci9mamI1K1EwbGs4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIks1bENId1RLVkxyMnVjYmVtRWZRWHREYis0NlRHRTRTUUJpMWNTdXpqdUJ3V0ZhdnptK05zUGY1dzZlTUx4QkpkLytLOENHWS9HMGQvUm42ZjEwM0R3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk5SZnNMTGdTdjZ3RU1VVDd1NlQwSjdIMmgxcnhzUktlOE44S3N0UE15ZE5RU1NJTWpBbkcwaEZxTGpQR1dIV2xST2lEVGNmdEtsUmI0aHB4T0ovV0R3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQ3NjAwOTUxNzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjU0NTYwOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUl5L1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSXkvLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
