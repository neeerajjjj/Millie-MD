let fetch = require('node-fetch')
const { servers, yta } = require('../lib/y2mate')
const { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let handler = async (m, { conn, text, args, isPrems, isOwner }) => {
  if (!text) throw `uhm urlnya mana?`
  if (!args[0].match(/(https|http):\/\/(www.youtube.com|www.youtube|www.youtu.be|youtube.com|youtu.be.com|youtu.be)\/(watch|shorts)|(https|http):\/\/(www.youtube.com|www.youtube|www.youtu.be|youtube.com|youtu.be.com|youtu.be)/gi)) throw ra
  let limit 
  if((isOwner || isPrems)) limit = 250
  else limit = 100
  if (!args || !args[0]) throw 'Uhm... urlnya mana?'
  try {
  var audi = await youtubedl(args[0])
  var { thumbnail, audio, title } = audi
  var det = audi.audio['320kbps']
  var { quality, fileSizeH, fileSize } = det
  var url = await det.download()
  
await conn.sendMedia(m.chat, url, 0, {
  contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: `${args[0]}`,
    mediaType: 2,
    description: deslink, 
    title: title,
    body: `Sonic-MD`, // `${fileSizeH}`,
    thumbnail: await(await fetch(thumbnail)).buffer(), 
   }}
  }) 
  } catch {
  try {
  var audi = await youtubedlv2(args[0])
  var { thumbnail, audio, title } = audi
  var det = audi.audio['320kbps']
  var { quality, fileSizeH, fileSize } = det
  var url = await det.download()
 
 await conn.sendMedia(m.chat, url, 0, {
  contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: `${args[0]}`,
    mediaType: 2,
    description: deslink, 
    title: title,
    body: `Sonic-MD`, //`${fileSizeH}`,
    thumbnail: await(await fetch(thumbnail)).buffer(),
   }}
  }) 
  } catch {
  try {
  var audi = await youtubedlv3(args[0])
  var { thumbnail, audio, title } = audi
  var det = audi.audio['320kbps']
  var { quality, fileSizeH, fileSize } = det
  var url = await det.download()
  let isLimit = (isPrems || isOwner ? limit : limit) * 1024 < fileSize
  if(!isLimit) await conn.sendMedia(m.chat, url, 0, {
  contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: `${args[0]}`,
    mediaType: 2,
    description: deslink, 
    title: title,
    body: `Sonic-MD`, //`${fileSizeH}`,
    thumbnail: await(await fetch(thumbnail)).buffer(),
   }}
  }) 
  } catch {
  try {
  let server = (args[1] || servers[0]).toLowerCase()
  let { dl_link, thumb, filesize } = await yta(args[0], servers.includes(server) ? server : servers[0])
  let isLimit = (isPrems || isOwner ? limit : limit) * 1024 < filesize
  if(!isLimit) await conn.sendMedia(m.chat, dl_link, null, {
  contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: `${args[0]}`,
    mediaType: 2,
    description: deslink, 
    title: title,
    body: `Sonic-MD`, //`${filesizeF}`,
    thumbnail: await(await fetch(thumb)).buffer(), 
   }}
  })
  } catch {
    throw eror 
        }
      }
    }
  }
}

handler.command = /^(psp)$/i


module.exports = handler 
