const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "🖤",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello* ${pushname}

*𝐍𝐄𝐓𝐇𝐌𝐈𝐍𝐀 𝐎𝐅𝐂 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓*

*┌───────────◉▸▷*
*├ʙᴏᴛ :- Nᴇᴛʜᴍɪɴᴀ-ᴏꜰᴄ-ᴡᴀʙᴏᴛ*
*├ᴏᴡɴᴇʀ :- Nᴇᴛʜᴍɪɴᴀ ᴏꜰꜰɪᴄɪᴀʟ*
*├ꜰʀᴏᴍ :- Galle*
*├ᴀɢᴇ :- 999+*
*└───────────◉▸▷*

*ᴍᴏʀᴇ ᴅɪᴛᴇʟꜱ -* https://wa.me/+94764984597?text=ʜᴇʏ+ᴍᴅ+ʏᴏᴜ+ᴅɪᴛᴇʟꜱ+👨🏻‍💻👑📍

*BOT GROUP -* https://chat.whatsapp.com/FUGjjEbLPQp7KHL5jAUJb8

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɴᴇᴛʜᴍɪɴᴀ-ᴏꜰᴄ-ᴡᴀʙᴏᴛ*`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/6437d9ac01c94cee08070.jpg`},caption:dec},{quoted:mek});
}catch(e){
console.log(e)
reply(`${e}`)
}
})
