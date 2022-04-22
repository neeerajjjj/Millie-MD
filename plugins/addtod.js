let fs = require('fs')
let handler = async (m, { conn, text }) => {

    const json = JSON.parse(fs.readFileSync('./src/tod.json'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    else who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    if (json.includes(conn.getName(who))) throw `${conn.getName(who)} is already added to the list`
    json.push(conn.getName(who))
    fs.writeFileSync('./src/tod.json', JSON.stringify(json))
    m.reply(`${conn.getName(who)} added to truth or dare players`)

    delete require.cache[require.resolve('../config')]
    require('../config')

}
handler.help = ['𝚊𝚍𝚍𝚝𝚘𝚍 [@𝚞𝚜𝚎𝚛]']
handler.tags = ['fun']
handler.command = /^(addtod)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false

module.exports = handler
