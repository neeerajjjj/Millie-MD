let handler = async(m, { text, conn, usedPrefix, command }) => {
  if (/saveme|sv(me|gua|g?w|aku)$/i.test(command)) {
     conn.sendContact(m.chat, `${m.sender.split('@')[0]}`, `${await conn.getName(m.sender)}`, m)
    }
    let teks = text
  if (/savehe?s?|svshe|savedia|svdia$/i.test(command)) {
     try {
     let who
     if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
     else who = m.quoted.sender ? m.quoted.sender : m.sender
     conn.sendContact(m.chat, `${who.split('@')[0]}`, `${await conn.getName(who)}`, m)
    } catch {
      throw `@tag or reply the contact `
      }
    }
  if (/save|sv$/i.test(command)) {
     if(!text) 
          teks = conn.getName(who)
     try {
     let who
     if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
     else who = m.quoted.sender ? m.quoted.sender : m.sender
     conn.sendContact(m.chat, `${who.split('@')[0]}`, teks, m) 
  } catch {
     conn.sendContact(m.chat, `${m.sender.split('@')[0]}`, teks, m)
  }
 }
}
handler.help = ['sᴀᴠᴇ <@ᴛᴀɢ/ʀᴇᴘʟʏ>']
handler.tags = ['tools']
handler.command = /^sa?ve?(me|aku|aq|gua|g?w)?(he'?s?|sh?e|dia)?$/i

module.exports = handler
