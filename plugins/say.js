let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `No Text Found\n\nExample:\n${usedPrefix + command} Hello`
    conn.reply(m.chat, text, null)
}
handler.help = ['say <ᴛᴇxᴛ>']
handler.tags = ['tools']
handler.command = /^(say)$/i

module.exports = handler
