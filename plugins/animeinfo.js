let handler = async(m, { conn, command, text }) => {
  if (!text) throw `Enter the anime!`
  m.reply(wait)
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/anime', { q: text }))
  if (!res.ok) throw `${command} *${text}* not found!` //await res.text()
  let json = await res.json()
  let { title, synopsis, episodes, url, rated, score, image_url } = json.results[0]
  let ingfonya = `✨️ *Title:* ${title}
🎆️ *Episodes:* ${episodes}
💌️ *Rating:* ${rated}
❤️ *Score:* ${score}
💚️ *Synopsis:* ${synopsis}
`.trim()
conn.sendTBI(m.chat, ingfonya, wm, image_url, `${title}`, `${url}`, null, m)
} 
handler.help = ['𝙰𝙽𝙸𝙼𝙴𝙸𝙽𝙵𝙾 [𝚀𝚞𝚎𝚛𝚢]']
handler.tags = ['anime']
handler.command = /^(animeinfo|ing?foanime?)$/i

handler.register = true 

module.exports = handler
