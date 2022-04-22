// Magernulis By MFarelS:V
// Code by DrawlNag
// Recode by Nurutomo :V
let handler  = async (m, { command, conn, text }) => {
  let id = (command.match(/[1-6]$/) || [])[0] || ''
  await conn.sendFile(m.chat, global.API('xteam', '/magernulis' + id, {
    text,
    nama: 'sonic',
    kelas: ' '
  }, 'APIKEY'), 'nulis.jpg', '', m)
}
handler.help = new Array(6).fill('nulis').map((v, i) => v + (i + 1) + ' <text>')
handler.tags = ['nulis']
handler.command = /^nulis[1-6]?$/i


module.exports = handler
