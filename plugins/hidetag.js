let handler = async(m, { isOwner, isAdmin, conn, text }) => {
let name = await conn.getName(m.sender)
if (!(isAdmin || isOwner)) {
                global.dfail('admin', m, conn)
                throw false
                }
  let teksnya = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
  var hid = await conn.groupMetadata(m.chat)
  conn.sendMessage(m.chat, { text: teksnya, mentions: hid.participants.map(a => a.id) })//, {quoted: fkonn})
}
handler.help = ['ᴛᴀɢ <ᴍᴇssᴀɢᴇ>']
handler.tags = ['group']
handler.command = /^(h(ide?tag)?|pengumuman|announce?(d)?)$/i

handler.group = true

module.exports = handler
  
