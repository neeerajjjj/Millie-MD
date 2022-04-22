let handler = async (m, { isAdmin, isOwner, conn }) => {
  if (!(isAdmin || isOwner)) {
                global.dfail('admin', m, conn)
                throw false
                }
  conn.groupRevokeInvite(m.chat)
  conn.reply(m.chat, `Successfully resetted group link, link has been sent to private chat`, m)
  await delay(1000)
  conn.reply(m.sender, 'https://chat.whatsapp.com/' + conn.groupInviteCode(m.chat), m)
}
handler.help = ['ʀᴇᴠᴏᴋᴇ']
handler.tags = ['group']
handler.command = /^re(voke|new|set)(invite|link)?$/i

handler.group = true
handler.botAdmin = true

module.exports = handler

const delay = time => new Promise(res => setTimeout(res, time))
