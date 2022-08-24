//ubah jadi grup mu

let handler = async m => m.reply(`
╭═════════════════
║NameOwner :"Zakky"
║Age :"13"
║Hobby :"sleep"
║Programmer :"No"
║Ngocok :"Every day"
║Crush :"There aren't any"
╰══════════════════
`.trim()) 
handler.help = ['infoow']
handler.tags = ['main']
handler.command = /^(infoow)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
