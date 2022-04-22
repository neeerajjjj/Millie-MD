let handler = async(m, { conn, usedPrefix, text }) => {
    let user = global.db.data.users[m.sender]
    user.afk = +new Date
    user.afkReason = text
    conn.sendB(m.chat, `*AFK ENABLED*\n\n${conn.getName(m.sender)} is now AFK${text ? ': ' + text : ''}`, wm, null, [[`Menu`, `${usedPrefix}menu`]], m)
}
handler.help = ['𝙰𝙵𝙺 [𝚁𝚎𝚊𝚜𝚘𝚗]']
handler.tags = ['main']
handler.command = /^afk$/i

module.exports = handler
