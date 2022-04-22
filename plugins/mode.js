let handler = async(m, { conn, usedPrefix, command }) => {
  let isPublic = command === "public";
  let self = global.opts["self"]
  if(self === !isPublic) return conn.sendB(m.chat, `Bye ${!isPublic ? "Self" : "Public"} from earlier ${m.sender.split("@")[0] === global.owner[0] ? "miss" : "Bang"} :v`, wm, false, [[`${!isPublic ? "Public" : "Self"}`, `${usedPrefix}${!isPublic ? "public" : "self"}`]], m)
  global.opts["self"] = !isPublic
  conn.sendB(m.chat, `${!isPublic ? "Self" : "Public"} bot Activated!`, wm, false, [[`${!isPublic ? "Public" : "Self"}`, `${usedPrefix}${!isPublic ? "public" : "self"}`]], m)    
}
handler.help = ["sᴇʟғ", "ᴘᴜʙʟɪᴄ"]
handler.tags = ["owner"]
handler.command = /^(self|public)/i

handler.rowner = true 

module.exports = handler
