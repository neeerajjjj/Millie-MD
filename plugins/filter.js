let handler = async (m, { conn,text,args, usedPrefix }) => {
let key = text.split`:`[0]
let value = text.split`:`[1]
if (!key) throw `_Syntax Error_

Correct Usage : ${usedPrefix}filter <filter>:<response>
`
if (!value) throw `_Syntax Error_

Correct Usage : ${usedPrefix}filter <filter>:<response>
`
let access
if (m.isGroup) access = global.db.data.chats[m.chat]
else access = global.db.data.users[m.sender]
 access.filter[key] = value

}
handler.help = ["filter"];
handler.command = /^filter?$/i


module.exports = handler