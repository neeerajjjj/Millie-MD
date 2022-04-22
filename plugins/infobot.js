let handler = async (m, { conn, command, usedPrefix, text }) => {
let canvas = require("discord-canvas")
  let fetch = require('node-fetch')
  let _uptime = process.uptime() * 1000
  let a = require('moment-timezone').tz('Asia/Kolkata').format('HH:mm:ss') 
  let d = new Date(new Date + 3600000)
  let locale = 'in'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    const welcome = canvas.default.Welcome()
                    .setUsername(username)
                    .setDiscriminator(memberCount)
                    .setMemberCount(memberCount)
                    .setGuildName(group.subject)
                    .setAvatar(pfp)
                    .setColor("border", "#FFC0CB")
                    .setColor("username-box", "#FFFFFF")
                    .setColor("discriminator-box", "#FFFFFF")
                    .setColor("message-box", "#FFFFFF")
                    .setColor("title", "#FFFFFF")
                    .setColor("avatar", "#00FF00")
                    .setText("member-count", `- ${memberCount} member !`)
                    .setText("title", "hello")
                    .setText("message", `welcome to ${group.subject}`)
                    .setBackground("https://i.ibb.co/8B6Q84n/LTqHsfYS.jpg")
                    .toAttachment();
  let runtime = clockString(_uptime)
  let usergakdaftar = Object.keys(global.db.data.users).length
  let userdaftar = Object.values(global.db.data.users).filter(user => user.registered == true).length
  let infonyacok = `
╭─${kki} ${conn.user.name} 」
│•
 Library : *Baileys-MD*
│•
 Language : *Javascript*
│•
 Database : *SQL*
│•
 Version : *${version}*
│•
 Developer : *${wm}*
│•
 Runtime : *${runtime}*
│•
 Prefix : *Multi Prefix 「 ${usedPrefix} 」*
│•
 Mode : *${global.opts['self'] ? 'Self' : 'Public'}*
│•
 User : *${usergakdaftar}*
│•
 Register : *${userdaftar}*
${sb}
`.trim()
var as = `Date :${date}\nTime : ${a} (WIB)`
 //conn.sendTIL(m.chat, infonyacok, as, fla + `${command}`, `Source Code`, `https://github.com/Team-Electra4`, null, null, `Menu`, `${usedPrefix}menu`, null, null, null, null, m, 
   conn.sendBL(m.chat, infonyacok, as, fla + `${command}`, [[`SC Bot`, `${usedPrefix}sc`], [`Menu`, `${usedPrefix}menu`]], m,        
           )

}
handler.help = ['ɪɴғᴏ']
handler.tags = ['info']
handler.command = /^(info(bot)?)$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

