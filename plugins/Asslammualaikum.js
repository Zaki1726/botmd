let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/9413ad2345e8b914cdfba.png', m, { packname: "sticker by", author: "Zhill" })
}

handler.customPrefix = /^(asslammualaikum)$/i
handler.command = new RegExp

module.exports = handler
