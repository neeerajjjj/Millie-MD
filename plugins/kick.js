let handler = async (m, { text, conn, isOwner, isAdmin }) => {
  if (!(isAdmin || isOwner)) {
                global.dfail('admin', m, conn)
                throw false
                }
  let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  if(m.quoted){
if(m.quoted.sender === ownerGroup || m.quoted.sender === conn.user.jid) return;
let usr = m.quoted.sender;
await sock.groupParticipantsUpdate(
  m.chat, 
  [usr],
  "remove" // replace this parameter with "remove", "demote" or "promote"
)
//conn.groupRemove(m.chat, [usr]); return;
} 
  if(!text && !m.quoted) return conn.reply(m.chat, `tag you want to kick`, m) 
  let users = m.quoted ? m.quoted.sender : m.sender
  for (let user of users) if (user.endsWith('@s.whatsapp.net')) await sock.groupParticipantsUpdate(
    m.chat, 
    [user],
    "remove" // replace this parameter with "remove", "demote" or "promote"
)
 // await conn.groupRemove(m.chat, [user])
}
handler.help = ['ᴋɪᴄᴋ @ᴜsᴇʀ']
handler.tags = ['admin']
handler.command = /^(kick)$/i

handler.group = true
handler.botAdmin = true

module.exports = handler
