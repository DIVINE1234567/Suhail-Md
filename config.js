const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="nnekwelugochidera@gmail.com"
global.location="Anambra,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ໓iงiຖē-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349035923173";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_14_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODgsXG4gICAgICAgIDg3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTE2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDExLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMzLFxuICAgICAgICA2LFxuICAgICAgICA1MyxcbiAgICAgICAgODEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDUwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDkzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDUzLFxuICAgICAgICA0LFxuICAgICAgICAzNixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDI4LFxuICAgICAgICAxMixcbiAgICAgICAgMjUzLFxuICAgICAgICA0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyOCxcbiAgICAgICAgODgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA0NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2LFxuICAgICAgICAyNixcbiAgICAgICAgMzMsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MixcbiAgICAgICAgMjYsXG4gICAgICAgIDc2LFxuICAgICAgICA2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTksXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MixcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDYsXG4gICAgICAgIDk5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTc3LFxuICAgICAgICA2MCxcbiAgICAgICAgODYsXG4gICAgICAgIDc4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDgsXG4gICAgICAgIDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg2LFxuICAgICAgICA5MixcbiAgICAgICAgMjQwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyLFxuICAgICAgICAzMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDMsXG4gICAgICAgIDQ5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU1LFxuICAgICAgICAyNCxcbiAgICAgICAgNixcbiAgICAgICAgNzksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgODEsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDUsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwid2ZGV0k4WWF6cTgvbUVFQnluNWJZc3J4bnFhZ0xVcjFJMGhtT0Z1bnl5bz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQVRYSWxqRnVUV3EzZUJqTjM5V2QzZ1wiLFxuICBcInBob25lSWRcIjogXCI4NDJhNTdmYy00N2I5LTRhODItYWUwYS1jM2NiZjFmYzE0NDFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM5LFxuICAgICAgMTAyLFxuICAgICAgNzMsXG4gICAgICAxMDcsXG4gICAgICA5OSxcbiAgICAgIDExMCxcbiAgICAgIDMyLFxuICAgICAgMjUxLFxuICAgICAgMTEyLFxuICAgICAgNjUsXG4gICAgICAzNixcbiAgICAgIDE1OSxcbiAgICAgIDg5LFxuICAgICAgNCxcbiAgICAgIDE3NyxcbiAgICAgIDIyNCxcbiAgICAgIDE3NSxcbiAgICAgIDIyMSxcbiAgICAgIDc1LFxuICAgICAgMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjIsXG4gICAgICAyMTQsXG4gICAgICAyMzcsXG4gICAgICAxOTksXG4gICAgICAxNSxcbiAgICAgIDE5LFxuICAgICAgMTg1LFxuICAgICAgNTAsXG4gICAgICAxNDEsXG4gICAgICAxNzQsXG4gICAgICAzNSxcbiAgICAgIDcyLFxuICAgICAgMTA0LFxuICAgICAgMjgsXG4gICAgICAxNDMsXG4gICAgICA0OCxcbiAgICAgIDE4MyxcbiAgICAgIDEzLFxuICAgICAgMTEwLFxuICAgICAgMTU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk0zSlRLTFE4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDM1OTIzMTczOjYxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5MTk0Mjc2NzU2NzA0MTo2MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNUzIxS1lDRU9EQWhyUUdHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImg1NHg3T1FWdWpjZXY5dzVlc0xzY0Z2M2hNZ3FEMjJVa2ZjUzRXZFErQVE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiejZ6dnI1Ukp0Y1dSMG5RTTlJcFBWYWUxM2tZUUlTbms1TnFrc0NIWFREakk1QzdLS1dUVm1QQ1p6Z3hkUmZSdjN4Y3ZBUHkySnFndkhWbzlLNWVSRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiREVoSHlsSUx5dDhRaExiTFBDd0NUV2JwbkFNKzJJbFlBaWFYNjBFMDVnZXlTMXl5Tk90RGtDTGR0Skc3anVEN0JMR0MyWTRqaUljdzRhUXl5VnkzQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAzNTkyMzE3Mzo2MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTc3MTIzNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5mdlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTmZ2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiYnBGWlZ4UWk2b3N6VXY2UEJhSHphaXBRQWxiT09EcTRkekRvcUM2UU5ZQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2MTc5NDU5MjQsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsM119LFwidGltZXN0YW1wXCI6XCIxNzE4MzI0OTkwMTE1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ໓iงiຖē-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "sᴜʜᴀɪʟ-ᴍᴅ ❤️🖤",
  packname: process.env.PACK_NAME || "໓iงiຖē",
  botname : process.env.BOT_NAME  || "໓iงiຖē sᴜʜᴀɪʟ-ᴍᴅ❤️",
  ownername:process.env.OWNER_NAME|| "໓iงiຖē",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "໓iงiຖē"  ).toUpperCase(),



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
