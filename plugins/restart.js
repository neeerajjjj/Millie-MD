let handler = async (m, { conn, isROwner, text }) => {
    let { spawn } = require('child_process');
    if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
    if (global.conn.user.jid == conn.user.jid) {
    await m.reply('_Restarting the Bot..._')
    process.send('reset')
  } else throw '_Try again Later_'
}

handler.help = ['ʀᴇsᴛᴀʀᴛ']
handler.tags = ['host']
handler.command = /^(res(tart)?)$/i

handler.rowner = true

module.exports = handler
