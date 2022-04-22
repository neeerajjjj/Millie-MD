const { generateThumbnail } = require("@adiwajshing/baileys")
const { ms } = require("translate-google/languages")

let handler = async(m, { conn }) => {
  let msg = "🎈ɴᴏ ᴄᴀʟʟs ᴏɴʟʏ ᴍᴇssᴀɢᴇ"
  let name= m.sender
  let mail = 'krishnaneeraj775@gmail.com'
  let verfication = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '120363040549014341@g.us' } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
   try {
await conn.sendContactArray(m.chat, [
    [`${owner[0]}`, `ɴᴇᴇʀᴀᴊ`,`Just a Chad with a curios Mind`,msg,mail]
],verfication) 
   } catch {
 }
}
handler.help = ['ᴏᴡɴᴇʀ']
handler.tags = ['info']
handler.command = /^(owner)$/i

module.exports = handler



