//ubah jadi grup mu

let handler = async m => m.reply(`

Iya SayangKu🥰👄❤️

`.trim()) 
handler.help = ['Sayang']
handler.tags = ['main']
handler.command = /^(Sayang)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
