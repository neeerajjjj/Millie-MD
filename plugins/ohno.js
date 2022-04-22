let handler = async (m, { text }) => {
    const { MessageType } = require("@adiwajshing/baileys")
    let fetch = require('node-fetch')
  let buff  = await (await fetch(`https://api.lolhuman.xyz/api/creator/ohno?apikey=63e06f04238e6f2267709a63&text=${text}`)).buffer()
  
  conn.sendFile(m.chat, buff,MessageType.image)
  }  
  handler.help = ['ohno']
  handler.tags = ['fun']
  handler.command = /^ohno$/i
  handler.sudo = true
  
  module.exports = handler