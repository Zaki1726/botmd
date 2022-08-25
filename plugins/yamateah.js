let handler  = async (m, { conn }) => {
	
	await m.reply('WAIT..')
  conn.reply(m.chat,`${pickRandom(global.enak)}`, m)
}
handler.help = ['yamateah']
handler.tags = ['bokep','premium']
handler.command = /^(yamateah)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.enak = [
'Janji Gak Crot? : https://vid-cf.xnxx-cdn.com/cd9dd15fda8e562eebea5df1a56e708f93e3548d-1661438571/videos/mp4/e/4/b/xvideos.com_e4bae282cd0f99549b438b7c57f0f62b.mp4',
'Janji Gak Crot? : https://vid-cf.xnxx-cdn.com/cd9dd15fda8e562eebea5df1a56e708f93e3548d-1661438571/videos/mp4/e/4/b/xvideos.com_e4bae282cd0f99549b438b7c57f0f62b.mp4',
'*Mending Lu Tobat Dah Daripada Nanti Dicabut Nyawanya',
]
