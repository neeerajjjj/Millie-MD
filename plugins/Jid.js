let handler = async (m, { conn,text,args, groupMetadata }) => {
 const { MessageType } = require('@adiwajshing/baileys')
    let jid 
            if (m.quoted) jid  = m.mentionedJid[0] ? m.mentionedJid[1] : m.quoted.sender
         else jid = m.chat
         m.reply(jid)

}
handler.help = ["jid"];
handler.command = /^jid?$/i


module.exports = handler
