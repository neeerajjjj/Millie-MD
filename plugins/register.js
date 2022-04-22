const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `You are already registered\nWant to re-register? ${usedPrefix}unreg <SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Example:\n*${usedPrefix + command} Electra.1*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Name cannot be empty (Alphanumeric)'
  if (!age) throw 'Age cannot be empty (Number)'
  age = parseInt(age)
  if (age > 70) throw 'Age too old'
  if (age < 5) throw 'Babies can type according to the bjir format, but I don\'t know if it\'s too small now it\'s epic² for sure the child is hungry :v'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let pp = await conn.profilePictureUrl(m.sender, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let sn = createHash('md5').update(m.sender).digest('hex')
  conn.sendBL(m.chat, `
*Successful Registration*

╭─${kki} *Info User* 」
│•
 Name   : ${name}
│•
 Age   : ${age} tahun
│•
 Status : Registered √
│•
 Present : ${prems.includes(m.sender.split`@`[0]) ? '✅ Please Chat Owner for Claiming XP' : '❌ Not a premium user'}
${sb}
`.trim(), wm, pp, [[`Profile`,`${usedPrefix}profile`], [`Show SN`, `.sn`]], m) 
}
handler.help = ['ʀᴇɢɪsᴛᴇʀ'].map(v => v + '<ɴᴀᴍᴇ>.<ᴀɢᴇ>')
handler.tags = ['xp']

handler.command = /^(reg(is(ter)?)?)$/i

module.exports = handler
