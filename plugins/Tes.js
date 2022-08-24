//ubah jadi grup mu

let handler = async m => m.reply(`

╭═════════════════
║Bot Sedang On
╰Ⓐⓩⓗⓘⓛ Ⓑⓞⓣⓩ

`.trim()) 
handler.help = ['tes']
handler.tags = ['main']
handler.command = /^(tes)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
