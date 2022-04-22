let fetch = require('node-fetch')
let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)

let handler  = async (m, { conn, usedPrefix, command, args, text }) => {
  if (!text) return m.reply('What are you looking for?')
  try {
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) return m.reply('Sorry, no image found!')
  let sell = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)).data}`
  await conn.sendBI(m.chat, sell, wm, url, [[`Next`, `${usedPrefix}${command} ${text}`]], m, {jpegThumbnail: await(await fetch(url)).buffer() })
  } catch {
    throw eror 
    }
  }
handler.help = ['ɪᴍɢ <ǫᴜᴇʀʏ>']
handler.tags = ['internet']
handler.command = /^(img)$/i

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
