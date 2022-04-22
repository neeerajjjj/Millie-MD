let fs = require('fs')
 ​const​ ​dev​ ​=​[ 'https://www.youtube.com/watch?v=7mHVMEtBn-I'​, 
 ​  ​'https://www.youtube.com/watch?v=0HNEqunpi44'​, 
 ​  ​'https://www.youtube.com/watch?v=mRD0-GxqHVo'​, 
 ​  ​'https://www.youtube.com/watch?v=Ky1dduzoEe0'​, 
 ​  ​'https://www.youtube.com/watch?v=AJtDXIazrMo'​, 
 ​  ​'https://www.youtube.com/watch?v=ApXoWvfEYVU'​, 
 ​  ​'https://youtu.be/e6Bh7rnLWWA'​, 
 ​  ​'https://www.youtube.com/watch?v=g_lAm3Oaz_o'​, 
 ​  ​'https://www.youtube.com/watch?v=ELMmEa1ALqU'​, 
 ​  ​'https://www.youtube.com/watch?v=jJPMnTXl63E'​, 
 ​  ​'https://www.youtube.com/watch?v=CU9gwkZcJgs'​, 
 ​  ​'https://www.youtube.com/watch?v=65pCjkSpfiQ'​, 
 ​  ​'https://www.youtube.com/watch?v=W1tzURKYFNs'​, 
 ​  ​'https://www.youtube.com/watch?v=6LD30ChPsSs'​, 
 ​  ​'https://www.youtube.com/watch?v=5W1L6bFCvvo'​, 
 ​  ​'https://www.youtube.com/watch?v=B5spo12pyoQ'​, 
 ​  ​'https://www.youtube.com/watch?v=xQTO1OW4PXo'​, 
 ​  ​'https://www.youtube.com/watch?v=pHvrxS9VIPw'​, 
 ​  ​'https://youtu.be/d9IKg-nizhQ'​  
 ​] 
 ​var​ ​tod​ ​=​ ​dev​[​Math​.​floor​(​Math​.​random​(​)​ ​*​ ​(​dev​.​length​)​)​] 
 ​let​ ​handler​  ​=​ ​async​ ​(​m​,​ ​{​ conn​,​ text ​}​)​ ​=>​ ​{ 
  
 ​  ​let​ ​fetch​ ​=​ ​require​(​'node-fetch'​) 
 ​  ​const​ ​{ 
 ​    MessageType​, 
 ​    Mimetype 
 ​}​ ​=​ ​require​(​"@adiwajshing/baileys"​)​; 
 ​const​ ​sonic =​ ​{ 
 ​        ​key​ : ​{ 
 ​                          ​participant​ : ​'0@s.whatsapp.net'​, 
 ​    ​remoteJid​ : ​'120363040549014341@g.us' 
 ​                        ​}​, 
 ​       ​message​: ​{ 
 ​                    ​orderMessage​: ​{ 
 ​                            ​itemCount​ : ​2022​, 
 ​                            ​itemCoun​ : ​2022​, 
 ​                            ​surface​ : ​2022​, 
 ​                            ​message​: ​'「 ᴍɪʟʟɪᴇ ʙʀᴏᴀᴅᴄᴀsᴛ 」'​, 
 ​                            ​orderTitle​: ​'B'​, 
 ​                            ​thumbnail​: ​fs​.​readFileSync​(​'./thumb2.jpg'​)​, 
 ​                            ​sellerJid​: ​'0@s.whatsapp.net' 
  
 ​                          ​} 
 ​                        ​} 
 ​                      ​} 
 ​  ​let​ ​who​ ​=​ ​m​.​mentionedJid​ ​&&​ ​m​.​mentionedJid​[​0​]​ ? ​m​.​mentionedJid​[​0​]​ : ​m​.​fromMe​ ? ​conn​.​user​.​jid​ : ​m​.​sender 
 ​  ​try​ ​{ 
 ​    ​pp​ ​=​ ​await​ ​conn​.​getProfilePicture​(​who​)​} 
 ​    ​catch​ ​(​e​)​{ 
 ​    ​} 
  
 ​  ​let​ ​groups​ ​=​ ​conn​.​chats​.​all​(​)​.​filter​(​v​ ​=>​ ​v​.​jid​.​endsWith​(​'g.us'​)​ ​&&​ ​!​v​.​read_only​ ​&&​ ​v​.​message​ ​&&​ ​!​v​.​announce​)​.​map​(​v​ ​=>​ ​v​.​jid​) 
 ​  ​let​ ​cc​ ​=​ ​text​ ? ​m​ : ​m​.​quoted​ ? ​await​ ​m​.​getQuotedObj​(​)​ : ​false​ ​||​ ​m 
 ​  ​let​ ​teks​ ​=​ ​text​ ? ​text​ : ​cc​.​text 
 ​  ​let​ ​content​ ​=​ ​await​ ​conn​.​cMod​(​m​.​chat​,​ ​cc​,​ ​/​bc​|​broadcast​/​.​test​(​teks​)​ ? ​teks​ : ​teks​ ​+​ ​'\n\n'​ ​+​ ​'「𝚂𝙾𝙽𝙸𝙲 𝙱𝚁𝙾𝙰𝙳𝙲𝙰𝚂𝚃」'​) 
 ​  ​conn​.​reply​(​m​.​chat​,​ ​`Send a broadcast message to ​${​groups​.​length​}​ group`​,​ ​m​) 
 ​  ​for​ ​(​let​ ​id​ ​of​ ​groups​)​ ​{ 
 ​await​ ​delay​(​3000​) 
 ​await​ ​conn​.​copyNForward​(​id​,​ ​content​,​ ​'conversation'​,​{​quoted​:​devil​,​thumbnail​: ​fs​.​readFileSync​(​'./thumb.jpg'​)​,​ ​contextInfo​:​{​externalAdReply​: ​{​ ​title​: ​`ᴛᴇᴀᴍ-ᴇʟᴇᴄᴛʀᴀ`​,​ ​body​: ​`𝚂𝚘𝚗𝚒𝚌-𝙼𝙳`​,​ ​mediaUrl​: ​tod​,​ ​mediaType​: ​2​,​ ​thumbnail​: ​fs​.​readFileSync​(​'./thumb.jpg'​)​}​}​,​mp3​:​true​}​ ​,​true​) 
 ​} 
 ​  ​conn​.​reply​(​m​.​chat​,​ ​`Done`​,​ ​m​) 
 ​} 
 ​handler​.​help​ ​=​ ​[​'bcgc2'​]​.​map​(​v​ ​=>​ ​v​ ​+​ ​' <text>'​) 
 ​handler​.​tags​ ​=​ ​[​'owner'​] 
 ​handler​.​command​ ​=​ ​/^(bcgc2)$/i
 ​handler​.​premium​ ​=​ ​true 
  
 ​handler​.​fail​ ​=​ ​null 
  
 ​module​.​exports​ ​=​ ​handler 
  
 ​const​ ​more​ ​=​ ​String​.​fromCharCode​(​8206​) 
 ​const​ ​readMore​ ​=​ ​more​.​repeat​(​4001​) 
  
 ​const​ ​randomID​ ​=​ ​length​ ​=>​ ​require​(​'crypto'​)​.​randomBytes​(​Math​.​ceil​(​length​ ​*​ ​.5​)​)​.​toString​(​'hex'​)​.​slice​(​0​,​ ​length​)
