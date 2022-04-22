let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let blnc = `╭─  BALANCE 
│• Name: *${user.name}*
│• Limit: *${user.limit}*
│• Money: *${user.money}*
│• Exp: *${user.exp}*
│• Level: *${user.level}*
│• Role: *${user.role}*
${sb}`
 conn.sendB(m.chat, blnc, wm,+ `${command} ${user.name}`, [[`Menu`,`${usedPrefix}menu`]], m) 
}
handler.help = ['𝙱𝙰𝙻𝙰𝙽𝙲𝙴', '𝙱𝙰𝙻𝙰𝙽𝙲𝙴 <@𝚞𝚜𝚎𝚛>']
handler.tags = ['xp']
handler.command = /^(balance)$/i

module.exports = handler