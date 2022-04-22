
let handler = async (m) => {
    let { performance } = require('perf_hooks')
    let old = performance.now()
    await m.reply('_Testing ping..._')
    let neww = performance.now()
    let speed = neww - old
    y = Math.ceil(speed)
  
    m.reply(`${y} _MS_`)
}
handler.help = ['ᴘɪɴɢ']
handler.tags = ['info']

handler.command = /^(ping)$/i
module.exports = handler
