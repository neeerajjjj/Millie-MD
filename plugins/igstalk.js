let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'No Username found'

  fetch(`https://api.xteam.xyz/dl/igstalk?nama=${args[0]}&APIKEY=d37372311698ed1d`)  
.then(res => res.json())
.then(
    result => {
      this.setState({
        data: result
      });
    },
  error => {
    console.log(error);
  }
);

fullname = this.state.result.Name
let caption = `*Name : *${fullname}
`.trim()
  if (pp) conn.sendMessage(m.chat,caption, m)
  else m.reply(caption)
}
handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['downloader']

handler.command = /^(igstalk)$/i


module.exports = handler
